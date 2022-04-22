const res = require('./Brand_Manager');
const expect =require('chai').expect;
describe('Test on Brand Manager:',function()
{
    it('Testcase : Assert GetBrands->SDK &API responses', function ()
    {
      expect(res).to.be.true;
    }) ;
    it('Test should throw error ',function(){

    })
});
