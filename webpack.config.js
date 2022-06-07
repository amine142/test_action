const Encore = require('@symfony/webpack-encore');
var dotenv = require('dotenv');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

var apiUrl = '';
var urlMedia = '';
var apiPrefix = '/api';

if (Encore.isDev()) {
    apiUrl = 'http://api-pmv7.docker';
    urlMedia = 'http://bo-pmv7.docker';
}

Encore.setOutputPath('public/build/')
    .copyFiles({
        from: './assets/images',
        to: 'images/[name].[hash:8].[ext]',
    })
    .setPublicPath('/build')
    .addEntry('ds-module', './assets/app/ds/ds-module.js')
    .addEntry('ds-nomodule', './assets/app/ds/ds-nomodule.js')
    .addEntry('app', './assets/app/app.js')
    .addEntry('launch-story-list', './assets/launch-story/index-list.js')
    .addEntry('covid-dashboard', './assets/covid-dashboard/covid-dashboard.js')
    .addEntry('agenda', './assets/agenda/index-agenda.js')
    .addEntry('launch-story-view', './assets/launch-story/index-view-v2.js')
    .addEntry('360-pages', './assets/360-pages/index.js')
    .addEntry(
        'content-long-article-view',
        './assets/content/index-long-article.js'
    )
    .addEntry('content', './assets/content/index.js')
    .addEntry('content-list', './assets/content/index-list.js')
    .addEntry('simulator', './public/static/js/inflationSimulator.js')
    .addEntry('indexAT', './assets/error/index.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .autoProvidejQuery()
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enableSassLoader((options) => {
        options.additionalData = '@import "./assets/app/css/_vars.scss";';
    })

    .configureWatchOptions((config) => {
        config.poll = 500;
    })

    .configureDefinePlugin((options) => {
        const env = dotenv.config();

        if (env.error) {
            throw env.error;
        }

        options['process.env'].API_URL = JSON.stringify(apiUrl);
        options['process.env'].URL_MEDIA = JSON.stringify(urlMedia);
        options['process.env'].API_PREFIX = JSON.stringify(apiPrefix);
        options['process.env'].ENV_URL = JSON.stringify(process.env.ENV_URL);
    });

module.exports = Encore.getWebpackConfig();
