module.exports = {
  apps: [
    {
      name: 'd-talks_link-archive',
      script: './server/index.js',
      env: {
        HOST: '0.0.0.0',
        PORT: 3000,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 3000,
        HOST: '0.0.0.0',
        NODE_ENV: 'production'
      }
    }
  ]
}
