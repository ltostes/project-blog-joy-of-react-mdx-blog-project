import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

const cachedLoadBlogPost = React.cache(loadBlogPost);

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const blogPost = await cachedLoadBlogPost(postSlug);

  const { frontmatter : { title, abstract } } = blogPost;

  return {
    title,
    description: abstract
  }
}

async function BlogPost({ params }) {
  const { postSlug } = await params;

  const blogPost = await cachedLoadBlogPost(postSlug);

  const { content , frontmatter : { title, publishedOn }} = blogPost;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={title}
        publishedOn={publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content}
          components={{
            pre: CodeSnippet,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
