module("Additional feed processing");

test("checks if my thumbnail extractor returns syntatically valid URLs", function() {

    function isUrl(s) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(s);
    }
    
    var feedurl = "http://thisisnthappiness.com/rss";
    var feedpointer = new google.feeds.Feed(feedurl);
    feedpointer.setNumEntries(40);
    feedpointer.load(handlefeed);
    
    function handlefeed(result) {
        if(!result.error) {
            var thefeeds = result.feed.entries;
            // do something with the feed entries
            //console.log(thefeeds);
            for(var i=0; i<thefeeds.length; i++) {
                //console.log("feed: title - " + thefeeds[i].title + ", link " + thefeeds[i].link + ", content: " + thefeeds[i].content);
                // resolve feed item's thumbnail using our resolver
                var thumbnailURL = myThumbnailUrlResolver(thefeeds[i]);
                // check if 
                ok(isUrl(thumbnailURL, "resolved thumbnail URL is not syntatically correct"));
            }
        }
    }
});

