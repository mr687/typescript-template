module.exports = {
  apps: [
    {
      name: 'app-prod',
      script: './build/server/index.js',
      node_args: '-r dotenv/config',
    },
  ],
}
