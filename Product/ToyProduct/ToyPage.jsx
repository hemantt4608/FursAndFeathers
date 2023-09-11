import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

const toy = [
    // your list of products
    {
        id: 1,
        name: '  Rubber  Spiked Ball for Dogs & Puppies',
        price: 20,
        description: 'Comes in a bright & colorful red color, the PetSutra Rubber Stud Spiked Ball might soon become your dog’s favorite toy. Made from safe, long-lasting natural rubber, the tough toy studded ball and it is an ideal toy for all breeds of dog. How will it help my dog? PetSutra Rubber Stud Spiked Ball will not only help in satiating your dog’s chewing needs, it will also help take care of your dog’s teeth, by preventing tartar & plaque buildup, while they are',
        image: 'https://rukminim2.flixcart.com/image/416/416/jvzkb680/pet-toy/c/u/e/studrubberspikedball-3inch-petsutra-original-imafgr99fckszfn6.jpeg?q=70',
      
     },  
     {
        id: 2,
        name: 'Rope Toys (for tug-of-war and chewing)',
        price: 15.99,
        description: 'PETZLUV Dog Chew with natural cotton and rubber is safe than hard nylon when teething. High quality cotton puppy teething toys that tightly woven twist is wear-resistant, help to massage the gums give puppies a comfortable chews and stress relief.',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-toy/h/4/e/1-dog-toys-for-medium-dogs-and-puppies-27-04-petzluv-original-imagrwzd8y3f9fam.jpeg?q=70',
      },

      {
        id: 3,
        name: 'Feather Wands (to mimic hunting instincts)',
        price: 320,
        description:'Amazing retractable wand! - Length of pole: 95cm, string: 35cm. Fishing rod can be telescoped to 35cm when not in use, which is perfect for very convenient storage and portability. Surprise Exercise! - Fun feather cat toy working as a teaser provides an interactive educational game to strengthen your genuine relationship and trust. You can enjoy such merry and special moments with just a slight flick of the wrist. What you will get! - Our refill feather comes in 1 on a stick to satisfy your requirements',
        image: 'https://m.media-amazon.com/images/I/516VZueX22L._SX522_.jpg',
      },

      {
        id: 4,
        name: 'Catch The Mouse & Ball Cat Toy',
        price: 99,
        description: 'Whether house cat or Bengal tiger: every feline has a deep hunting instinct that is just waiting to be released. And they will finally be able to do so thanks to this cat carousel. Inside the track there is a ball with a bell inside that encourages playtime.',
        image: 'https://m.media-amazon.com/images/I/71EksVtWTdL._SL1500_.jpg',
      },
      {
        id: 5,
        name: ' Pet Products Bird',
        price: 399,
        description: 'Crafted from durable materials, the Jainsons Pet Products Bird Cage Toys provide ample variety and stimulation for your feathered friend. ',
        image: 'https://rukminim2.flixcart.com/image/416/416/kp036vk0/pet-toy/o/i/n/birds-toy-combo-of-5-bird-swing-chew-toy-jainsons-pet-products-original-imag3c2ht8dtggyf.jpeg?q=70',
      },

      {
        id: 6,
        name: 'Toy Balls Pet Cat Playing',
        price: 199,
        description: 'This is an indestructible dog ball for Dental Cleaning and rubber chews for the benefit of your dog, puppy training, teeth cleaning and a dog puzzle',
        image: 'https://m.media-amazon.com/images/I/41BYmwdDN1L.jpg',
      },
      {
        id: 7,
        name: 'WAGGY TAILS Dog Rope Toy',
        price: 199,
        description: 'Are you looking for a new high-quality rope dog toys suitable for both indoor & outdoor games with dog? Maybe you want to train your puppy to stop chewing on furniture or shoe',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/pet-toy/a/k/f/5-wt2020online20201032-waggy-tails-original-imagku2qm2hjdchd.jpeg?q=70',
      },

      {
        id: 8,
        name: 'Pet Products Bird toy',
        price: 499,
        description: 'Crafted from durable materials, the Jainsons Pet Products Bird Cage Toys provide ample variety and stimulation for your feathered friend. ',
        image: 'https://rukminim2.flixcart.com/image/416/416/kp036vk0/pet-toy/o/i/n/birds-toy-combo-of-5-bird-swing-chew-toy-jainsons-pet-products-original-imag3c2ht8dtggyf.jpeg?q=70',
      },
  ];


  function ToyPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleProductClick = (toy) => {
      setSelectedProduct(toy);
    };
  
    const handleCloseProductDetails = () => {
      setSelectedProduct(null);
    };
  
    return (
      <div className="product-page">
        <h1><b>Pet Toys </b></h1>
        <div className="product-list">
          {toy.map((toy, index) => (
            <ProductCard
              key={index}
              product={toy}
              onClick={() => handleProductClick(toy)}
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
  } export default ToyPage;