import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';

import styles from '@/sass/main.module.sass';

// Layout component will be utilized on each page, will setup basic layout w/ header, footer, head info
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'MUFI | Michigan Urban Farming Initiative',
  description: "America's first sustainable urban agrihood",
  keywords: 'farm, urban, Detroit, agrihood, Michigan',
};
