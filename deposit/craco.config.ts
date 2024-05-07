import {container} from 'webpack';

module.exports = {
    devServer: {
        port: 3002
    },
    webpack: {
        //@ts-ignore
        configure:(webpackConfig)=>{
            webpackConfig.output = {
                ...webpackConfig.output,
                publicPath:'auto'
            }
            webpackConfig.plugins = [
                ...webpackConfig.plugins,
                new container.ModuleFederationPlugin({
                    name: 'deposit',
                    library: { type: "var", name: "deposit" },
                    filename: 'remoteEntry.js',
                    exposes: {
                        './Module': './src/App'
                    },
                    shared:[
                        {'react':{singleton:true,strictVersion:true},
                            'react-dom':{singleton:true,strictVersion:true},
                            '@mui/material':{singleton:true,strictVersion:true},
                        }]
                })
            ]
            return webpackConfig;
        }
    },
};
