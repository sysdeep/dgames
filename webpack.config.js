var path = require("path");
var webpack = require('webpack');



var config = {
	entry: {
		"app"			: path.join(__dirname, "src", "app.js"),
		"five_in_row"	: path.join(__dirname, "src", "five_in_row", "app.js"),
        
		"vendor"		: ["vue"]
		
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: '[name].js',
	},
	resolve: {
		// extensions: ['.js'],
		// alias: { vue: 'vue/dist/vue.js' }
		alias: { 'vue$': 'vue/dist/vue.esm.js' }
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(css|html)$/,
				loader: 'raw-loader'
			},


			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				// query: {
                //     presets: ['es2015']
                // },
				options: {
					loaders: {
						js: 'babel-loader?presets[]=es2015'
					}
					// other vue-loader options go here
				}
			}
			
		]
	},
	// plugins: [
	//   new webpack.optimize.UglifyJsPlugin(),
	// ]
	plugins : [
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
	]
};




var ENV = process.env.npm_lifecycle_event;


switch(ENV){
	
	case "dev":
		
		config.devtool = 'inline-source-map';
		break;
	
	case "build":
		config.devtool = 'source-map';
		config.plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: config.devtool, compress: {	warnings: false	}}));
		break;
}



module.exports = config;