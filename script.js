//  Mobile Nav

const hamBurger = document.querySelector('.hamburger__icon')
const mobileNav = document.querySelector('.mobile__ul')


hamBurger.addEventListener('click', () => {
    mobileNav.classList.toggle('active')
})

document.body.addEventListener('click', (e)=> {
    if(e.target.closest('.mobile__ul') || e.target.matches('.hamburger__icon')) return;

    mobileNav.classList.remove('active')
})

// Faq Box

const questionWrapper = document.querySelector('.faq__questionWrapper')

questionWrapper.addEventListener('click', (e) => {
    if(!e.target.closest('.faq__box')) return;

    const faqBox = e.target.closest('.faq__box');
    const faqContent = faqBox.querySelector('.faq__content')
    faqContent.classList.toggle('active')
})

// Modal
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-video', {
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }

const modalBtn = document.querySelector('.modal-btn');
const modalBtnClose = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal');
const playerIframe = document.querySelector('.iframe-player');

modalBtn.addEventListener("click", () => {
  setTimeout(()=> {
    modal.classList.add('open');
    player.playVideo()
  }, 100)
})

modalBtnClose.addEventListener("click", () => {
    modal.classList.remove('open');
    player.pauseVideo()
})
