function getUserById(id){
  console.log('reading data from DB');
  const users = [
    {id: 1, name: 'john', purchaseCount: 5},
    {id: 2, name: 'sara', purchaseCount: 3},
    {id: 3, name: 'jane', purchaseCount: 2},
  ]
}
function sendEmail(name, message){
  console.log('email sent!')
}
module.exports = {
  getUserById,
  sendEmail
}