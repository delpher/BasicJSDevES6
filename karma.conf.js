module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: 'src/**/*.js', included: true},
            {pattern: 'test/**/*.spec.js', included: true}
        ],

        exclude: [],

        webpack: {
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /\.js$/i,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        test: /\.html$/,
                        exclude: /node_modules/,
                        use: {loader: 'html-loader'}
                    }
                ]
            }
        },

        preprocessors: {
            './test/*.spec.js': ['webpack'],
            './src/*.js': ['webpack']
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: true,

        browsers: ['ChromeHeadless'],

        singleRun: false,

        concurrency: Infinity
    })
};
