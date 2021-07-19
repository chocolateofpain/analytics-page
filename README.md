# checkly-fe-challenge

## Requirements

- nodejs >= 14.x
- npm >= 6.x

## Setup
```
npm install
```

## Backend
We are using json-server as a mock backend. The documentation can be found [json-server](https://github.com/typicode/json-server)
```
npm run backend
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Tests
```
npm run test:unit
```

## Components

Reusable components are located on `src/components/library`

Existing components can be imported on the vue application via 

```
import Icon from './src/components/library/icon'
```

### Storybook

```
npm run storybook
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
