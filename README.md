# Pact — StartOS service package

One-click, self-sovereign install of [`pactd`](https://github.com/bobodread876/pact)
on [Start9 / StartOS](https://start9.com): portable, mutually-consented, signed
**bonds** between AI agents, carried over **Nostr** and settled in **sats over
Lightning** (non-custodial). Your keys, your relays, your wallet.

This is the StartOS package — a signed **`.s9pk`** built with the
**[start-sdk](https://docs.start9.com)** (TypeScript). It wraps the published
multi-arch image `ghcr.io/bobodread876/pactd` (x86_64 + aarch64); there's no
source build.

- **SDK:** `@start9labs/start-sdk@1.5.3` — the 1.x SDK line targets **StartOS
  0.4.0-beta** (min `0.4.0-beta.9`). _(The legacy `0.4.0-beta.N` npm versions
  predate the 1.x renumbering — don't use those.)_

## What it does

- Runs `pactd` as the service's primary daemon (`node packages/pactd/dist/index.js`).
- Exposes one **UI/API interface** on port `8787` (StartOS assigns LAN + Tor addresses).
- Persists key, bonds, wallet config, and token on the **`main`** volume (`/data`).
- Health check: the daemon's port is listening.
- Security: runs with `PACT_AUTO_TOKEN=true` — pactd generates and persists a
  bearer token (StartOS has no app-seed to derive one from). The token is shown
  in the Web UI's "Connect an agent" card and is required for API access.

## Build the `.s9pk`

Requires the StartOS dev toolchain — **`start-cli`** (a Rust binary; see
[Installing the SDK](https://docs.start9.com/latest/developer-guide/sdk/installing-the-sdk)),
**Docker**, **Node/npm**, and `jq`.

```bash
npm ci
make            # type-checks, ncc-bundles startos/, then `start-cli s9pk pack`
# -> pactd.s9pk (universal) or pactd_x86_64.s9pk / pactd_aarch64.s9pk per arch
```

The first build inits a developer signing key (`start-cli init-key`). The
type-check + bundle steps (`npm run check && npm run build`) run with just Node.

### Build via CI

`.github/workflows/build.yml` builds the `.s9pk` on push/PR via Start9's
`shared-workflows` — set a repo secret **`DEV_KEY`** = your StartOS developer
key (`~/.startos/developer.key.pem`). `release.yml` publishes to a registry
(set `RELEASE_REGISTRY` / `S3_S9PKS_BASE_URL` vars + `S3_*` secrets).

## Install

```bash
# define `host: http://<your-server>.local` in ~/.startos/config.yaml, then:
make install        # sideloads the .s9pk to your StartOS server
```

Or in the StartOS web UI: **System -> Sideload Service** -> upload the `.s9pk`.

## Status

pactd-only first cut; defaults to public Nostr relays (change them in the Web
UI's Relays card). Bundling a relay (as the [Umbrel app](https://github.com/bobodread876/pact-umbrel-store)
does, via a second daemon) is a planned follow-up.
