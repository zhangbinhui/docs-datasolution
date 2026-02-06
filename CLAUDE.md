# docs-datasolution

## 启动开发服务器

- Windows: `pnpm docs:dev`
- WSL: `CHOKIDAR_USEPOLLING=true pnpm docs:dev`

WSL 下需要 CHOKIDAR_USEPOLLING 环境变量，否则在 /mnt/d/ (Windows磁盘) 上无法监听文件变化，热更新不生效。
