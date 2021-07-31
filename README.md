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



## Comments

To run this application you should: 

- Run the setup command above.

- Start the DB: 
  ```
  npm run backend
  ```

- Start development env:
  ```
  npm run serve
  ```
  
- Take a look at your localhost. It should spark joy.


- To check out the work on Storybook run the command for it above. You should be able to play around with it using Storybook controls. 


### A few notes: 

- I left a couple of TODO comments in the code to mention things I would see important to implement but haven't due to time constraints
- I didn't finish the Highcharts implementation for the same time contraints reasons. I still ordered and filtered the data according to my best understanding of the task (and because it's fun). Ideally local filtering would be extended to allow the user a bigger flexibility to display the data the way they want. 
- The next steps after implementing Highcharts would improving the test coverage and have a more thorough coverage of potential user behavior (click and toggle events, function calling).- This was my second time working with Vue and I definitely enjoyed it and learned a lot. 
