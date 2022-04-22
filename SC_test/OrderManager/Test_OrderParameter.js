const {sdk} =require('../conf');
const expect = require('chai').expect;

describe('Test Getters in order manager',async()=>
{
    const from = new Date('2022-05-15');
    const to = new Date('2021-10-05');
   
 
     it('Test getOrderFromParameters aginst valid data',async()=>
    {
        const obj= await sdk.orders().getOrdersFromParameters(from,to,from,to,'pending',5,0) ;
        obj.forEach(element => {
            expect(element.getCreatedAt()).to.lessThan(to);
            console.log(element.getCreatedAt(),element.getUpdatedAt(),element.getOrderId())
        }); 
        
    });
    it('Test Getter function for orders created between',async()=>
    {
        const obj= await sdk.orders().getOrdersCreatedBetween(from,to,5,0)

    }); 
    it('Test Getter function for orders updated between',async()=>
    {
        //updated after and updated before
        const obj= await sdk.orders().getOrdersUpdatedBetween(from,to,5,0)
        obj.forEach(element => {
            console.log(element.getCustomerFirstName(),element.getCustomerLastName(),element.getUpdatedAt())
        });      
    }); 

    it('Test Getter function for orders created After',async()=>{

        const obj= await sdk.orders().getOrdersCreatedAfter(from,5,0)
        obj.forEach(element => {
            console.log(element.getCustomerFirstName(),element.getCreatedAt())
            expect(element.getCreatedAt()).to.greaterThanOrEqual(from);
        });
      
    }); 
    it('Test getter function for orders created before date',async()=>{
        const obj= await sdk.orders().getOrdersCreatedBefore(to,5,0)
        obj.forEach(element => {
            console.log(element.getCustomerFirstName(),element.getCreatedAt())
            expect(element.getCreatedAt()).to.lessThanOrEqual(from);
        });
   
    });
    it('Test getter function for orders Updated before',async()=>{

        const obj= await sdk.orders().getOrdersUpdatedAfter(from,5,0)
        obj.forEach(element => {
            console.log(element.getCustomerFirstName(),element.getCreatedAt())
            expect(element.getCreatedAt()).to.lessThanOrEqual(from);
        });
   
    });
    it('Test getter function for orders Updated After',async()=>{

        const obj= await sdk.orders().getOrdersUpdatedBefore(to,5,0)
        obj.forEach(element => {
            console.log(element.getCustomerFirstName(),element.getCreatedAt())
            expect(element.getCreatedAt()).to.lessThanOrEqual(from);
        });
   
    });
    it('Test set invoice number ',async()=>
    {
        const obj= await sdk.orders().setInvoiceNumber(179170,'76','http://localhost:3000/')
    });
    it('Test get tracking code method of order manager',async()=>
    {
        const obj = await sdk.orders().getTrackingCode('115d291b-4f09-427a-bef9-1ba9bce20d81','chilexpress');
        console.log(obj)
    })
}); 