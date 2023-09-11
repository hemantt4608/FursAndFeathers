import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails'; // Import your details component

const Clothes = [
    {
    id: 1,
    name: 'PETANGEL Frock, Dress for Dog, Cat  (Pink)',
    price: 898,
    description:'Size: XL, Chest: 48cm, Back Length: 36cm, Pet Weight: 4.5kg - 6.5kg. such as Yorkie, Toy Poodle, Maltese, Pomeranian, Shih Tzu, Bichon and so on. ATTENTION: please do consider the size of your pet before purchasing, this dog dress is not suitable for large dogs',
    image: 'https://rukminim2.flixcart.com/image/612/612/kpk3csw0/pet-apparel/o/2/0/l-kf07dl10pk-kutkut-original-imag3rsrn7atnt32.jpeg?q=70',
  },
  {
    id: 2,
    name: 'VAH Bandana',
    price: 249,
    description:'STYLISH DESIGN This item is newly developed by our designer, purpose for chilly winter wearing to protect your pets from low temperature, while the outside is very fashionable, esp.',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-apparel/z/k/r/l-tdt001-l-trender-original-imagmmzvghkf8yhx.jpeg?q=70',
  },
  {
    id: 3,
    name: 'Winter Jacket for Dog, Cat',
    price: 399,
    description:'These clothes are the perfect size for all Large medium and small dogs. such as golden retriever, Labrador, husky, Teddy, schnauzer, Samoyed',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-apparel/4/n/q/m-premium-dog-jacket-medium-houseoffurry-original-imaghtyg6psmxc47.jpeg?q=70',
  },
  {
    id: 4,
    name: 'RUSE Tank for Dog',
    price: 999,
    description:'About the design:"Designed keeping in mind the desire for graphic expression for your dog',
    image: 'https://rukminim2.flixcart.com/image/416/416/jirqoi80/pet-apparel/d/d/g/lcs1700135dt-m-ruse-original-imaf6hx7zyhfn2m4.jpeg?q=70',
  },
  {
    id: 5,
    name: 'Rabbit Vest Harness',
    price: 999,
    description:'Description:Made of omfortable and breathable cotton, soft handle.Adjustable neck circumference, can be used with the attached traction rope.',
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-collar-harness/f/2/q/medium-rabbit-vest-harness-leash-set-clothes-soft-pet-costume-original-imaghbsnscsst8va.jpeg?q=70',
  },
  {
    id: 6,
    name: ' Frock for Dog, Cat',
    price: 999,
    description:'Perfect Fit: Size L, Adjustable Bust: 45cm, Back Length: 35cm.',
    image: 'https://rukminim2.flixcart.com/image/416/416/l01blow0/pet-apparel/a/v/0/l-zkf122kf125ly12m-kutkut-original-imagbwvz7cjggjgy.jpeg?q=70',
  },
  {
    id: 7,
    name: ' Socks for Dog, Cat ',
    price: 459,
    description:'Fit for most medium - Large dogs. PLEASE FOLLOW THE SIZE CHART CAREFULLY AND PLACE YOUR ORDER AS PER ACTUAL SIZE OF YOUR PET TO AVOID ANY EXCHANGE AND',
    image: 'https://rukminim2.flixcart.com/image/416/416/kyj0vbk0/pet-apparel/j/k/f/l-pa-ksk61ly14bkw-petangel-original-imagaqqprgx34yxr.jpeg?q=70',
  },
  {
    id: 8,
    name: ' Bandana for Dog, Cat ',
    price: 459,
    description:' Made of polyester bandana and nylon collar, decorated with a silk bow, soft and lightweight, washable and easy to clean and care for, and not easy to fade',
    image:' https://rukminim2.flixcart.com/image/416/416/kupuljk0/pet-apparel/o/o/a/m-kbd12-petangel-original-imag7s3gpazwxbpu.jpeg?q=70',
  },
  ];

function ClothesPage(){
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleProductClick = (Clothes) => {
      setSelectedProduct(Clothes);
    };
  
    const handleCloseProductDetails = () => {
      setSelectedProduct(null);
    };
  
    return (
      <div className="product-page">
        <div>
        <h1><b>Pet Clothes</b></h1>
        </div>
        <div className="product-list">
          {Clothes.map((Clothes, index) => (
            <ProductCard
              key={index}
              product={Clothes}
              onClick={() => handleProductClick(Clothes)}
            />
            
          ))}
        </div>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={handleCloseProductDetails}
          />
        )}
      </div>
    );
}
export default ClothesPage