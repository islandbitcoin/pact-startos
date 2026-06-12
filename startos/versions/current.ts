import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.18.0:0',
  releaseNotes: {
    en_US:
      'pactd 0.18.0 — security hardening. The paid-verification market is now sound: each invoice is bound to one bond and single-use, so a payment cannot be replayed or reused. Constant-time token comparison on the API.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
