// load Google Feeds API
google.load("feeds", "1");

// name used to set up cookie for the feed URL
var cookie_name = "rssfeed_url";

// will hold slideshow object
var ss;

/**
 * set cookie.
 *
 * @param c_name cookie name
 * @param value cookie value
 * @param exdays expiration days from now
 */
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

/**
 * get cookie's value.
 * @param c_name cookie name
 * @return value of the cookie of 'undefined' when cookie is not defined
 */
function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name) {
            return unescape(y);
        }
    }
    return undefined;
}


// slideshow options
var options = {
    numResults: 200,
    displayTime: 2000,
    transistionTime: 600,
    scaleImages: false,
    thumbnailTag: "content",
    fullControlPanel : true
};


/**
 * reinitialize slideshow with new feed URL
 * @param newfeed URL to the new feed
 */
function reinit_slideshow(newfeed) {
    setCookie(cookie_name, newfeed, 365);
    ss = new GFslideShow(newfeed, "slideshow", options);
}

/**
 * main entry point.  
 */
function OnLoad() {
    //resize window
    resizeTo(700,1050);

    var feedUrl = getCookie(cookie_name);
    if(!feedUrl) {
        setCookie(cookie_name, "http://feeds.feedburner.com/ffffound/everyone", 10);
        feedUrl = getCookie(cookie_name);
    }
    reinit_slideshow(feedUrl);
}


// set callback on load to our function
google.setOnLoadCallback(OnLoad);
