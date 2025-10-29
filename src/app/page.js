import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers'

import { BLOG_TITLE } from '@/constants.js'

import styles from './homepage.module.css';

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
}

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {
        blogPosts.map(({slug, title, abstract, publishedOn}) => <BlogSummaryCard
                                key={slug}
                                {...{slug, title, abstract, publishedOn}}
                                />)
      }

    </div>
  );
}

export default Home;
