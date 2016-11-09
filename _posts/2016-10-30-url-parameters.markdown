---
layout: blogPage
title: "URL Parameters"
excerpt:  "URL Query String Parameters"
date:   2016-10-30 19:25:34 +0100
image_path: /images/query.png
categories: Browser
---

URL query string parameters represent extra information that can be appended to the Uniform Resource Identifier (URI) which is being used to locate a resource on the internet.

The query string is initiated with a "?" character which serves to separate the link from the query string being passed. Pieces of information in a structure handled by the target server can then be added, separated by "&" characters


> [http://www.example.com?type=cat&feet=paws](http://www.example.com?type=cat&feet=paws)


As the server at example.com does not handle the parameter variables "type" or "feet" the query string is apparently not used in any special way.

#### APIs

Currently, one of the areas in which URL query string parameters are most used is when manipulating APIs

> [http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en](http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en)

The above query string specifies the following information:

+ A "method" value of "getQuote", which is most likely a function that in this instance returns a random famous quote from a collection of famous quotes
+ a "key" value of "457653", which is most likely some form of API key - a unique identifier usually attributed to a single person or entity which can be used to control who has access to an API, to what extent, and at what regularity
+ a "format" value of "xml",  which most likely controls the format in which the quote is returned to the client
+ a "lang" value of "en", which likely controls the language in which the famous quote is returned

### Other applications

In a recent simple [Free Code Camp](https://www.freecodecamp.com/challenges/build-a-random-quote-machine) challenge to produce an [application which produces random quotes and allows you to share them on Twitter](https://codepen.io/pjce/full/QKXqEg/) I used query strings in a couple of interesting manners.

#### To route a request via a proxy

As a shortcut to managing a [cross domain call](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) to a random quotes API. By sending a request to https://jsonp.afeld.me/ with the query string "?url=http://quotes.stormconsultancy.co.uk/random.json" I am effectively wrapping my call to the API in the required authorization to have a cross-domain request return successfully. What's significant about this is that by passing the url as a query string and having the payload routed via another website jsonp.afeld.me is effectively acting like a proxy server for this call.

> [https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json](https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json)

#### To post on Twitter

Twitter supports a "status" query string which calls a function, or series of functions, to post the associated information as your current twitter status

> [http://twitter.com/home?status=your current status](http://twitter.com/home?status=your current status)

However if you enter this into your browser's search field some automatic conversion will take place and the request that gets sent to twitter will probably resemble something like the below, where the space characters have been replaced with their character code, "%20", there's lots of places to find lists of URL character encodings [this one](http://www.permadi.com/tutorial/urlEncoding/) is quite to the point.

> [http://twitter.com/home?status=your%20current%20status](http://twitter.com/home?status=your%20current%20status)

Some characters are not "safe" to be used in query strings or are reserved as part of the query "language" being employed, for example we've seen that "&" delimits different chunks of information. As an example trying to post a tweet to say something like "happy & coding" would result in the text being truncated as the "&" is interpreted as a delimiter.

>  [http://twitter.com/home?status=happy%20&%20coding](http://twitter.com/home?status=happy%20&%20coding)

To make this post work then we would have to substitute the "&" character with the appropriate URL encoding, "%26".

>  [http://twitter.com/home?status=happy%20%26%20coding](http://twitter.com/home?status=happy%20%26%20coding)
