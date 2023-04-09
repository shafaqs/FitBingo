import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { PrismaClient } from '@prisma/client';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>BingoFit</title>
      </Head>
      <h1>Welcome to BingoFit!</h1>
      <p>Play bingo and get fit.</p>
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const blogs = await prisma.blog.findMany();

  return {
    props: { blogs }
  };
}