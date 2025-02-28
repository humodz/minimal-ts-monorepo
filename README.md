# Minimal TS monorepo

This is an example of how to configure TypeScript to build a monorepo.

There's two packages, lib1 and lib2, where lib1 depends on lib2.

To build, run `npm run build`.

The `paths` configuration is used twice:

## `tsconfig.json`:

If you remove this, VSCode will complain at `./packages/lib1/src/index.ts`, because it can't find `@example/lib2`

```
"paths": {
    "@example/lib2": ["./packages/lib2/src"],
    "@example/lib2/*": ["./packages/lib2/src/*"],
}
```

## `packages/lib1/tsconfig.build.json`

If you remove this, then TypeScript will complain when building, for the same reason as before.

```
"paths": {
    "@example/lib2": ["../lib2/dist"],
    "@example/lib2/*": ["../lib2/dist/*"],
},
```
