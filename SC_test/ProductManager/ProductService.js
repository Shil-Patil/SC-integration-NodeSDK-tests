const {sdk,GlobalProducts,GlobalProduct} =require('../conf');
const expect = require('chai').expect;
const apiRes = require('./ProdRes.json');
//const GlobalProducts =require('');

describe('Test Product Services..',async()=>
{
    const limit =10;
     it('Test SDK response for 10 products with API:',async()=>
    {
        const product = await sdk.products().getAllProducts(limit,0);
        const prodStr = JSON.stringify(product.all());  
        const ApiStr = JSON.stringify(apiRes)
        
    });
    it('Test whether valid  Remove product ',async()=>
    {
        const products = new GlobalProducts()
        const product1 = GlobalProduct.fromSku("4123123")
        products.add(product1)

      const res =await sdk.products().productRemove(products);
       console.log(res.requestId);
     });

   
});