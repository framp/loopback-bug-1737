module.exports = function(app) {
  app.models.Customer.create({}, function(err, customer){
    customer.items.create([{ "name": "a"}, { "name": "b"}]);
  });
};
 
