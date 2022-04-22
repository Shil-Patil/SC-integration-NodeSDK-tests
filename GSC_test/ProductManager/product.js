
const{Products,ProductData,GlobalProduct,BusinessUnit,BusinessUnits,Category,Brand,Image} =require('gsc-typescript-sdk');
const {sdk} =require('../conf');


const sellerSku = 'Lea-test-sdk12'
const productId = '12233361913'
const categoryId = 1240
const brandName = '2K GAMES'
const opertorCode = 'facl'
const getBaseProductData = () => {
    const productData = new ProductData('Nuevo', 3, 0, 5, 4);
    productData.add('Model', '123');
    productData.add('ConditionTypeNote', 'Es nuevo, lo juro');
    productData.add('TipoDeConsola', 'Nintendo nes');
    productData.add('ModoDeJuego', 'Multijugador'); 
    productData.add('Esrb', 'E (todas las edades)');
    return productData;
}
const productCreateTest=()=> {
    const specialFromDate =new Date('2022-04-05')
    const specialToDate =new Date('2022-04-30')
    
    const productData = getBaseProductData()
    const businessUnit = new BusinessUnit(opertorCode, 6999.00, 400, 'active', 0,'BusinessUnit_ABC',2000,specialFromDate,specialToDate)
    const businessUnits = new BusinessUnits()
    businessUnits.add(businessUnit)
    const product = GlobalProduct.fromBasicData(sellerSku, 'Global Product to test SDK1', 
        Category.fromId(categoryId), 'This is a product description.', Brand.fromName(brandName),
        businessUnits,
        productId,
        productData,
        'IVA 19%',
    )
    const products= new Products()
    products.add(product)
    return products
}

//console.log(prod_res);


const productUpdateTest = () => {
   const globalProduct = GlobalProduct.fromSku(sellerSku)
    const businessUnit = new BusinessUnit(opertorCode, 766.00, 60, 'active', 0)
    const businessUnits = new BusinessUnits()
    businessUnits.add(businessUnit)
    globalProduct.setBusinessUnits(businessUnits)
    const products = new GlobalProducts()
    globalProduct.setColor('Black')
    globalProduct.setColorBasico('Blue')
    globalProduct.setTalla('L')
    products.add(globalProduct)
   // console.log(globalProduct.all())
    return products
}
const productAddImage = () => {
     const images = [
        {
            sku: sellerSku,
            images: [new Image('https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt7631768f3db5ff02/60cb425bae0d50495b4f746e/mc1-nike-170621-dk-vb.jpg')]
        }
    ];
  
    
    return images
}

module.exports ={productCreateTest,productUpdateTest,productAddImage};