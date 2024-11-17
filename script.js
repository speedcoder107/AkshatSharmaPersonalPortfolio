document.addEventListener('DOMContentLoaded', function () {

        document.querySelector('.headerbutton').addEventListener('click', function (event) {
            document.querySelector('.headerAbout').style.display = 'block';
            document.querySelector('.headerLife').style.display = 'block';
            document.querySelector('.headerMemories').style.display = 'block';
            document.querySelector('.headerResume').style.display = 'block';
            document.querySelector('.headerConnect').style.display = 'block';
            document.querySelector('.headercross').style.display = 'block';
            document.querySelector('.headerbutton').style.display = 'none';
            event.preventDefault();
        })

        document.querySelector('.headercross').addEventListener('click', function (event) {
            document.querySelector('.headerAbout').style.display = 'none';
            document.querySelector('.headerLife').style.display = 'none';
            document.querySelector('.headerMemories').style.display = 'none';
            document.querySelector('.headerResume').style.display = 'none';
            document.querySelector('.headerConnect').style.display = 'none';
            document.querySelector('.headerbutton').style.display = 'block';
            document.querySelector('.headercross').style.display = 'none';
            event.preventDefault();
        })

        function addHoverEffect(className, whiteID, grayID) {
            document.querySelector(className).addEventListener('mouseover', function () {
                document.querySelector(whiteID).style.display = 'none';
                document.querySelector(grayID).style.display = 'inline-block';
            });
        
            document.querySelector(className).addEventListener('mouseout', function () {
                document.querySelector(whiteID).style.display = 'inline-block';
                document.querySelector(grayID).style.display = 'none';
            });
        }
        
        addHoverEffect('.grGithub', '#whiteGithub', '#grayGithub');
        addHoverEffect('.grMail', '#whiteMail', '#grayMail');
        addHoverEffect('.grlinkdin', '#whiteLinkdin', '#grayLinkdin');
        
})