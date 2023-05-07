import { Command, Flags } from "@oclif/core";
import { shuffle } from "lodash";
import * as jwt from "jsonwebtoken";
import * as jsYaml from "js-yaml";

export default class Generate extends Command {
  static description = `Generate the secrets for the .env file in Supabase`;

  static examples = [
    "<%= config.bin %> <%= command.id %>",
    "<%= config.bin %> <%= command.id %> -o yaml | tee output.yaml",
    "<%= config.bin %> <%= command.id %> -o yaml --jwt-secret-dict=abcdef0123456789 | tee output.yaml",
    "<%= config.bin %> <%= command.id %> --jwt-secret=my-jwt-secret -o json > tee output.json",
  ];

  static flags = {
    output: Flags.string({
      char: "o",
      options: ["env", "json", "yaml"],
      description:
        "The output format that you would like to print the data. You can use this to `tee` the data into a file.",
      default: "env",
    }),
    "jwt-secret": Flags.string({
      char: "j",
      description:
        "The JWT secret that you would like to use. If not provided, a random secret will be generated.",
      required: false,
    }),
    "jwt-secret-dict": Flags.string({
      char: "d",
      description:
        "The dictionary that you would like to use to generate the JWT secret. If not provided, the default dictionary will be used.",
      default:
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()<>~._-+=:;,",
    }),
    "jwt-secret-length": Flags.integer({
      char: "l",
      description:
        "The length of the JWT secret that you would like to generate. If not provided, the default length will be used.",
      default: 64,
    }),
  };

  static args = {};

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Generate);

    // 1. Get or generate the JWT secret
    let jwtSecret = flags["jwt-secret"];
    if (!jwtSecret) {
      jwtSecret = this.generateRandomSecret(
        flags["jwt-secret-dict"],
        flags["jwt-secret-length"],
      );
    }

    // 2. Generate the anon key
    const anonKey = jwt.sign(
      {
        role: "anon",
      },
      jwtSecret,
      {
        algorithm: "HS256",
        expiresIn: "5y",
        issuer: "supabase",
      },
    );

    // 3. Generate the service account key
    const serviceRoleKey = jwt.sign(
      {
        role: "service_role",
      },
      jwtSecret,
      {
        algorithm: "HS256",
        expiresIn: "5y",
        issuer: "supabase",
      },
    );

    // 4. Output the data
    const outputJson: { [key: string]: string } = {
      JWT_SECRET: jwtSecret,
      ANON_KEY: anonKey,
      SERVICE_KEY: serviceRoleKey,
    };

    switch (flags.output) {
      case "env":
        for (const key in outputJson) {
          this.log(`${key}="${outputJson[key]}"`);
        }
        break;
      case "json":
        this.log(JSON.stringify(outputJson, null, 2));
        break;
      case "yaml":
        this.log(jsYaml.dump(outputJson));
        break;
      default:
        this.error(`Unknown output type...`);
    }
  }

  private generateRandomSecret(dictionary: string, length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += shuffle(dictionary.split(""))[0];
    }
    return result;
  }
}
