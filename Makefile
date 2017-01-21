install:
	yarn install
start:
	- ./node_modules/.bin/webpack-dev-server --progress --colors --hot --content-base ./client/public --config ./client/webpack.config.js
