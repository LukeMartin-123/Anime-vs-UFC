$(document).ready(function () {

    
    // BRANDONS API KEY FOR GIPHY
    var APIKEY = 'EcTuCnxi6gDpNiUddqUXjbRwECX0iIvh'
    // BRANDONS API KEY FOR YOUTUBE
    var apiKey = 'AIzaSyCPfeCYrxkjhyQ1ghnZO43_clhrhHxiJqs'
    var queryURL = ''

    $('#giphy-test').on('click', giphy)

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
}

function liveActionBtn () {
    console.log('live action btn clicked')
}

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
})