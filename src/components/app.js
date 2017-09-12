angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    // this.videos = exampleVideoData;
    // this.currentVideo = this.videos[0]

    this.updateVideo = function(index) {
      this.currentVideo = this.videos[index];
    };

    this.updateVideoList = function(videos) {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };

    this.searchResults = [];

    this.search = (term) => {
      youTube.get(term, this.updateVideoList.bind(this));
    };

    this.$onInit = function () {
      this.search();
    };
  },

  template: `
    <div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search><h5><em>search</em> component goes here</h5></search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video="$ctrl.currentVideo"><h5><em>videoPlayer</em> component goes here</h5></video-player>
        </div>
        <div class="col-md-5">
          <video-list videos="$ctrl.videos"><h5><em>videoList</em> component goes here</h5></video-list>
        </div>
      <div>
    </div>
  `
});
