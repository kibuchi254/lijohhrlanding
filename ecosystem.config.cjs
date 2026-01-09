module.exports = {
  apps: [
    {
      name: 'lijohhr',
      script: './dist/server/entry.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '1G',
      merge_logs: true,
      autorestart: true,
      watch: false,
      ignore_watch: ['node_modules', 'dist', '.git'],
      max_restarts: 10,
      min_uptime: '10s'
    }
  ],
  deploy: {
    production: {
      user: 'node',
      host: 'your-server-ip',
      ref: 'origin/main',
      repo: 'your-repo-url.git',
      path: '/var/www/lijohhr',
      'post-deploy': 'npm ci && npm run db:generate && npm run db:push && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};