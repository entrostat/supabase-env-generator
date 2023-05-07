supabase-env-generator
=================

Generate the `ANON_KEY` and `SERVICE_KEY` for your Supabase instance and output it as a `.env`, `yaml` or `json` file.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage

The recommended usage for this would be to use `npx`, an example would be as follows:

```shell
# YAML output
npx supabase-env-generator generate -o yaml | tee output.yaml

# JSON output
npx supabase-env-generator generate -o json | tee output.json

# .env output
npx supabase-env-generator generate | tee .env
```

You can now plug/pipe this into your deployment tools to carry this through to your deployment.

--- 

Full usage can be seen below

<!-- usage -->
```sh-session
$ npm install -g supabase-env-generator
$ supabase-env-generator COMMAND
running command...
$ supabase-env-generator (--version)
supabase-env-generator/0.1.1 linux-x64 node-v16.19.0
$ supabase-env-generator --help [COMMAND]
USAGE
  $ supabase-env-generator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`supabase-env-generator generate`](#supabase-env-generator-generate)
* [`supabase-env-generator help [COMMANDS]`](#supabase-env-generator-help-commands)

## `supabase-env-generator generate`

Generate the secrets for the .env file in Supabase

```
USAGE
  $ supabase-env-generator generate [-o env|json|yaml] [-j <value>] [-d <value>] [-l <value>]

FLAGS
  -d, --jwt-secret-dict=<value>    [default:
                                   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()<>~._-+=:;,] The
                                   dictionary that you would like to use to generate the JWT secret. If not provided,
                                   the default dictionary will be used.
  -j, --jwt-secret=<value>         The JWT secret that you would like to use. If not provided, a random secret will be
                                   generated.
  -l, --jwt-secret-length=<value>  [default: 64] The length of the JWT secret that you would like to generate. If not
                                   provided, the default length will be used.
  -o, --output=<option>            [default: env] The output format that you would like to print the data. You can use
                                   this to `tee` the data into a file.
                                   <options: env|json|yaml>

DESCRIPTION
  Generate the secrets for the .env file in Supabase

EXAMPLES
  $ supabase-env-generator generate

  $ supabase-env-generator generate -o yaml | tee output.yaml

  $ supabase-env-generator generate -o yaml --jwt-secret-dict=abcdef0123456789 | tee output.yaml

  $ supabase-env-generator generate --jwt-secret=my-jwt-secret -o json > tee output.json
```

_See code: [dist/commands/generate.ts](https://github.com/entrostat/supabase-env-generator/blob/v0.1.1/dist/commands/generate.ts)_

## `supabase-env-generator help [COMMANDS]`

Display help for supabase-env-generator.

```
USAGE
  $ supabase-env-generator help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for supabase-env-generator.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_
<!-- commandsstop -->
