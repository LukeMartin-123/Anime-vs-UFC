// This function calls the Youtube API and receives an object for a certain playlist
$(document).ready(function () {
    
    // BRANDONS API KEY FOR GIPHY
    var APIKEY = 'EcTuCnxi6gDpNiUddqUXjbRwECX0iIvh',
    // BRANDONS API KEY FOR YOUTUBE
    // var apiKey = 'AIzaSyCPfeCYrxkjhyQ1ghnZO43_clhrhHxiJqs',
    queryURL = ''

    // $'#giphy-test').on('click', giphy)
    function giphy (event) {
        event.preventDefault()
        var textInput = $('#giphy-search').val()
        console.log(textInput)
        console.log('giphy button was clicked')
        var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`
        var str = textInput.trim()
        console.log(str)
        url = url.concat(str)
        console.log(url)
        fetch(url)
        .then(response => response.json() )
        .then(content => {
            // data, pagination, meta
            console.log(content.data)
            console.log('META', content.meta)
            console.log(content.data[0].title)
            var p = $('<p>')
            var img = $('<img>')
            var fc = $('<figcaption>')
            img.attr('src', content.data[0].images.downsized.url)  
            console.log(content.data[0].images.downsized.url)
            img.attr('alt', content.data[0].title) 
            fc.text(content.data[0].title) 
            console.log(content.data[0].title)
            p.append(img, fc)
            $('#giphy-container').append(p)

        })
        .catch(err => {
            console.log(err)
        })
    }

    $.ajax({
        queryURL: queryURL,
        method: 'GET'
    }).then

    $('#anime-home-btn').on('click', animeBtn)
    $('#liveaction-home-btn').on('click', liveActionBtn)

function animeBtn () {
    console.log('animeBtnClick works')
    loadAnimeVids() 
    $(this).addClass("none");
    $('#anime-vote-btn').removeClass("none");
}

function liveActionBtn () {
    console.log('live action btn clicked')
    loadVids()
    $(this).addClass("none");
    $('#liveaction-vote-btn').removeClass("none");
}

$(':button').click(function () {
    if (this.id == 'liveaction-vote-btn') {
        $('#anime-vote-btn').addClass("none");
        $('#liveaction-vote-btn').addClass("none");
        $('#anime-home-btn').addClass("none");
        $('#watch-again').removeClass("none"); 
        $('#animeplayer').addClass("none");
    }
    else if (this.id == 'anime-vote-btn') {
        $('#liveaction-vote-btn').addClass("none");
        $('#anime-vote-btn').addClass("none");
        $('#liveaction-home-btn').addClass("none");
        $('#watch-again').removeClass("none");  
        $('#mmaplayer').addClass("none"); 
    }
    else if (this.id == 'watch-again') {
        $('#mmaplayer').removeClass("none");
        $('#animeplayer').removeClass("none");
        loadVids()
        loadAnimeVids() 
    }
});


// When anime or live action button is clicked show video and hide that button

// Video and vote button appear

// When vote button is clicked a tally is added to local storage and other vote button disappears


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
       events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
       }
     });
   }

   // The API will call this function when the video player is ready.
   function onPlayerReady(event) {
     event.target.playVideo();
   }

   // The API calls this function when the player's state changes.
   // The function indicates that when playing a video (state=1),
   // the player should play for six seconds and then stop.
   var done = false;
   function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
       setTimeout(stopVideo, 6000);
       done = true;
     }
   }
   function stopVideo() {
     player.stopVideo();
   }


    var key = 'AIzaSyDX0T3NV-ugzJ8VlXk11vKCoCS26_2xSSs';
    var playlistId = 'PLzf4erpJ2VgJ4v18XQHW5lAamvwdk-dxl';
    var animePlaylistId = 'PLzf4erpJ2VgJjEuN3_vDAU5kAK2hE44gE';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: "snippet",
        key: key,
        maxResults: 700,
        playlistId: playlistId,
    }

    var animeOptions = {
        part: "snippet",
        key: key,
        maxResults: 700,
        playlistId: animePlaylistId,
    }

    //loadVids();
    //loadAnimeVids();

    // This function takes the information from the mma video object and places only the video ID into an array
    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var videoIds = []
            var i;
            for (i = 0; i < data.items.length; i++) {

                videoIds.push(data.items[i].snippet.resourceId.videoId)
                // console.log(videoIds)
            }
            // This loops over the mmavideo array and randomly pulls a video Id and places that ID into the video player
            var rand = Math.random();
            var totalVideos = videoIds.length;
            var randIndex = Math.floor(rand * totalVideos)
            var randomVideo = videoIds[randIndex]
            window.YT.ready(function () {
                player = new YT.Player('mmaplayer', {
                    height: '360',
                    width: '480',
                    videoId: randomVideo,
                });
            })
        })
    };
    // This function takes the information from the anime video object and places only the video ID into an array
    function loadAnimeVids() {
        $.getJSON(URL, animeOptions, function (data) {
            console.log(data)
            var videoIds = []
            var i;
            for (i = 0; i < data.items.length; i++) {

                videoIds.push(data.items[i].snippet.resourceId.videoId)
            }
            // This loops over the animevideo array and randomly pulls a video Id and places that ID into the video player
            var rand = Math.random();
            var totalVideos = videoIds.length;
            var randIndex = Math.floor(rand * totalVideos)
            var randomVideo = videoIds[randIndex]
            window.YT.ready(function () {
                player2 = new YT.Player('animeplayer', {
                    height: '360',
                    width: '480',
                    videoId: randomVideo,
                });
            })
        })
    };
    // Code below is for the video player
    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    src="https://apis.google.com/js/client.js?onload=init";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



})


    function animeBtn () {
        console.log('animeBtnClick works')
        loadAnimeVids() 
    }

    function liveActionBtn () {
        loadAnimeVids()
        console.log('live action btn clicked')
    }

})

