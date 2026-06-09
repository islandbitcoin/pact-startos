import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.12.2:0',
  releaseNotes: {
    en_US:
      'pactd 0.12.2 — bonds now carry the queryable mate-bond discriminator tag (resolve filters #t), so unrelated apps reusing kind 30317 are ignored. Re-form pre-existing bonds.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
