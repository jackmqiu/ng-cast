angular.module('video-player')

.component('search', {
  controller: function() {
    this.searchTerm = '';
    this.onChange = () => {
      console.log(this.searchTerm);
      _.debounce(this.parent.search.bind(this.parent, this.searchTerm), 500)();
    };
  },
  require: {
    parent: '^app'
  },
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" ng-model="$ctrl.searchTerm" ng-change="$ctrl.onChange()" type="text" />
      <button class="btn" ng-click="$ctrl.parent.search($ctrl.searchTerm)">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>
  `
});
