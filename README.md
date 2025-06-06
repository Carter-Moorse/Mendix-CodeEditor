<div align="center">

  <img src="assets/coverimage.svg" alt="Cover image, code editor" title="Cover image" width="300px"/>
  
  ### Mendix CodeEditor

  [Ace](https://ace.c9.io/) code editor, as a Mendix pluggable widget.

</div>

## Screenshots

<div align="center">
<img src="screenshots/html.png" alt="HTML editor screenshot" title="HTML editor" height="300px"/>
<img src="screenshots/javascript.png" alt="JavaScript editor screenshot" title="JavaScript editor" height="300px"/>
</div>


## Features
See the complete feature list on [Ace GitHub](https://github.com/ajaxorg/ace?tab=readme-ov-file#features)

## Limitations
 - Surfaces most [not all] features available in the Ace editor. 

## Usage
Simply add the widget to your Mendix project. No additional setup required.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
2. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
