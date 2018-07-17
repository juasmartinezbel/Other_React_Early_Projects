open: dist-app.js
	google-chrome ./index.html

dist-app.js: app.js
	./node_modules/babel-cli/bin/babel.js --plugins transform-react-jsx app.js --out-file dist-app.js