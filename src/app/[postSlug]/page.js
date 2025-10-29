import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const { postSlug } = params;

  const blogPost = await loadBlogPost(postSlug);

  const { content , frontmatter : { title, publishedOn }} = blogPost;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={title}
        publishedOn={publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content}/>
      </div>
    </article>
  );
}

export default BlogPost;
