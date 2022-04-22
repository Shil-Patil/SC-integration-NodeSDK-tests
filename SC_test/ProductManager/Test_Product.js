const {sdk} =require('../conf');
const expect = require('chai').expect;
const {productCreateTest,productUpdateTest,productAddImage} = require('./product_CL.js');

describe('Test PRoduct Manager',async()=>
{
 /*   it('Test: POST request->ProductCreate',async()=>
    {
     const pp = productCreateTest();
     const response =await sdk.products().productCreate(pp);
      
    });   */
 /* 
    it('Test: POST request->PRoduct Update',async()=>
    {
      const up = productUpdateTest();
     const response =await sdk.products().productUpdate(up);
      
    }); */
    it('Test: POST request->PRoduct Add Image',async()=>
    {
      const img = productAddImage();
      const response =await sdk.products().addImage(img);
      
      console.log(response.requestId);
      // console.log(response);
    });   
});