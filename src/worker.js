import { parseRss } from './parseRss.js';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const feedUrls = [
    'https://blog.cloudflare.com/rss/', // Replace with the URLs of your RSS feeds
    'https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml',
    // 'https://example.com/rss-feed-url-3',
    // Add more feed URLs as needed
  ];

  try {
    const allItems = [];

    // Fetch and parse feeds from each URL
    for (const feedUrl of feedUrls) {
      const response = await fetch(feedUrl);
      const feedData = await response.text();
      const parsedFeed = parseRss(feedData);
      allItems.push(...parsedFeed.items);
    }

    // Sort items by publication date (optional)
    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // Generate the combined RSS feed XML
    const channelTitle = 'Your Combined RSS Feed Title';
    const channelLink = 'https://example.com';
    const channelDescription = 'Your Combined RSS Feed Description';

    let rssFeedXml = `<?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0">
        <channel>
          <title>${channelTitle}</title>
          <link>${channelLink}</link>
          <description>${channelDescription}</description>
    `;

    for (const item of allItems) {
      const itemTitle = item.title;
      const itemDescription = item.description;
      const itemLink = item.link;
      const itemPubDate = item.pubDate;

      rssFeedXml += `
        <item>
          <title>${itemTitle}</title>
          <description>${itemDescription}</description>
          <link>${itemLink}</link>
          <pubDate>${itemPubDate}</pubDate>
        </item>
      `;
    }

    rssFeedXml += `
        </channel>
      </rss>
    `;

    return new Response(rssFeedXml, {
      headers: {
        'Content-Type': 'application/rss+xml',
      },
    });
  } catch (error) {
    // Handle errors and return an appropriate response
    return new Response(`An error occurred: ${error.message}`, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
