# PoolTogether v5 Liquidator Bot - GitHub Actions

This repo contains two simple scripts ([index.ts](/index.ts) and [.github/workflows/cron.yml](/.github/workflows/cron.yml)) to run the Generation Software PoolTogether v5 Liquidator bot using GitHub Actions.

You can simply fork this repo, enter your own custom environment variables in your newly-forked GitHub Repository's Settings (`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`), and enable automated workflow runs.

**Note**: You require your own GitHub account to fork this repository and run the GitHub Actions.

[<img src="/images/one-click-deploy@2x.png?raw=true" width="169" height="37"/>](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork "one click deploy button")

[Fork / deploy this bot](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork)

---

### Installation:

[<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/video-thumb.jpg" width="50%">](https://www.youtube.com/watch?v=RmJySyZsHNc "Watch the 1-minute installation video")

[Watch the 1-minute video](https://www.youtube.com/watch?v=RmJySyZsHNc), or:

1. [Fork this repository](#user-content-1-fork-this-repository)
2. [Set your environment variables](#user-content-2-set-your-environment-variables)
3. [Enable automated workflows](#user-content-3-enable-automated-workflows)
4. [View logs](#user-content-4-view-logs)
5. [(Optional) Change Chain or Reward Recipient](#user-content-5-optional-change-chain-or-reward-recipient)

**Note**: This process is essentially the same for the [Prize Claimer](https://github.com/GenerationSoftware/pt-v5-prize-claimer-gh-action-bot/) and [Draw Auction](https://github.com/GenerationSoftware/pt-v5-draw-auction-gh-action-bot) bots as well.



---

#### 1. Fork this repository

Start by forking this bot to your own new repository - this essentially deploys your very own copy of the bot. You can give it a custom name if you like:

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-forking-0.jpg?raw=true" /></kbd>

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-forking-1.jpg?raw=true" /></kbd>

[<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/one-click-deploy@2x.png?raw=true" width="169" height="37"/>](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork "one click deploy button")

[Fork / deploy this bot](https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/fork)


#### 2. Set your environment variables

Once the repository has been forked you can update your `Secrets` (under `Settings`) to point to your own API keys. Each bot requires 2 secrets: a private key which will send transactions on your bot's behalf, and a RPC URI such as one from [Infura](https://www.infura.io/) or [Alchemy](https://www.alchemy.com/).

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-1.jpg?raw=true" /></kbd>


> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-2-jsonrpc.jpg?raw=true" /></kbd>

`JSON_RPC_URI`: By default, this bot uses Optimism mainnet. If you are using a different chain (such as Optimism mainnet) the bot will require a `JSON_RPC_URI` that points to that chain. (Make sure this is the full URL (not just an API key) and is "JSON_RPC_URI", not "JSON_RPC_URL" with an "L" 🙂).

> <kbd>
<img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-4-privkey.jpg?raw=true" />
</kbd>

`CUSTOM_RELAYER_PRIVATE_KEY`: We recommend creating a brand new EVM account and only sending a small amount of ETH (less than $100) to it for relaying your bot transactions. In the rare case that the account gets compromised you will only lose whatever ETH is currently in it.

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-3-covalent-api.jpg?raw=true" /></kbd>

`COVALENT_API_KEY` (optional): There is 1 optional secret: a Covalent API key to assist the bot in looking up the dollar value of tokens.

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-settings-5-some.jpg?raw=true" /></kbd>


#### 3. Enable automated workflows

By default, GitHub does not enable automated workflows for newly forked repositories. Navigate to the `Actions` tab to enable workflows on your newly forked repository:

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-0-nothing.jpg?raw=true" /></kbd>

Click 'I understand my workflows, go ahead and enable them'

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-2-disabled.jpg?raw=true" /></kbd>

**Important!** Click the little 'Enable workflow' button in the top-right corner

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-3-enabled.jpg?raw=true" /></kbd>

You should see the success message above.

#### 4. View logs

To see if the bot is working correctly, check the logs under `Actions`. **You may need to wait 5 - 10 minutes** for the first scheduled task to show up. Following that, the bot will attempt to run every 5 minutes. However, GitHub may throttle the amount of runs based on how overloaded GitHub Actions is at that time.

> <kbd><img src="https://github.com/GenerationSoftware/pt-v5-liquidator-gh-action-bot/blob/main/images/screenshot-actions-4-logs.jpg?raw=true" /></kbd>

Click the name of the run to see the logs. For instance, one of my runs is simply named "Cronjob". I can open that up, then click on the "Run bot" line to see the outcome of the bot.

#### 5. (Optional) Change Chain or Reward Recipient:

In the [.github/workflows/cron.yml](/.github/workflows/cron.yml) file you can update the following variables: `CHAIN_ID`, `MIN_PROFIT_THRESHOLD_USD`, and/or `SWAP_RECIPIENT`. This will allow you to change which chain you are running the bot against, how much profit you want to make per transaction, and who (which EVM EOA account) receives the profits earned.

###### `CHAIN_ID`: Simply the chain ID. You can find most chain ID's on [https://chainlist.org/](https://chainlist.org/)
###### `MIN_PROFIT_THRESHOLD_USD`: This is in $USD, so 0.1 would be $0.10 per transaction
###### `SWAP_RECIPIENT`: Any typical account address, if left blank this will default to the relayer account set by the `CUSTOM_RELAYER_PRIVATE_KEY` variable.



## Lastly:

The Liquidator bot's relayer account needs to be stocked with ETH (to pay gas fees for transactions) and WETH to liquidate. We recommend keeping less than $100 in value on the relayer at a time in case your private key were to get compromised.