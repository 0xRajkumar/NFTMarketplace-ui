import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import Sidebar from '@/src/components/Sidebar';
import Navbar from '@/src/components/Navbar';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { chains, provider } = configureChains(
    [chain.ropsten,chain.mainnet,chain.arbitrum,chain.arbitrumRinkeby,chain.hardhat,chain.kovan,chain.polygon,chain.polygonMumbai,chain.optimism],
    [
      alchemyProvider({ alchemyId: 'erLkqD9HHmLLC23gRFZ1pWSGazvrm7KN' }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Marketplace',
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme()}
        showRecentTransactions={true}
      >
        <main className='font-Roboto'>
          <div className='flex flex-row h-screen'>
            <Sidebar />
            <div className='w-full bg-red-700'>
              <Navbar />
              {children}
            </div>
          </div>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Layout;
