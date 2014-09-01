import Ember from 'ember';

var IssueController = Ember.ObjectController.extend({

  actions: {
    toggleExpand: function() {
      this.toggleProperty('isExpanded');

      this.transitionToRoute('/issues/' + issue_id)
      
     //  var issue = issuesContent.issue;  //this.modelFor('issue');
     //  var issueUrl = issue.get('url');
     //  console.log('issueUrl', issueUrl);
  	  // debugger;
    }
  },

  isExpanded: false,

    // If our current issue is changed, notify the router
  _currentIssueChanged: function() {
    var currentIssue = this.get('currentIssue');
    if (currentIssue) {
      this.send('issueChangedRoute', currentIssue);
    }
  }.observes('currentIssue')

  // ORIGINAL FROM DISCOURSE
  //   // If our current post is changed, notify the router
  // _currentPostChanged: function() {
  //   var currentPost = this.get('currentPost');
  //   if (currentPost) {
  //     this.send('postChangedRoute', currentPost);
  //   }
  // }.observes('currentPost')

});

export default IssueController;