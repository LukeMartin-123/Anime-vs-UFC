

// This function calls the Youtube API and receives an object for a certain playlist
$(document).ready(function () {

    var key = 'AIzaSyDX0T3NV-ugzJ8VlXk11vKCoCS26_2xSSs';
    var playlistId = 'PLzf4erpJ2VgJ4v18XQHW5lAamvwdk-dxl';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: "snippet",
        key: key,
        maxResults: 700,
        playlistId: playlistId,
    }

    loadVids();

    // This function takes the information from the object and places only the video ID into an array
    function loadVids() {
        $.getJSON(URL, options, function (data) {
            console.log(data)
            var videoIds = []
            var i;
            for (i = 0; i < data.items.length; i++) {

                videoIds.push(data.items[i].snippet.resourceId.videoId)
                // console.log(videoIds)
            }
            // This loops over the array and randomly pulls a video Id and places that ID into the video player
            var rand = Math.random();
            var totalVideos = videoIds.length;
            var randIndex = Math.floor(rand * totalVideos)
            var randomVideo = videoIds[randIndex]
            console.log(randomVideo)
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: randomVideo,
            });
        })
    }

});

// Code below is for the video player
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {

}


