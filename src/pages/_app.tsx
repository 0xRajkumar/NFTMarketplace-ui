import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/Layout';
import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;