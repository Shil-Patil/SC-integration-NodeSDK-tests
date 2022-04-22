const {sdk} = require('../conf');
const expect =require('chai').expect;

describe('Test status change in oredr manager ',async()=>
{
    const orderItemId =[179170]

      it('Test setStatusToPackedByMarketplace',async()=>
    {
        const order_obj = await sdk.orders().setStatusToPackedByMarketplace(orderItemId,'Dropshipping','chilexpress');
        order_obj.forEach(element => {
        expect(element.getPackageId()).to.not.equal(null);
        console.log('Package Id:',element.getPackageId())
        });
       
    });   
    
    it('Test setStatusToReadyToShip',async()=>
    {
        const order_obj = await sdk.orders().setStatusToReadyToShip(orderItemId,'Dropshipping','c314ef03-13fb-4002-ba64-e33a94ee0c82');
        order_obj.forEach(element => {
            expect(parseInt(element.getOrderItemId())).to.equal(orderItemId)
            console.log(element.getPackageId())
        });
    });    
   
    it('Test setStatusToCancelled',async()=>
    {
       await sdk.orders().setStatusToCanceled(178926,'OTHER','xyz');
        
    });     
});