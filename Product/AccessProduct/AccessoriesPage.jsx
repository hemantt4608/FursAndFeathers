import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails'; // Import your details component

const Access = [
    {
        id: 1,
        name: 'Stainless Steel Dog Bowl ',
        price: 299,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/71g03h7tp9L._SL1500_.jpg',
      
     },  
      
     {
        id: 2,
        name: 'Harness for Dogs',
        price: 255,
        description: '  ',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-collar-harness/y/n/q/medium-red-harness1-globe-of-pets-original-imagnfza9hazcdzh.jpeg?q=70',
      
     }, 

     {
        id: 3,
        name: ' Dog Water Bottle',
        price: 199,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/71EptQ9wcGL._SL1500_.jpg',
      
     }, 
     {
        id: 4,
        name: 'Dog Dental Hygiene Kit ',
        price: 399,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/61PBcb2+R7S._SL1500_.jpg',
      
     }, 
     {
        id: 5,
        name: ' Neck Strap for Cat',
        price:199,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/51pybFOifvL._SL1024_.jpg',
      
     }, 
     {
        id: 6,
        name: 'Donut pet bed  ',
        price: 500,
        description: '  ',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-bed/s/b/l/m-the-round-donut-pet-bed-is-perfect-for-indoor-cats-and-puppies-original-imagmj7n3jqwmgze.jpeg?q=70',
      
     }, 

     {
        id: 7,
        name: ' House of Furry Dog',
        price: 1000,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/41-HeD1rJQL.jpg',
      
     },

     {
        id: 8,
        name: 'Rabbit Feeder',
        price: 399,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/51njwHBy1UL.jpg',
      
     },
     {
        id: 9,
        name: 'Pet Hair Remover ',
        price: 350,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/61a4mU+8gJL._SL1500_.jpg',
      
     },{
        id: 10,
        name: ' Glossy Stones for  Aquarium',
        price: 100,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/71c7hwchOFL._SL1500_.jpg',
      
     },

     {
        id: 11,
        name: ' Dog Poop Bags',
        price: 150,
        description: '  ',
        image: 'https://m.media-amazon.com/images/I/41E5YYWBh4L.jpg',
      
     },

     {
        id: 12,
        name: '  hanging nest for bird',
        price: 200,
        description: '  ',
        image: 'https://rukminim2.flixcart.com/image/416/416/l4rd0280/bird-house/d/a/x/hanging-nest-pack-of-2-liveonce-5-original-imagfhatczkd8yzy.jpeg?q=70',
      
     },

];

function AccessoriesPage(){
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleProductClick = (Access) => {
      setSelectedProduct(Access);
    };
  
    const handleCloseProductDetails = () => {
      setSelectedProduct(null);
    };
  
    return (
      <div className="product-page">
        <div>
        <h1><b>Pet Accessories</b></h1>
        </div>
        <div className="product-list">
          {Access.map((Access, index) => (
            <ProductCard
              key={index}
              product={Access}
              onClick={() => handleProductClick(Access)}
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
export default AccessoriesPage