process.env.NODE_ENV = 'development';

const FriendlyErrors = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const base = require('./webpack.base');
const _ = require('./utils');
// const BundleAnalyserPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

base.devtool = '#source-map';
base.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development')
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new FriendlyErrors(),
	// new BundleAnalyserPlugin()
);

// push loader for css files
_.cssProcessors.forEach((processor) =>
{
	let loaders;
	if(processor.loader === '')
	{
		loaders = ['postcss-loader'];
	}
	else
	{
		loaders = ['postcss-loader', processor.loader];
	}
	base.module.loaders.push({
		test: processor.test,
		loaders: ['style-loader', _.cssLoader].concat(loaders)
	});
});

module.exports = base;
