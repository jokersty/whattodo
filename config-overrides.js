const {
    override,
    addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
    addPostcssPlugins([
        require("postcss-pxtorem")({
            rootValue: 40,
            propList: ["*"],
            selectorBlackList: [".ignore"],
        }),
    ])
);