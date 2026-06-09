import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.11.1:0',
  releaseNotes: {
    en_US:
      'pactd 0.11.1 — a node with no identity no longer lists unrelated relay events under Bonds (create an identity to see your own bonds).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
