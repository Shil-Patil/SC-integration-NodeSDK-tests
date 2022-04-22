const {sdk} = require('../conf');
const expect =require('chai').expect;

describe('Test status change in oredr manager ',async()=>
{
    const orderItemId =[5227900]

      /* it('Test setStatusToPackedByMarketplace',async()=>
    {
        const order_obj = await sdk.orders().setStatusToPackedByMarketplace(10475004,'DropShip','DHL');
        order_obj.forEach(element => {
        expect(element.getPackageId()).to.not.equal(null);
        console.log('Package Id:',element.getPackageId())
        });
       
    });    */
    /*
    it('Test setStatusToReadyToShip',async()=>
    {
        const order_obj = await sdk.orders().setStatusToReadyToShip(orderItemId,'DropShip','1000108119700');
        order_obj.forEach(element => {
            expect(parseInt(element.getOrderItemId())).to.equal(orderItemId)
            console.log(element.getPackageId())
        });
    });    
    */
    it('Test setStatusToCancelled',async()=>
    {
       await sdk.orders().setStatusToCanceled(
           5178518,
           'Otro',
           'reasondetail'
        );
        
    });     
});