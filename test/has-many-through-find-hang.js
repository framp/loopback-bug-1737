var test = require("tape");
var app = require("../server/server");
const Customer = app.models.Customer;

test("Find shouldn't hang", function(assert) {
  Customer.findOne({}, function(err, customer) {
    assert.error(err);
    customer.items({}, function(err, items) {
      assert.error(err);
      assert.equal(JSON.stringify(items), "[ { name: 'a', id: 1 }, { name: 'b', id: 2 } ]");
      assert.end();
    });
  });
});

test("Find shouldn't hang when using filter", function(assert) {
  Customer.findOne({}, function(err, customer) {
    assert.error(err);
    customer.items({ where: { name: "a" } }, function(err, items) { 
      assert.error(err);
      assert.equal(JSON.stringify(items), "[ { name: 'a', id: 1 } ]");
      assert.end();
    });
  });
});

test((assert) => {
  assert.end();
  process.exit(0);
});