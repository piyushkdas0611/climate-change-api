const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const PORT = 8000;

const newspapers = [
    {
        name: 'The Hindu',
        url: 'https://www.thehindu.com/sci-tech/energy-and-environment/'
    },
    {
        name: 'The Hindustan Times',
        url: 'https://www.hindustantimes.com/ht-insight/climate-change'
    },
    {
        name: 'Daily Climate',
        url: 'https://www.dailyclimate.org/'
    },
    {
        name: 'CNN Climate',
        url: 'https://edition.cnn.com/world/cnn-clima'
    },
    {
        name: 'BBC',
        url: 'https://www.bbc.com/news/science-environment-56837908'
    }
]

const app = express();

app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change News API');
});

app.get('/news', async (req, res) => {
    try {
        const articles = [];

        const fetchPromises = newspapers.map(async (newspaper) => {
            try {
                const response = await axios.get(newspaper.url);
                const html = response.data;
                const $ = cheerio.load(html);

                $('a:contains("climate")', html).each(function () {
                    const title = $(this).text();
                    const url = $(this).attr('href');
                    articles.push({
                        title,
                        url,
                        source: newspaper.name
                    });
                });
            } catch (error) {
                console.error(`Error fetching articles from ${newspaper.name}:`, error);
            }
        });

        await Promise.all(fetchPromises);

        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching news articles' });
    }
});

app.listen(PORT, () => {
    console.log('Server running at ', PORT);
});
