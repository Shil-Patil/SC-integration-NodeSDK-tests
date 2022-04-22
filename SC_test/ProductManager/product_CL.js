
const{Products,ProductData,Product,BusinessUnit,BusinessUnits,Category,Brand,Image} =require('gsc-typescript-sdk');
const {sdk} =require('../conf');

const sellerSku = 'RFOSFS5674'
const productId = '1201'
const categoryId = 19293
//Columbia 12404
const brandName = '2K GAMES'
const opertorCode = 'facl'
const getBaseProductData = () => {
    const productData = new ProductData('Nuevo', 3, 0, 5, 4);
    productData.add('Model', '123');
    productData.add('DeliveryTimeSupplier','13')
    productData.add('ConditionTypeNote', 'Es nuevo, lo juro');
      return productData;
}
const productCreateTest=()=> {
    const specialFromDate =new Date('2022-04-05')
    const specialToDate =new Date('2022-04-30')
    
    const productData = getBaseProductData()
   const product = Product.fromBasicData(sellerSku, 'Global Product to test SDK1', '1.5',
        Category.fromId(categoryId), 'This is a product description.', Brand.fromName(brandName),      
        3000.0,
        productId, 'IVA 19%',
        productData,null
       
    )
    const products= new Products()
    products.add(product)
    return products
}

//console.log(prod_res);


const productUpdateTest = () => {
   const product = Product.fromSku(sellerSku)
   const products = new Products()
    product.setName("Updated-'Product to test SDK1")
    product.setMainImage(new Image('https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt7631768f3db5ff02/60cb425bae0d50495b4f746e/mc1-nike-170621-dk-vb.jpg'))
   products.add(product)
   // console.log(globalProduct.all())
    return products
}
const productAddImage = () => {
     const images =
     [{
        sku: sellerSku,
        images: [new Image('https://images.contentstack.io/v3/assets/blt7c5c2f2f888a7cc3/blt7631768f3db5ff02/60cb425bae0d50495b4f746e/mc1-nike-170621-dk-vb.jpg')]
     }]
       
     
    return images
}

module.exports ={productCreateTest,productUpdateTest,productAddImage};