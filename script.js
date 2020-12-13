// This function calls the Youtube API and receives an object for a certain playlist

$(document).ready(function () {
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

    loadVids();
    loadAnimeVids();

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
<<<<<<< HEAD

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
=======

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
>>>>>>> 52d5eab69e479bb38de7b1d0050786c3ba272b73

    tag.src = "https://www.youtube.com/iframe_api";
    src="https://apis.google.com/js/client.js?onload=init";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})