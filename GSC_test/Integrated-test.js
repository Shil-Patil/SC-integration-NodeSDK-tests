const {sdk} = require('./conf');

class GSC_Managers
{
  async brands() { return await sdk.brands().getBrands(); }

  code() {
      return "Hello ";
  }
  
}

console.log(code());
module.exports = {GSC_Managers};

