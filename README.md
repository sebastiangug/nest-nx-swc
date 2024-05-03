# Nestjs + SWC + NX

setup:

- run `pnpm i` in the root directory
- have nx installed globally via `npm i -g nx@latest`

running:

- run `nx run monolith:watch` this will trigger the script `watch` in the package.json at `/services/monolith/package.json`

tsconfig flow:

- base tsconfig: `tsconfig.base.json`
- base tsconfig.json: extends `tsconfig.base.json`
- project level `services/monolith/tsconfig.json` extends base-level `tsconfig.base.json`
- project level `services/monolith/tsconfig.base.json` extends project level `services/monolith/tsconfig.base.json`

---

expected behaviour

SWC bundles the code at `libs/config` and `libs/database` etc. together with the project source code at `services/monolith/src`

observed behaviour:

SWC throws `cannot find module '../../../libs/config/config.module'` with the compiled files in `dist` referencing these as a relative import to the TS source code.

---

with webpack, it would be the case that the whole code would get compiled into the final artifact inside `dist` without needing to build libraries separately.
