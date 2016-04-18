var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.pascongroup_ds;
/*
var account = {
  email: 'bob.doe@ibm.com',
  createdAt: new Date(),
  lastModifiedAt: new Date()
};
var opts = {
  idInjection: true
};
var Account = ds.buildModelFromInstance('publico_objetivo', account, opts);

var instance = new Account(account);
Account.create(instance, function(err, model) {
  if (err) throw err;

  console.log('Created:', model);

  ds.disconnect();
});
*/


/*
ds.discoverAndBuildModels('publico_objetivo', {schema: 'public'}, function (err, models) {
    models.PublicoObjetivo.findOne({}, function (err, act) {
        if (err) {
            console.error(err);
        } else {
            console.log(act);
        }
        ds.disconnect();
    });
});
*/

  ds.discoverSchema('publico_objetivo', {schema: 'public'}, function (err, schema) {
       console.log(JSON.stringify(schema, null, '  '));
   });
 
   ds.discoverAndBuildModels('publico_objetivo', {schema: 'public'}, function (err, models) {
       models.PublicoObjetivo.findOne({}, function (err, act) {
           if (err) {
               console.error(err);
           } else {
               console.log(act);
           }
           ds.disconnect();
       });
   });

/*
// Discover and build models from INVENTORY table
ds.discoverAndBuildModels('publico_objetivo', {visited: {}, associations: true},
function (err, models) {
	//console.log(models);
  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory
  models.PublicoObjetivo.findOne({}, function (err, inv) {
    if(err) {
      console.error(err);
      return;
    }
    console.log(inv);
    //console.log("\nPascongroup: ", inv);
    // Navigate to the product model
    inv.Publico_objetivo(function (err, prod) {
      console.log("\nProduct: ", prod);
      console.log("\n ------------- ");
    });
  });
});*/