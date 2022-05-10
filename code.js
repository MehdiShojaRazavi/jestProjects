const service = require('./service');

function calcDiscount(id){
  let discount = 0;
  const user = service.getUserById(id);
  if (user.purchaseCount > 3) discount = 10;
  service.sendEmail(user.name, `user have got ${discount} percent discount`);
  return discount;
}
module.exports = calcDiscount;