angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
  },
  require: {
    parent: '^app'
  },
  controller: function() {
    var that = this;
    this.onClick = function(index) {
      this.parent.updateVideo(index);
    };
  },
  template: `
    <ul class="video-list">
      <video-list-entry
        video="video"
        ng-click="$ctrl.onClick($index)"
        ng-repeat="video in $ctrl.videos track by $index"
      />
    </ul>
  `
});
