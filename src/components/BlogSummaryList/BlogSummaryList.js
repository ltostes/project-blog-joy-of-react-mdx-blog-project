import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

async function BlogSummaryList() {
  const blogPosts = await getBlogPostList();

  return blogPosts.map(({slug, title, abstract, publishedOn}) => <BlogSummaryCard
                                        key={slug}
                                        {...{slug, title, abstract, publishedOn}}
                                        />);
}

export default BlogSummaryList;
