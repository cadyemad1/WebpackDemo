module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader:'ts-loader'
        
              },
             {
                test: /\.html$/,
                use:['html-loader']
              },

        ]
    }

}