const res = require('express/lib/response');
const {sdk} = require('../conf.js');
const expected = require('./GetQcStatus_response.json');
const expect =require('chai').expect;
const limit =10;

 describe('Test Functions in QualityControl Manager',async()=>
 {
    
    it('Test GetQcStatus with actual API response:',async()=>
    {
        const res = await sdk.qualityControl().getAllQcStatus(limit,0);
        const actual= JSON.stringify(res);
        const expected_ =JSON.stringify(expected.Limit10);
        const status=false;
        if(actual==expected_)
        {    status=true;   }
        expect(status).to.be.equal(true);
    });

    it('Test whether GetQc by status length is equal to limit',async()=>
    {
        const res = await sdk.qualityControl().getAllQcStatus(limit,0);
        const a = await res.searchByStatus('approved');
        expect(a.length).to.be.equal(limit);
    });
    
    it('Test GetQcStatus for all SellerSKU with API response:  ',async()=>{
        const res = await sdk.qualityControl().getAllQcStatus();
        const actual= JSON.stringify(res);
        const expected_ =JSON.stringify(expected.All);
        const status=false;
        if(actual==expected_)
        {    status=true;   }
      
        expect(status).to.be.equal(true); 
    });

    it('Test Response for particular Seller SKU:',async()=>
    {
        const res = await (await sdk.qualityControl().getAllQcStatus());
        
        const a =res.findBySellerSku('386286867');
       expect(a.getSellerSku()).to.be.equal('386286867');
    });
    
    it('Test Add new Quality control:',async()=>
    {
      
    });
    
    it('Test getQcStatusBySkuSellerList :',async()=>
    {
        const limitForQc=5;
        const skuSellerList = ['365736473676','743787774','332387483','9876545678','367436746376'];
        const list = await sdk.qualityControl().getQcStatusBySkuSellerList(skuSellerList,limitForQc,0);
        expect(list.all().length).to.be.equal(limitForQc);      
   
    });

});

