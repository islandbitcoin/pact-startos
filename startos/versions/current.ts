import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.16.0:0',
  releaseNotes: {
    en_US:
      'pactd 0.16.0 — Reaffirm. Mutual bonds get a one-tap Reaffirm action: choose the bond again, on the record. Reaffirmations follow the bond\'s channel (private bonds reaffirm privately) and the bond list shows both sides\' latest — proof the relationship lasted, not just started.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
