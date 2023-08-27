document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.grtweet').addEventListener('mouseover', function (event) {
        document.querySelector('#whiteTwitter').style.display = 'none';
        document.querySelector('#grayTwitter').style.display = 'inline'
        event.preventDefault();
    })

    // if (window.innerWidth <= 984) {
        document.querySelector('.headerbutton').addEventListener('click', function (event) {
            // if (document.querySelector('.headerAbout').style.display == 'none') {
                document.querySelector('.headerAbout').style.display = 'block';
                document.querySelector('.headerLife').style.display = 'block';
                document.querySelector('.headerMemories').style.display = 'block';
                document.querySelector('.headerResume').style.display = 'block';
                document.querySelector('.headerConnect').style.display = 'block';
                event.preventDefault();
            // }
        })
    // }

    document.querySelector('.grtweet').addEventListener('mouseout', function (event) {
        document.querySelector('#whiteTwitter').style.display = 'inline';
        document.querySelector('#grayTwitter').style.display = 'none'
        event.preventDefault();
    })
    document.querySelector('.grface').addEventListener('mouseover', function (event) {
        document.querySelector('#whiteFacebook').style.display = 'none';
        document.querySelector('#grayFacebook').style.display = 'inline'
        event.preventDefault();
    })
    document.querySelector('.grface').addEventListener('mouseout', function (event) {
        document.querySelector('#whiteFacebook').style.display = 'inline';
        document.querySelector('#grayFacebook').style.display = 'none'
        event.preventDefault();
    })
    document.querySelector('.grinsta').addEventListener('mouseover', function (event) {
        document.querySelector('#whiteInsta').style.display = 'none';
        document.querySelector('#grayInsta').style.display = 'inline'
        event.preventDefault();
    })
    document.querySelector('.grinsta').addEventListener('mouseout', function (event) {
        document.querySelector('#whiteInsta').style.display = 'inline';
        document.querySelector('#grayInsta').style.display = 'none'
        event.preventDefault();
    })
})