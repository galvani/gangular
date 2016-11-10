## GAngular

### Angular 2 + TypeScript setup with browserify

Modules used:

- [watchify](http://npm.im/watchify) - to recompile your bundle when updating
  files during development
- [tsify](http://npm.im/tsify) - to transpile your TypeScript code
- [factor-bundle](http://npm.im/factor-bundle) - to make sure common dependencies stay in their own bundle,
  so that rebundling takes less time (since only the code you actually create
  gets rebundled)

### run it

```
npm i
npm run go
```

## note

- Be sure to add your NPM dependencies in `app/vendor.ts`, even though you are
also using them in `app/main.ts`. That allows `factor-bundle` to store them (the
"common" dependencies) in a separate `common.js` file, working nicely with
`watchify` so that only the code you write is getting rebundled in development.
- Currently there is an error in the console coming from `app/vendor.ts`.
  However it doesn't seem to impact anything and it goes away if everything is
  bundled together (like you would do for production for HTTP !== 2.0), so just
  ignore it for the time being.
