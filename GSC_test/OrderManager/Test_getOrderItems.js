const {sdk} = require('../conf.js');
const  expect  = require('chai').expect;

 describe('Test GetOrder Items ',async()=>
{
   const orderId =60162560 ;
   const itemId=179210;

    it('When provided valid order Id, Corresponding order item details should be displayed in response',async()=>
    {
        const Order_Obj = await sdk.orders().getOrderItems(orderId)
        const arr=Order_Obj.all()
        arr.forEach(element => {
           expect(parseInt(element.getOrderItemId())).to.equal(itemId);
        });   
    })
});
describe('Test Get Multiple Order Items ',async()=>
{
    it('When provided valid order Id array, Corresponding order item details should be displayed in response',async()=>
    {
        const orderId =[60149308,60153795,60149282]
        const Order_Obj = await sdk.orders().getMultipleOrderItems(orderId)
        const arr=Order_Obj.all()
        arr.forEach(element => {
        console.log(element.getOrderId());
        });  
            
    }); 
});
