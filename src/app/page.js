import React from 'react';

import BlogSummaryList from '@/components/BlogSummaryList';

import { BLOG_TITLE } from '@/constants.js'

import styles from './homepage.module.css';

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
}

async function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>
      <BlogSummaryList />
    </div>
  );
}

export default Home;
