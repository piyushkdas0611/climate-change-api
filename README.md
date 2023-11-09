# Climate Change News API

Welcome to the Climate Change News API! This API aggregates climate-related news articles from various reputable sources. Stay informed about the latest developments and discussions on climate change with just a few API calls.

## Features
* News Aggregation: Retrieve climate change-related news articles from popular newspapers and news websites.
* Source Diversity: Access articles from a variety of sources, including The Hindu, The Hindustan Times, Daily Climate, CNN Climate, and BBC.
* Easy Integration: Built with Node.js, Express, Axios, and Cheerio for seamless integration into your applications.

## How to Use
Installation:
```npm install```

Run the API:
```npm start```

API Endpoints:
/news: Get a list of climate change-related news articles.

Example Usage:
```const axios = require('axios');
// Example: Get climate change news articles
axios.get('http://localhost:8000/news')
  .then(response => {
    console.log('Climate Change News:', response.data);
  })
  .catch(error => {
    console.error('Error fetching news articles:', error);
  });
```

## Supported Sources
* The Hindu: Link
* The Hindustan Times: Link
* Daily Climate: Link
* CNN Climate: Link
* BBC: Link

## Contributing
Contributions are welcome! If you have ideas for improvement or want to add support for more news sources, feel free to open an issue or submit a pull request.

## Contact
For any inquiries or support, please contact at piyush.k.das25@gmail.com.

Stay informed and make a difference! 🌎📰
