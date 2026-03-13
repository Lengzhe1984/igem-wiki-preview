import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repository?.endsWith('.github.io')
const htmlEntries = {
  main: resolve(__dirname, 'index.html'),
  'project-description': resolve(__dirname, 'project-description/index.html'),
  'problem-inspiration': resolve(__dirname, 'problem-inspiration/index.html'),
  design: resolve(__dirname, 'design/index.html'),
  engineering: resolve(__dirname, 'engineering/index.html'),
  'wet-lab': resolve(__dirname, 'wet-lab/index.html'),
  'dry-lab': resolve(__dirname, 'dry-lab/index.html'),
  hardware: resolve(__dirname, 'hardware/index.html'),
  safety: resolve(__dirname, 'safety/index.html'),
  'integrated-human-practices': resolve(__dirname, 'integrated-human-practices/index.html'),
  implementation: resolve(__dirname, 'implementation/index.html'),
  contribution: resolve(__dirname, 'contribution/index.html'),
  team: resolve(__dirname, 'team/index.html'),
  references: resolve(__dirname, 'references/index.html'),
}

export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === 'true' && repository && !isUserSite
      ? `/${repository}/`
      : '/',
  build: {
    rollupOptions: {
      input: htmlEntries,
    },
  },
})
