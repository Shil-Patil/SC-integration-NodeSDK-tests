const {sdk} =require('../conf.js');

describe('',async()=>
{
  const doc =await sdk.documents().getDocument('shipping',[176343]);
  //console.log(typeof(doc));
  
    
})
