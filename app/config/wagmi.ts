import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createConfig } from "wagmi";
import { base, baseGoerli, localhost, mainnet } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const anvil: Chain = { ...localhost, id: 31337 };
const wagmiChains = [mainnet, base, baseGoerli, anvil];

export const { chains, publicClient } = configureChains(wagmiChains, [
  infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID! }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "WC Loop Repro",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID as string,
  chains,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
