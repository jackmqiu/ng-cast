angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },

  controller: function() {
    console.log(this.videos);

    this.selectVideo = function(index) {

    };
  },

  template: `
    <ul class="video-list">
      <video-list-entry
        video="video"
        ng-click="$ctrl.selectVideo($index)"
        ng-repeat="video in $ctrl.videos track by $index"
      />
    </ul>
  `
});
