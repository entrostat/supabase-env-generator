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
<!-- usage -->
```sh-session
$ npm install -g supabase-env-generator
$ supabase-env-generator COMMAND
running command...
$ supabase-env-generator (--version)
supabase-env-generator/0.1.0 linux-x64 node-v16.19.0
$ supabase-env-generator --help [COMMAND]
USAGE
  $ supabase-env-generator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`supabase-env-generator hello PERSON`](#supabase-env-generator-hello-person)
* [`supabase-env-generator hello world`](#supabase-env-generator-hello-world)
* [`supabase-env-generator help [COMMANDS]`](#supabase-env-generator-help-commands)

## `supabase-env-generator hello PERSON`

Say hello

```
USAGE
  $ supabase-env-generator hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/entrostat/supabase-env-generator/blob/v0.1.0/dist/commands/hello/index.ts)_

## `supabase-env-generator hello world`

Say hello world

```
USAGE
  $ supabase-env-generator hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ supabase-env-generator hello world
  hello world! (./src/commands/hello/world.ts)
```

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
