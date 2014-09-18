import Ember from 'ember';

var IssueRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('issue', params.issue_id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    this.controllerFor('issues').set('expandedIssueId', model.get('id'));
  },

  renderTemplate: function() {
    // just do nothing
  }
});

export default IssueRoute;
