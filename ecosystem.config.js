module.exports = {
  apps: [
    {
      name: 'd-talks_link-archive',
      script: 'yarn run start',
      env: {
        PORT: 3000,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
}
