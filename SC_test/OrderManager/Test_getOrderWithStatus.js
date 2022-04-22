
const {sdk} = require('../conf.js');
const  expect  = require('chai').expect;

describe('Test GetOrderWithStatus',async()=>
{
      it('When status is provided "canceled" it should response with orders ',async()=>
    {
        const order_obj = await sdk.orders().getOrdersWithStatus('canceled',10);
        order_obj.forEach(element => {
            console.log("OrderId:",element.getOrderId())
            const statuses = element.getStatuses();
            statuses.forEach(element => {
                const status =element;
               expect(status).to.equal('canceled')
            });
            
        });
  
      })

    it('When status is provided "Pending" it should response with orders',async()=>
    {
        const order_obj = await sdk.orders().getOrdersWithStatus('pending',10);
        order_obj.forEach(element => {
            console.log("OrderId:",element.getOrderId())
            const statuses = element.getStatuses();
            statuses.forEach(element => {
                const status =element;
               expect(status).to.equal('pending')
            });
    })

    })
})