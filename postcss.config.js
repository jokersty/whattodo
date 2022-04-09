module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-pxtorem": {
            rootValue: 40,
            propList: ["*"],
            selectorBlackList: [".ignore"],
        },
    },
};
