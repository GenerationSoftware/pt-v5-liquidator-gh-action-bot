import nodeFetch from 'node-fetch';
import { downloadContractsBlob } from '@generationsoftware/pt-v5-utils-js';
import {
  getProvider,
  instantiateRelayerAccount,
  loadLiquidatorEnvVars,
  runLiquidator
} from '@generationsoftware/pt-v5-autotasks-library';


const main = async () =>{
  const envVars = loadLiquidatorEnvVars();
  const provider = getProvider(envVars);

  const relayerAccount = await instantiateRelayerAccount(
    provider,
    envVars.CUSTOM_RELAYER_PRIVATE_KEY,
  );

  const config = {
    ...relayerAccount,
    provider,
    covalentApiKey: envVars.COVALENT_API_KEY,
    chainId: envVars.CHAIN_ID,
    swapRecipient: envVars.SWAP_RECIPIENT,
    useFlashbots: envVars.USE_FLASHBOTS,
    minProfitThresholdUsd: Number(envVars.MIN_PROFIT_THRESHOLD_USD),
  };

  try {
    const contracts = await downloadContractsBlob(config.chainId, nodeFetch);
    await runLiquidator(contracts, config);
  } catch (error) {
    throw new Error(error);
  }
}

main() 
