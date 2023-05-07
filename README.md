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
supabase-env-generator/0.0.0 linux-x64 node-v16.19.0
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
* [`supabase-env-generator plugins`](#supabase-env-generator-plugins)
* [`supabase-env-generator plugins:install PLUGIN...`](#supabase-env-generator-pluginsinstall-plugin)
* [`supabase-env-generator plugins:inspect PLUGIN...`](#supabase-env-generator-pluginsinspect-plugin)
* [`supabase-env-generator plugins:install PLUGIN...`](#supabase-env-generator-pluginsinstall-plugin-1)
* [`supabase-env-generator plugins:link PLUGIN`](#supabase-env-generator-pluginslink-plugin)
* [`supabase-env-generator plugins:uninstall PLUGIN...`](#supabase-env-generator-pluginsuninstall-plugin)
* [`supabase-env-generator plugins:uninstall PLUGIN...`](#supabase-env-generator-pluginsuninstall-plugin-1)
* [`supabase-env-generator plugins:uninstall PLUGIN...`](#supabase-env-generator-pluginsuninstall-plugin-2)
* [`supabase-env-generator plugins update`](#supabase-env-generator-plugins-update)

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

_See code: [dist/commands/hello/index.ts](https://github.com/entrostat/supabase-env-generator/blob/v0.0.0/dist/commands/hello/index.ts)_

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

## `supabase-env-generator plugins`

List installed plugins.

```
USAGE
  $ supabase-env-generator plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ supabase-env-generator plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `supabase-env-generator plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ supabase-env-generator plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ supabase-env-generator plugins add

EXAMPLES
  $ supabase-env-generator plugins:install myplugin 

  $ supabase-env-generator plugins:install https://github.com/someuser/someplugin

  $ supabase-env-generator plugins:install someuser/someplugin
```

## `supabase-env-generator plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ supabase-env-generator plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ supabase-env-generator plugins:inspect myplugin
```

## `supabase-env-generator plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ supabase-env-generator plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ supabase-env-generator plugins add

EXAMPLES
  $ supabase-env-generator plugins:install myplugin 

  $ supabase-env-generator plugins:install https://github.com/someuser/someplugin

  $ supabase-env-generator plugins:install someuser/someplugin
```

## `supabase-env-generator plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ supabase-env-generator plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ supabase-env-generator plugins:link myplugin
```

## `supabase-env-generator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ supabase-env-generator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ supabase-env-generator plugins unlink
  $ supabase-env-generator plugins remove
```

## `supabase-env-generator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ supabase-env-generator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ supabase-env-generator plugins unlink
  $ supabase-env-generator plugins remove
```

## `supabase-env-generator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ supabase-env-generator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ supabase-env-generator plugins unlink
  $ supabase-env-generator plugins remove
```

## `supabase-env-generator plugins update`

Update installed plugins.

```
USAGE
  $ supabase-env-generator plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
