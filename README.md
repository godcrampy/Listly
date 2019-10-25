# Listly

All your lists in one place! [Listly](http://listly.surge.sh) is a [jamstack](https://jamstack.org/) website where you can write and store lists of all kinds.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node](https://nodejs.org/en/)
- [Surge](http://surge.sh) (For Deploying)
- [Firebase](https://firebase.google.com) (Backend)

### Installing

1. Clone this repo
   `$ git clone https://github.com/godcrampy/listly`

2. _cd_ into the directory
   `$ cd listly`

3. Install all the dependencies
   `$ npm install`

4. Add your firebase config

```
$ mkdir src/config
$ touch src/config/firebase.config.js
$ vim src/config/firebase.config.js
```

5. Start local server
   `$ npm start`

## Deployment

1. Build files
   `$ npm run build`

2. Rename _index.html_ to _200.html_ (as this is a Single Page Application)
   `$ mv build/index.html build/200.html`

3. Serve
   `$ surge build/`

## Built With

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Sass](https://sass-lang.com)
- [Semantic UI](https://semantic-ui.com/)
- [Surge](http://surge.sh)
- [Firebase](https://firebase.google.com)

## Authors

- **Sahil Bondre** - [godcrampy](https://github.com/godcrampy)
