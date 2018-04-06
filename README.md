# goverlay

A web research protect on overlaying video's onto google maps.

>[codepen of example (most up-to-date version, please use this)](https://codepen.io/sideshowjack/full/LdQpNX/)

![](http://puu.sh/zGqKg/74a6d8fd9c.jpg)

### Setup

##### Prerequisites

First, install the tools

    npm install -g polymer-cli
    npm install -g bower

Second, install [Bower](https://bower.io/) using [npm](https://www.npmjs.com)

    bower install
    npm install
    
Important! After ```npm install``` your console will throw an error. For temporary workaround, please remove the ```postinstall``` script from ```package.json``` then run ```npm i && bower i```. This issue is [yet to be addressed](https://github.com/mrsideshowjack/goverlay/issues/1)

### Start the development server

This command serves the app at `http://127.0.0.1:3000` and provides basic URL
routing for the app:

    npm start

### Build

```
polymer build
```

### deploy to heroku

just commit and push to the master branch of this repo!
