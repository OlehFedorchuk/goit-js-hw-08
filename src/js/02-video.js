import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const saveCurrentTime = currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
};
player.on(
  'timeupdate',
  throttle(event => {
    // console.log(event);
    const currentTime = event.seconds;
    saveCurrentTime(currentTime);
  }, 1000)
);
const savedTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
