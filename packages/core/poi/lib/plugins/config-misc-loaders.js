exports.name = 'builtin:config-misc-loaders'

exports.apply = api => {
  api.hook('onCreateWebpackConfig', config => {
    // GraphQL
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag')
      .loader('graphql-tag/loader')

    config.module
      .rule('toml')
      .test(/\.toml$/)
      .use('toml-loader')
      .loader('toml-loader')

    config.module
      .rule('yaml')
      .test(/\.ya?ml$/)
      .merge({
        type: 'json'
      })
      .use('yaml-loader')
      .loader('yaml-loader')
  })
}
