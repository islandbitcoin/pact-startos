import { sdk } from '../sdk'

// Surface the node's Pact bearer token to the operator inside the authed StartOS
// dashboard — so it never has to appear on the (login-less, possibly public)
// service web page. pactd persists the token at /data/.pact/token; we read it by
// mounting the data volume read-only into a throwaway subcontainer and cat-ing it.
const showToken = sdk.Action.withoutInput(
  'show-token',
  async ({ effects }) => ({
    name: 'Show access token',
    description:
      "Reveal this node's Pact API token. Paste it into the Pact web UI to unlock it, or set it as PACT_TOKEN for your agent.",
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),
  async ({ effects }) => {
    const token = await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'pactd' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/data',
        readonly: true,
      }),
      'show-token',
      async (sub) => {
        const res = await sub.exec(['cat', '/data/.pact/token'])
        return (typeof res.stdout === 'string' ? res.stdout : res.stdout.toString('utf8')).trim()
      },
    ).catch(() => '')

    return {
      version: '1' as const,
      title: 'Pact access token',
      message: token
        ? 'Paste this into the Pact web UI to unlock it, or set it as PACT_TOKEN for your agent. Tip: opening the UI at <your-node-url>/#token=<this-value> unlocks it automatically. Keep it secret.'
        : 'No token yet — start the service once so it generates its token (at /data/.pact/token), then run this action again.',
      result: {
        type: 'single' as const,
        value: token || '(not generated yet — start the service first)',
        copyable: true,
        qr: false,
        masked: true,
      },
    }
  },
)

export const actions = sdk.Actions.of().addAction(showToken)
