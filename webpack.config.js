var path = require('path');

module.exports = {
    entry: {
      form: path.join(__dirname, "src/index.jsx"),
      tests: path.join(__dirname, "src/tests.jsx")
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" },
            { test: /\.spec\.js/, loader: "mocha-loader!babel-loader" }
        ]
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
};
