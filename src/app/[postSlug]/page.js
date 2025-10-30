import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
import CircularColorsDemo from '@/components/CircularColorsDemo';
import { getBlogPostList, loadBlogPost } from '@/helpers/file-helpers';

const DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'))

import styles from './postSlug.module.css';

const cachedLoadBlogPost = React.cache(async ({ params }) => {
  const { postSlug } = await params;

  const allPosts = (await getBlogPostList()).map(bp => bp.slug);

  if (!allPosts.includes(postSlug)) {
    notFound();
  }

  const blogPost = await loadBlogPost(postSlug);

  return blogPost;
});


export async function generateMetadata({ params }) {

  const blogPost = await cachedLoadBlogPost({ params });

  const { frontmatter : { title, abstract } } = blogPost;

  return {
    title,
    description: abstract
  }
}

async function BlogPost({ params }) {
  
  const blogPost = await cachedLoadBlogPost({ params });

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
            DivisionGroupsDemo,
            CircularColorsDemo
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
