const { expect } = require('chai');
const {sdk} = require('../conf');
const expected = require('./API_resp.json');
describe('Test Webhooks Manager Key Features: ',async()=>
{ 
      
    const Webhook = await sdk.webhook();
    const web_Id = Webhook.createWebhook('http://example.com/callback_6');
    
     it('Test1: We should get webhook id on successful webhook creation',function()
    {   
       // expect(web_Id).to.be.instanceOf(String);
    
        //expect(web_Id.length()).to.be.equal(36);
    
       // console.log(web_Id);
    });

    it('Test2:We should get webhook entities list for valid webhookId',async()=>
    {   

        const res = Webhook.getWebhookByIds(web_Id);

        for (const i of (await res).entries()) {
            console.log(i.values());
        }
       // expect(res).to.be.instanceOf([]);
    }); 
 
     it('Test3:On delete function Webhook should be deleted.',async()=> 
    {
         Webhook.deleteWebhook('b8a0653b-419c-4317-8b6f-53a3e50ec297');
         
         
    }); 
});
