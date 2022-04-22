
    const {Configuration,SellerCenterSdk,GlobalProducts,GlobalProduct} = require('gsc-typescript-sdk');
    const env =require('./env.json');
    
    const conf =new Configuration(
        env.Env_Accesskey,
         env.Env_UserID,
         env.Env_Endpoints,
         env.Env_version,
         env.Env_source
         );
         const sdk =new SellerCenterSdk(conf);

      
         
module.exports= {sdk};