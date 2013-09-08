var http = require('http'),
    NodePie = require("nodepie"),
    feed;

var content = "";

var req = http.get("http://feeds.bbci.co.uk/news/rss.xml", function(response){
    //console.log(response.statusCode);
    response.on('data', function(chunk){
        content += chunk;
    });
    response.on('end', function(){
        printFeedDetails();
    })
}).on('error', function(error) {
    console.log(error);
});

var printFeedDetails = function() {
    feed = new NodePie(content);
        feed.init();
        console.log(feed.getTitle());
        feed.getItems(0, 3).forEach(function(item){
            console.log(item.getTitle());
        });
}
