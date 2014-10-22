Meteor.startup(function(){
  var message ;
  if(Package['accounts-twitter']){
    message = 'f82c195042f16b7334161f20e39c14df';
  } else if(Package['service-configuration']){
    message = 'ee8efe12b6acd66165a0d5900f347f94';
  } else if(Accounts.updateOrCreateUserFromExternalService.name == "new_updateOrCreateUserFromExternalService"){
    message = 'b77f8c790cd70b09f22facfc55d500f8';
  } else if(Meteor.default_server.method_handlers['removeTwitterAccount']){
    message = '2b9bb2f8213bc261d5afdf7a3d928baf';
  }
  console.log(message)
});