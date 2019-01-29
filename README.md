# Webpack-HTML-CSS-SASS-JavaScript-TypeScript-Preact

The followings can be used and edited here:

* HTML
* CSS
* SASS
* JavaScript
* TypeScript
* Preact

This package includes the following:

package.json
```
    "dependencies": {
        "preact": "^8.3.1"
    },
    "devDependencies": {
        "awesome-typescript-loader": "^5.2.1",
        "clean-webpack-plugin": "^0.1.19",
        "css-loader": "^0.28.11",
        "html-webpack-plugin": "^3.2.0",
        "node-sass": "^4.11.0",
        "sass-loader": "^6.0.7",
        "style-loader": "^0.20.3",
        "ts-loader": "^5.3.3",
        "typescript": "^3.2.2",
        "webpack": "^4.28.4",
        "webpack-cli": "^3.2.1",
        "webpack-dev-server": "^3.1.10",
        "webpack-merge": "^4.1.4"
    }
```

# INSTALL

You can download the project and start it directly.
Create a Project folder and open your Terminal, to switch in the project folder.
```
cd /Users/username/project/path/
```
Clone the repo to your local envoirement
```
git clone https://github.com/prod3v3loper/webpack-html-css-sass-javascript-typescript.git /Users/username/Projects/
```
And now install all Dev Dependencies in package.json
```
npm install
```

# USE
We added commands in our package.json to run with npm instead of npx

package.json
```
    "scripts": {
        "server": "webpack-dev-server --open --config webpack.dev.js",
        "dev": "webpack --config webpack.dev.js",
        "build": "webpack --config webpack.pro.js"
    },
```

And this we use in which we npm run and our command names.
This command start the Server with the hotmodule.
```
npm run server
```
This command build the dist folder with the end product.
```
npm run build
```

# Contribute

Please [file an issue](https://github.com/prod3v3loper/webpack-html-css-sass-javascript-typescript-preact/issues) if you
think something could be improved. Please submit Pull Requests when ever
possible.

# Authors

* **Samet Tarim** - *All works* - [prod3v3loper](https://www.tnado.com/author/prod3v3loper/)

# License

[MIT](https://github.com/prod3v3loper/webpack-html-css-sass-javascript-typescript-preact/blob/master/LICENSE)