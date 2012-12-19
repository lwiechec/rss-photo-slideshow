rss-photo-slideshow
===================

Display slideshow from RSS source; do it in generally cool way.

Yes, I know that this idea is probably somewhere but we would like to use this as a training project...

1. What should it do
====================

There are some interesting photo blogs that use RSS. The idea is to have a very simple slideshow with photos
from one or more sources. The RSS sources should be easily provided from the HTML form; we could also provide
a list of interesting existing ones (like FFFOUND or This Isn't Happiness).

It should be possible to mix the content from various RSS feeds (for mashup-kind of photo stream), with easy way
to quickly open another slideshow window with single or multiple feeds.

2. How to do it
===============

The code should be HTML + JavaScript. We can use [Google Feed API](https://developers.google.com/feed/v1)
together with [slideshow 'extension'](http://www.google.com/uds/solutions/slideshow/reference.html)
that will do the main work. All we should do is to make it look nice.