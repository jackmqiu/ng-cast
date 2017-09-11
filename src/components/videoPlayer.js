angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function() {

  },
  template: `
    <div class="video-player">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" ng-src="{{'https://www.youtube.com/embed/' + $ctrl.video.id.videoId || 'https://www.youtube.com/embed/OPxeCiy0RdY'}}" allowFullScreen></iframe>
      </div>
      <div class="video-player-details">
        <h3>{{$ctrl.video.snippet.title}}</h3>
        <div>{{$ctrl.video.snippet.description}}</div>
      </div>
    </div>
  `
});
