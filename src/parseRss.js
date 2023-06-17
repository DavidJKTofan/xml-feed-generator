export function parseRss(feedData) {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const titleRegex = /<title>([\s\S]*?)<\/title>/;
  const descriptionRegex = /<description>([\s\S]*?)<\/description>/;
  const linkRegex = /<link>([\s\S]*?)<\/link>/;
  const pubDateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;

  const items = feedData.match(itemRegex);
  const parsedItems = [];

  for (const item of items) {
    const titleMatch = item.match(titleRegex);
    const descriptionMatch = item.match(descriptionRegex);
    const linkMatch = item.match(linkRegex);
    const pubDateMatch = item.match(pubDateRegex);

    if (titleMatch && descriptionMatch && linkMatch && pubDateMatch) {
      const title = titleMatch[1];
      const description = descriptionMatch[1];
      const link = linkMatch[1];
      const pubDate = pubDateMatch[1];

      parsedItems.push({
        title,
        description,
        link,
        pubDate,
      });
    }
  }

  return {
    items: parsedItems,
  };
}
