import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.13.0:0',
  releaseNotes: {
    en_US:
      'pactd 0.13.0 — bond ids auto-generate (urn:mate:<uuid>) and a new accept flow lets a counterparty accept a proposal by echoing its id (POST /bonds/accept).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
