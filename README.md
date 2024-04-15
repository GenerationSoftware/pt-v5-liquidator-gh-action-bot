# PoolTogether v5 Liquidator Bot (GitHub Actions)

This repo contains two simple scripts ([index.ts](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/index.ts) and [.github/workflows/cron.testnet.yml](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/.github/workflows/cron.testnet.yml)) to run the Generation Software PoolTogether v5 Liquidator bot using GitHub Actions.

You can simply fork this repo, enter your own custom environment variables in your newly-forked GitHub Repository's Settings (`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`), and enable automated workflow runs.

**Note**: You require your own GitHub account to fork this repository and run the GitHub Actions.

[<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/one-click-deploy@2x.png?raw=true" width="169" height="37"/>](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork "one click deploy button")


[Watch the video](https://www.youtube.com/) | [Fork / deploy this bot](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork)


### Installation:

1. Fork this repository

Start by forking this bot to your own new repository - this essentially deploys your very own copy of the bot. You can give it a custom name if you like:

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-forking-0.jpg?raw=true" />

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-forking-1.jpg?raw=true" />

[<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/one-click-deploy@2x.png?raw=true" width="169" height="37"/>](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork "one click deploy button")

[Fork / deploy this bot](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork)

2. Set your environment variables

Once the repository has been forked you can update your `Secrets` (under `Settings`) to point to your own API keys. Each bot requires 2 secrets: a private key which will send transactions on your bot's behalf, and a RPC URI such as one from Infura or Alchemy.

`CUSTOM_RELAYER_PRIVATE_KEY`: We recommend creating a brand new EVM account and only sending a small amount of ETH (less than $100) to it for relaying your bot transactions. In the rare case that the account gets compromised you will only lose whatever ETH is currently in it.

`JSON_RPC_URI`: By default, this bot uses Optimism Sepolia - an Optimism testnet. If you are using a different chain (such as Optimism mainnet) the bot will require a `JSON_RPC_URI` that points to that chain.

`COVALENT_API_KEY` (optional): There is 1 optional secret: a Covalent API key to assist the bot in looking up the dollar value of tokens.

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-1.jpg?raw=true" />

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-2-jsonrpc.jpg?raw=true" />

> <img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-3-covalent-api.jpg?raw=true" />

<kbd>
<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-4-privkey.jpg?raw=true" />
</kbd>

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-5-some.jpg?raw=true" />


3. Enable automated workflows

By default, GitHub does not enable automatd workflows for newly forked repositories. Navigate to the `Actions` tab to enable workflows on your newly forked repository:

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-0-nothing.jpg?raw=true" />

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-2-disabled.jpg?raw=true" />

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-3-enabled.jpg?raw=true" />


4. View logs

To see if the bot is working correctly, check the logs under `Actions`. **You may need to wait 5 - 10 minutes** for the first scheduled task to show up. Following that, the bot will attempt to run every 5 minutes. However, GitHub may throttle the amount of runs based on how overloaded GitHub Actions is at that time.

<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-4-logs.jpg?raw=true" />

5. (Optional) Update `CHAIN_ID`, `MIN_PROFIT_THRESHOLD_USD`, and/or `SWAP_RECIPIENT`:

CHAIN_ID: 11155420
MIN_PROFIT_THRESHOLD_USD: 0.1
SWAP_RECIPIENT: ''

