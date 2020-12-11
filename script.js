$(document).ready(function () {
    var apiKey = ''
    var queryURL = ''

    $('#anime-home-btn').on('click', function () {
        console.log('button was clicked')
    })

    $('#liveaction-home-btn').on('click', function () {
        console.log('button was clicked')
    })
})

// Code below is for the video player
   // This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // This function creates an <iframe> (and YouTube player) after the API code downloads.
   var player;
   function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
       height: '390',
       width: '640',
       videoId: 'EzOr8Gglf3k',
     });
   }

$(document).ready(function() {

    var key = 'AIzaSyDX0T3NV-ugzJ8VlXk11vKCoCS26_2xSSs';
    var playlistId = 'PLqYXv_L7NiEzgd0-1z7RmyZtirWffCZKb';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: "snippet",
        key: key,
        maxResults: 100,
        playlistId: playlistId,
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function(data){
            console.log(data)
        })
    }


});
