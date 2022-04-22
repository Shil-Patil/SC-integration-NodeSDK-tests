const {sdk} = require('./conf.js.js.js');
const expected =require('./CATtree_Response.json');
const util = require('util');

(async()=>
{
 // const attribute = await sdk.categories().getCategoryAttributes(2);

   //-----GET_CATEGORY_TREE
  const category = await sdk.categories().getCategoryTree();
  category.forEach(element => 
    {
       console.log(element.getChildren());
    });

 const var1 = JSON.stringify(category,null,4);
 const expected_ =JSON.stringify(expected,null,4);

  if(var1.localeCompare(expected_))
   {
        console.log('Test passed. SDK response is as per API response...');
   }
  else  console.log('SDK response not matching');
 //console.log(util.inspect(category, {showHidden: false, depth: null, colors: true}))
  
 //-----GET_CATEGORY_ATTRIBUTE
const Attribute = await sdk.categories().getCategoryAttributes(2);

 //-----GET_CATEGORY_ATTRIBUTES BY SET
 const set = await sdk.categories().getCategoriesByAttributesSet([1,2,3]);

})()