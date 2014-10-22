var orig_updateOrCreateUserFromExternalService = Accounts.updateOrCreateUserFromExternalService;
Accounts.updateOrCreateUserFromExternalService = new_updateOrCreateUserFromExternalService;

function new_updateOrCreateUserFromExternalService(serviceName, serviceData, options) {
  console.log('insert your override logic here');
}