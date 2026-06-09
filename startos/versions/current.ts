import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.12.1:0',
  releaseNotes: {
    en_US:
      'Adds a "Show access token" action (reveals the token in the dashboard, so it stays off the public page) and #token= auto-unlock in the Pact UI. pactd 0.12.1.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
