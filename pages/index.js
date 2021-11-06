import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import CallToAction from '@/components/CallToAction';
import Mission from '@/components/Mission';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import JoinUs from '@/components/JoinUs';
import Sponsors from '@/components/Sponsors';
import styles from '@/sass/main.module.sass';

export default function HomePage() {
  return (
    <Layout>
      <CallToAction />
      <Mission />
      <Testimonials />
      <CallToAction />
      <Projects />
      <JoinUs />
      <Sponsors />
      <CallToAction />
    </Layout>
  );
}
