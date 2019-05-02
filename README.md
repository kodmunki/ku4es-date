# ku4es-kernel
kodmunki™ Utilities for ECMAScript Kernel

## Conventions

### Access Modifiers
ku4es-kernel uses a convention for access modifiers as follows:

| Modifier | Character | Description |
| --- | --- | --- |
| Public | N/A | Public members may be accessed by all internal and external dependents. They are default members and have no conventional modifier. |
| Protected | $ | Protected members may be accessed by children |
| Abstract | $ | Abstract members are Protected members that expect to have implementation details defined by children. |
| Virtual | $ | Virtual members are Abstract members that have a defaulted defined implementation that can be and will plausibly be overridden by children. |
| Private | _ | Private members should only be accessed by the defining class. |

## Documentation
Markdown documentation for this project can be found in the [README.API.md](README.API.md). JSDoc HTML can be found by running `npm run docs` and navigating to `./jsdoc/index.html`.

## Testing
Linting, testing, and coverage checks can be performed by running `npm run check`.

## Build
Distribution package can be build with `npm run build`

## Source Tree
```
.
├── Assert.js
├── account
│   └── Name.js
├── dateTime
│   └── DayPoint.js
├── finance
│   └── Money.js
├── geometry
│   ├── Coord.js
│   ├── Point.js
│   ├── Rectangle.js
│   └── Vector.js
├── identity
│   └── index.js
├── index.js
├── math
│   └── index.js
├── network
│   └── Service.js
├── patterns
│   ├── debounce.js
│   ├── specification
│   │   └── index.js
│   └── strategy
│       └── AbstractStrategy.js
├── regex
│   └── index.js
├── string
│   └── index.js
└── time
    ├── nextTick.js
    └── wait.js

```
