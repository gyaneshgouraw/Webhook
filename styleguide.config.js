const { version } = require('./package');

module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	ribbon: {
		url: '#',
		text: 'Youplus.'
	  },
	styleguideDir:'build',
	version,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use:[
						{ loader: "style-loader" },
						{ loader: "css-loader",
							query:{
							modules:true
							}
						}
					]
				},
				{
					test: /\.scss$/,
					use: [
						"style-loader", // creates style nodes from JS strings
						"css-loader", // translates CSS into CommonJS
						"sass-loader" // compiles Sass to CSS, using Node Sass by default
					]
				}

			],
		},
	},
};
