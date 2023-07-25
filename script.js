document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.grtweet').addEventListener('mouseover', function(event){
        document.querySelector('#whiteTwitter').style.display = 'none';
        document.querySelector('#grayTwitter').style.display = 'inline'
        event.preventDefault();
    })
    document.querySelector('.grtweet').addEventListener('mouseout', function(event){
        document.querySelector('#whiteTwitter').style.display = 'inline';
        document.querySelector('#grayTwitter').style.display = 'none'
        event.preventDefault();
    })
    document.querySelector('.grface').addEventListener('mouseover', function(event){
        document.querySelector('#whiteFacebook').style.display = 'none';
        document.querySelector('#grayFacebook').style.display = 'inline'
        event.preventDefault();
    })
    document.querySelector('.grface').addEventListener('mouseout', function(event){
        document.querySelector('#whiteFacebook').style.display = 'inline';
        document.querySelector('#grayFacebook').style.display = 'none'
        event.preventDefault();
    })
    document.querySelector('.grinsta').addEventListener('mouseover', function(event){
        document.querySelector('#whiteInsta').style.display = 'none';
        document.querySelector('#grayInsta').style.display = 'inline'
        event.preventDefault();
    })
    document.querySelector('.grinsta').addEventListener('mouseout', function(event){
        document.querySelector('#whiteInsta').style.display = 'inline';
        document.querySelector('#grayInsta').style.display = 'none'
        event.preventDefault();
    })
    })