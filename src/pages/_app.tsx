import '../styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import type { TagManagerArgs } from 'react-gtm-module';
import TagManager from 'react-gtm-module';

import FooterNew from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import { BackToTopButton } from '@/components/Buttons';
import SEOtags from '@/components/SEOtags';
import { SeoConfig } from '@/utils/SeoConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const tagManagerArgs: TagManagerArgs = {
    gtmId: 'G-2RMEH9Q8GD',
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <SEOtags />
      <Navbar />
      <main className="mb-auto">
        <Component {...pageProps} />
      </main>
      <FooterNew />
      {/* <BackToTopButton /> */}
    </>
  );
}

export default MyApp;
