const path = require('path')
// const merge = require("webpack-merge");
//gzip 压缩
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// const isPro = process.env.NODE_ENV === "production";

module.exports = {
    //   baseUrl: "demo",
    //两者的不同点在于 chainWebpack 是链式修改，而 configureWebpack 更倾向于整体替换和修改。
    // config 参数为已经解析好的 webpack 配置
    //   chainWebpack: config => {
    //     config.module
    //       .rule("images")
    //       .use("url-loader")
    //       .tap(options =>
    //         merge(options, {
    //           limit: 5120
    //         })
    //       );
    //   },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_lib', resolve('src/common'))
            .set('_com', resolve('src/components'))
            .set('_img', resolve('src/images'))
            .set('_ser', resolve('src/services'))
        //对于在样式及 html 模板中引用路径的简写时，前面需要加上 ～ 符，否则路径解析会失败，如：
        //   .img {
        //       background: (~_img / home.png);
        //   }
    },
    // config 参数为已经解析好的 webpack 配置
    // configureWebpack: config => {
    //     // config.plugins = []; // 这样会直接将 plugins 置空
    //     // 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空
    //     return {
    //         plugins: []
    //     }
    // },
    //Gzip 压缩后的文件体积得到了很大程度的减小，这对于浏览器资源加载速度的提升起到了非常有效的帮助。
    //但是需要注意的是访问 Gzip 压缩的文件需要服务端进行相应配置，以下是 Nginx Gzip 压缩的流程：
    // configureWebpack: config => {
    //     if (isPro) {
    //         return {
    //             plugins: [
    //                 new CompressionWebpackPlugin({
    //                     // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询
    //                     filename: '[path].gz[query]',
    //                     // 使用 gzip 压缩
    //                     algorithm: 'gzip',
    //                     // 处理与此正则相匹配的所有文件
    //                     test: new RegExp(
    //                         '\\.(js|css)$'
    //                     ),
    //                     // 只处理大于此大小的文件
    //                     threshold: 10240,
    //                     // 最小压缩比达到 0.8 时才会被压缩
    //                     minRatio: 0.8，
    //                 })
    //             ]
    //         }
    //     }
    // }
    devServer: {
        open: true,
        //   host: '0.0.0.0',
        // port: 8080,
        // https: false,
        //如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。

        // proxy: {
        //   //string | Object 代理设置,
        //   "/api": {
        //     target: "http://localhost:4000",
        //     ws: true,
        //     changeOrigin: true
        //   },
        //   "/foo": {
        //     target: "<other_url>"
        //   }
        // }
        proxy: {
            '/repos': {
                target: 'https://api.github.com',
                changeOrigin: true,
                // pathRewrite: {'^/api': ''}
            },
        },
        // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
        //   before: app => {
        //       // `app` 是一个 express 实例
        //   }
    },
    // css: {
    //     loaderOptions: {
    //         css: {
    //             // 这里的选项会传递给 css-loader
    //         },
    //         postcss: {
    //             // 这里的选项会传递给 postcss-loader
    //         }
    //     }
    // }
    //这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
    //   pluginOptions: {
    //         foo: {
    //             // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    //         }
    //     }
}
