angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },

  controller: function() {

    this.onClick = function(index) {

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
