angular.module('video-player')

.component('search', {
  controller: function() {
    this.searchTerm = '';
  },
  require: {
    parent: '^app'
  },
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" ng-model="$ctrl.searchTerm" type="text" />
      <button class="btn" ng-click="$ctrl.parent.search($ctrl.searchTerm)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
});
