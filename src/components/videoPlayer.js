angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    videos: '<'
  },
  controller: function() {
    console.log('player', this.videos);
  },
  templateUrl: './src/templates/videoPlayer.html'
});
