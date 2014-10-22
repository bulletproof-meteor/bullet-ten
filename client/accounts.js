Template.account.events({
  "click #connect-twitter-account": function (e) {
    Meteor.loginWithTwitter(function(err, result){
      console.log(err)
    });
  },
  "click #remove-twitter-account": function(e){
    Meteor.call('removeTwitterAccount', function(err, result){
      if(err){
        throw err;
      } 
    });
  }
});