import RSS from "rss";
import { headers } from "next/headers";

import { getBlogPostList } from "@/helpers/file-helpers";

export async function GET() {
    const headersList = await headers();

    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';

    const mountURLusingPath = (path) =>  `${protocol}://${host}${path ? `/${path}` : ''}` 

    const blogPosts = await getBlogPostList();

    const feed = new RSS({
        title: 'title',
        description: 'description',
        feed_url: mountURLusingPath('rss.xml'),
        site_url: mountURLusingPath(''),
    })

    console.log(blogPosts[0])

    blogPosts.forEach(({slug, title, abstract, publishedOn}) => {
        feed.item({
            title,
            description: abstract,
            url: mountURLusingPath(slug),
            date: publishedOn
        })
    })

    const retXML = feed.xml();

    return new Response(retXML,{
        status: 200,
        headers: { 'Content-Type' : 'application/xml' }
    })
}