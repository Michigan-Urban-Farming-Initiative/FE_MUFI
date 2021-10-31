import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import CallToAction from '@/components/CallToAction';
import styles from '@/sass/main.module.sass';

export default function HomePage() {
  return (
    <Layout>
      <CallToAction />
      <h1>Placeholder</h1>
    </Layout>
  );
}
