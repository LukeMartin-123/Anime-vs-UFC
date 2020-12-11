$(document).ready(function () {


    var apiKey = 'AIzaSyCPfeCYrxkjhyQ1ghnZO43_clhrhHxiJqs'
    var queryURL = ''


    
    $.ajax({
        queryURL: queryURL,
        method: 'GET'
    }).then

    $('#anime-home-btn').on('click', animeBtn)

    $('#liveaction-home-btn').on('click', liveActionBtn)
})

function animeBtn () {
    console.log('animeBtnClick works')
}

function liveActionBtn () {
    console.log('live action btn clicked')
}

