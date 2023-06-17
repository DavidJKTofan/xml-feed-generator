# Serverless RSS Feed Generator

This project is a serverless RSS feed generator built with Cloudflare Workers. It allows you to generate RSS feeds from various sources and serve them to subscribers.

## Features

- Fetches RSS feeds from multiple sources
- Combines the feed items into a single RSS feed
- Supports sorting of feed items by publication date
- Serverless architecture using [Cloudflare Workers](https://workers.cloudflare.com/)

## Prerequisites

Before running the project, make sure you have the following:

- Cloudflare account
- Wrangler CLI installed and configured with your Cloudflare account credentials
- RSS feed URLs that you want to generate the combined feed from

## Installation

1. Clone the repository:

```
git clone https://github.com/DavidJKTofan/xml-feed-generator
```

2. Navigate to the project directory:

```
cd serverless-rss-feed-generator
```

3. Install dependencies:

```
npm install
```

## Configuration

1. Open the `worker.js` file in a text editor.

2. Update the `feedUrls` array with the URLs of the RSS feeds you want to generate the combined feed from.

3. Customize the channel title, link, and description in the `handleRequest` function to match your desired feed details.

## Deployment

To deploy the serverless RSS feed generator to Cloudflare Workers:

1. Configure your Cloudflare account credentials:

```
wrangler config
```

2. Build and publish the project to Cloudflare Workers:

```
npm deploy
```

Or alternatively:
```
wrangler publish
```

4. Note the generated Worker URL provided by Cloudflare.

## Usage

To use the serverless RSS feed generator:

1. Access the Worker URL in a web browser or use it as the feed URL in an RSS reader.

2. The serverless RSS feed generator will fetch and combine the feeds from the specified URLs and serve the generated feed as an RSS XML response.

## Customization

You can customize the behavior and appearance of the serverless RSS feed generator by modifying the `worker.js` file.

- Add or remove feed URLs in the `feedUrls` array to fetch feeds from different sources.
- Adjust the sorting logic in the `handleRequest` function to change the order of the feed items.
- Modify the XML structure and content generation to customize the appearance of the generated RSS feed.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements, please submit an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
