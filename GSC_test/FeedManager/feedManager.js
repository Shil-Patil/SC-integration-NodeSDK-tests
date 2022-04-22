//import {expected} from "./FeedList_Response.json";

/* import {sdk} from "../conf.js"

import {expect} from "chai"; */

const expected = require('./FeedList_Response.json');

const {sdk} =require('../conf.js');

const  expect  = require('chai').expect;

describe('Assert SDK response and expected API response',async()=>
 {
    it('Testcase: GetFeedList->SDK with API response',async()=> {

      const feedList = sdk.feeds().getFeedList();
 
      const feed = expected.SuccessResponse.Body.Feed;
  
      if(JSON.stringify(feedList).localeCompare(JSON.stringify(feed))) expect(true).to.be.equal(true);
      
      else expect(false).to.be.equal(false);
 
    });

   it('Testcase: GetFeedList length should be as we getting from API',async()=> {

      const feedArray = new Array();

      const feed =expected.SuccessResponse.Body.Feed;
      
      feedArray=feed.Feed;
      
      const len =(await feedList).all().length();
      
      console.log(typeof(len) ,typeof(feedArray.length()) )
      
      expect(len).to.be.equal(feedArray);
  
    });
  
   it('Testcase: GetFeedStatusById->SDK with API response',async()=>  {
     
      const Status = await sdk.feeds().getFeedStatusById('f4a8ce43-b090-484a-ac4d-b43de11d5b3a');  
     
      const sta2 = await sdk.feeds().getFeedStatusById('f4a8ce43-b090-484a-ac4d-b43de11d5b3a');
     
   });
 
  /*  const Status = await sdk.feeds().getFeedStatusById('f4a8ce43-b090-484a-ac4d-b43de11d5b3a');
  const offset = await sdk.feeds().getFeedOffsetList(0,10000);
  */ 
  //console.log(feedList.all());
  //console.log("Number :",Status.getTotalRecords());
    
});
