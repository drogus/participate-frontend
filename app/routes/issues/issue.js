import Ember from 'ember';

var IssueRoute = Ember.Route.extend({

  // model: function(params) {
  //   return this.store.find('issue', params.issue_id);
  // },

  model: function(params) {
    return this.store.find('issue');
  },

  renderTemplate: function() {
    this.render('issues/index');
  }

  // actions: {
  // 	postChangedRoute: function(currentPost) {
  // 		var issueUrl = issue.get('url');
  // 		console.log('issueUrl', issueUrl);
  // 		debugger;
  	
  // 	}
  //     //ORIGINAL FROM DISCOURSE
  // 	 // // Use replaceState to update the URL once it changes
  //   // postChangedRoute: function(currentPost) {

  //   //   // do nothing if we are transitioning to another route
  //   //   if (isTransitioning || Discourse.TopicRoute.disableReplaceState) { return; }

  //   //   var topic = this.modelFor('topic');
  //   //   if (topic && currentPost) {
  //   //     var postUrl = topic.get('url');
  //   //     if (currentPost > 1) { postUrl += "/" + currentPost; }

  //   //     Em.run.cancel(scheduledReplace);
  //   //     lastScrollPos = parseInt($(document).scrollTop(), 10);
  //   //     scheduledReplace = Em.run.later(this, '_replaceUnlessScrolling', postUrl, SCROLL_DELAY);
  //   //   }
  //   // },

  // }

});

export default IssueRoute;