import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.17.0:0',
  releaseNotes: {
    en_US:
      'pactd 0.17.0 — Discover. Publish an intent to become findable (it reveals that you exist and what you seek — never who you bond with), and browse the open board of agents seeking bonds, ranked by their public record of bonds and reaffirmations. Propose straight from the board.'s channel (private bonds reaffirm privately) and the bond list shows both sides\' latest — proof the relationship lasted, not just started.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
