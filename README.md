# 🦄 Lit File Generator

A lit generator for a component, directive, and controller.

<hr>

Install the library:

```shell
npm i @ngneat/lit-file-generator -g

litgen
```

Or via `npx`:

```shell
npx @ngneat/lit-file-generator litgen
npx @ngneat/lit-file-generator litgen component name
npx @ngneat/lit-file-generator litgen directive name
npx @ngneat/lit-file-generator litgen controller name
```

### Base Path:

By default, the directory prompt is set to the current directory.

To change it, add to the root `package.json` the following config:

```
"lit": {
  "basePath": "./src/app/"
}
```

The path should be relative to the `package.json`.

### Component Prefix:
The default component selector prefix is `app`. You can change it by setting the `prefix` option:

```
"lit": {
  "prefix": "lit"
}
```