const {sdk} =require('../conf');
const expect = require('chai').expect;
const {productCreateTest,productUpdateTest,productAddImage} = require('./product');

describe('Test PRoduct Manager',async()=>
{
    it('Test: POST request->ProductCreate',async()=>
    {
      const pp = productCreateTest();
      const response =await sdk.products().productCreate(pp);
      
      console.log(response);
    }); 
 
   /*   it('Test: POST request->PRoduct Update',async()=>
    {
      const up = productUpdateTest();
      const response =await sdk.products().productUpdate(up);
      console.log(response);
    });
    it('Test: POST request->PRoduct Add Image',async()=>
    {
      const img = productAddImage();
      //const images = [new Image('https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt7631768f3db5ff02/60cb425bae0d50495b4f746e/mc1-nike-170621-dk-vb.jpg?auto=webp&disable=upscale&quality=70&width=1280','height=1280')];
      const response =await sdk.products().addImage(img);
      console.log(response);
    });   */
});