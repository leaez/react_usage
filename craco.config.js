const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
module.exports = {
    babel:{
        plugins: [
            "babel-plugin-macros",
            "@babel/plugin-transform-react-jsx",
        ]
    }
};
