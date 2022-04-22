
const {sdk} = require('../conf.js');
const  expect  = require('chai').expect;

 describe('Test GetOrders',async()=>
{
   const orderId =47863594 ;

    it('When provided valid order Id, Corresponding order details should come in response',async()=>
    {
        const Order_Obj = await sdk.orders().getOrder(orderId);
        console.log(Order_Obj.getOrderId());
        expect(parseInt(Order_Obj.getOrderId())).to.equal(orderId);
    })

    it('When provided invalid orderId, Corresponding error message should be displayed',async()=>
    {
        invalid_oId =123; 
        try
        {
            const order_obj = await sdk.orders().getOrder(invalid_oId);
        }catch(error){
            console.error("E016:",invalid_oId,"Invalid Order ID");
        }    
    })

    it('When called getter methods of getOrder,It should print corresponding response',async()=>
    {
        const Order_Obj = await sdk.orders().getOrder(orderId);
       console.log("OrderId:\t"+Order_Obj.getOrderId()+'\n'+
                   "CustomerFirstName:\t"+Order_Obj.getCustomerFirstName()+'\n'+
                   "CustomerLastName:\t"+Order_Obj.getCustomerLastName()+'\n'+
                   "OrderNumber:\t"+Order_Obj.getOrderNumber()+'\n'+
                   "PaymentMethod:\t"+Order_Obj.getPaymentMethod()+'\n'+
                   "Remarks:\t"+Order_Obj.getRemarks()+'\n'+
                   "DeliveryInfo:\t"+Order_Obj.getDeliveryInfo()+'\n'+
                   "Price:\t"+Order_Obj.getPrice()+'\n'+
                   "GiftMessage:\t"+Order_Obj.getGiftMessage()+'\n'+
                   "CreatedAt:\t"+Order_Obj.getCreatedAt()+'\n'+
                   "UpdatedAt:\t"+Order_Obj.getUpdatedAt()+'\n'+
                   "AddressBilling_City :\t"+Order_Obj.getAddressBilling().getCountry()+'\n'
                   )   
    }) 
}); 