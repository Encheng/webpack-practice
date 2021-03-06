const path = require('path');				//宣告常數 path為
const webpack = require('webpack');

module.exports = {
	entry: './entry.js',				//入口指定entry.js檔案
    output: {
        filename: 'bundle.js',				//輸出bundle.js檔案
        path: path.resolve(__dirname, './public/assets/js/'),
    },
	module: {
        rules: [
            {
                test: '/.msg.vue',
                loader: 'vue-loader'
            }
        ]
    },
	resolve: {
        alias: {
		'vue': "vue/dist/vue.js"
        },
	extensions: ['.js', '.vue']
    }
};
