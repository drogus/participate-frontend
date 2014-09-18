var IssuesIndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('issues').set('expandedIssueId', null);
  }
});

export default IssuesIndexRoute;
