import Ember from 'ember';

var IssuesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('issue');
  },

  beforeModel: function() {
    this.transitionTo('issues.issue');
  }

});

export default IssuesIndexRoute;