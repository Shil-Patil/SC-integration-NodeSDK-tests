
const {sdk} = require('../conf.js');
const expected = require('./BrandM_Response.json');

(async()=>
{
    
const brands =  sdk.brands().getBrands();

//Stringify to compare
const b=JSON.stringify(brands);
const expected_ = JSON.stringify(expected.SuccessResponse.Body.Brands.Brand);
 
//const expected_ = JSON.parse(expected.SuccessResponse.Body.Brands.Brand);
//Compare whole responses.
let res;
if(b.localeCompare(expected_))
 {
     console.log('Test passed. SDK response is as per API response...');
     res=true;
 }
else {console.log('SDK response not matching'); res=false;}
//(await brands).findById(5118); 
module.exports =res;
})()