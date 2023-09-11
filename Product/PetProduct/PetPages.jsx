import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';


const pet = [
    // your list of products
    {
        id: 1,
        name: ' Pug Puppy Black Color',
        price: 5000,
         description: '  Black muzzles, forehead wrinkled, with a curvaceous tail. Not to miss the punched nose. The amusing face give a hilarious expression on one face',
        image: 'https://plus.unsplash.com/premium_photo-1664357542080-2c488ab5e7ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBwdWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      
     },  
     {
        id: 2,
        name: 'German Shepherd',
        price: 18000,
         description: 'The German Shepherd, also known in the UK as an Alsatian, wegith 40kg',
        image: 'https://images.unsplash.com/photo-1601275283500-ebbe72dc328e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdlcm1hbiUyMHNoZXBoZXJkJTIwZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'              ,
      },

      {
        id: 3,
        name: 'Labrador dog',
        price: 8000,
         description:'Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog',
        image: 'https://img.freepik.com/free-photo/dog-labrador-retriever-lying-grass-chews-stick_8353-6451.jpg?size=626&ext=jpg&ga=GA1.1.572665170.1692334040&semt=ais',
      },
      
      {
        id: 4,
        name: 'Ragdoll cat',
        price: 18500,
        description:'Ragdolls are best suited for homes where they are not alone during the day and there is someone who can spend most of the day with them',
        image: 'https://images.unsplash.com/photo-1566765790386-c43812572bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJhZ2RvbGwlMjBDYXQlMjBpbiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
      
      {
        id: 5,
        name: ' Indian Billi ',
        price: 2500 ,
        description:'Commonly known as Mumbai Cats, these cats share their appearance with Black Panther. These are those cats that have a skill for learning ideas and tricks.',
        image: 'https://images.unsplash.com/photo-1600780878525-b355999f5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwY2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      
      {
        id: 6,
        name: 'New zealand white rabbit',
        price: 500,
        description:' New Zealand rabbits have a broad, muscular, and deep body of medium length, with well-rounded haunches',
        image: 'https://i.pinimg.com/236x/2a/8a/70/2a8a70ddb15e4e904b06b616db9b6967.jpg',
      },
      
      {
        id: 7,
        name: ' Indian Pariah Dog',
        price: 999,
        description:'The most primitive and ancient breed of dog known to us that belongs to India is this Indian Pariah. A relative of Dingo',
        image: 'https://i.pinimg.com/236x/97/bd/90/97bd90fca0cf4223e0028b029d81759e.jpg',
      },
      
      {
        id: 8,
        name: 'Mudhol Hound',
        price: 1920,
        description:'t is an Indian dog breed that is also known by multiple names such as Caravan hound, Maratha Hound, Kathewar Dog, Pashmi Hound',
        image: 'https://i.pinimg.com/564x/7e/ae/49/7eae497d138a9e24d4e8cf7768ebd813.jpg',
      },
      
      {
        id: 9,
        name: 'Bengal Cat',
        price: 15000,
        description:'The Bengal cat is a breed of domestic cat that was created by breeding an Asian leopard ',
        image: 'https://images.unsplash.com/photo-1603277160434-df7471138363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZ2FsJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 10,
        name: 'Canary Bird',
        price: 4999,
        description:'The original wild canary is a bright yellow bird with gray-black streaking on the back',
        image:'https://t4.ftcdn.net/jpg/00/04/21/69/240_F_4216976_D34QuHsLQkWTKogtWJpWuz78hpW9aJfd.jpg',
      },

      {
        id: 11,
        name: 'Fish Pot',
        price: 750,
        description:'',
        image: 'https://rukminim2.flixcart.com/image/416/416/kkfrjww0/fish-bowl/l/j/t/fb2-farefaxx-original-imafz736atuczvjf.jpeg?q=70',
      },
      {
        id: 12,
        name: ' Indian Pariah dog',
        price: 2000,
        description:'',
        image: 'https://i.pinimg.com/236x/e7/67/e5/e767e5d4f9902a29b18b7045683e2558.jpg',
      },
      {
        id: 13,
        name: 'Somali cat',
        price: 9999,
        description:'',
        image: 'https://img.freepik.com/premium-photo/cat-with-green-eyes-park_664748-393.jpg?size=626&ext=jpg&ga=GA1.1.572665170.1692334040&semt=ais',
      },
      {
        id: 14,
        name: 'Combai Dog',
        price: 15000,
        description:'', 
        image: 'https://i.pinimg.com/736x/cc/96/39/cc96398c3bc55d7160baf7abf5932508--farm-houses-black-mask.jpg',
      },
      {
        id: 15,
        name: 'Rampur Greyhound',
        price: 10000,
        description:'',
        image: 'https://static.theprint.in/wp-content/uploads/2020/08/Mudhol-1024x576.jpg?compress=true',
      },
      {
        id: 16,
        name: 'Siamese cat',
        price: 19000,
        description:'',
        image: 'https://media.istockphoto.com/id/967329466/photo/siamese-cat-on-a-gray-background-saying-hello.jpg?s=612x612&w=0&k=20&c=Haop7fnIhYaLqSjfMPqrdqwehTW5-EbhRXmWnBDiHCE= ',
      },
  ];

  function PetPages(){
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleProductClick = (pet) => {
      setSelectedProduct(pet);
      
    };
  
    const handleCloseProductDetails = () => {
      setSelectedProduct(null);
      localStorage.setItem("dogInfo",pet);
    };

    return (
        <div className="product-page" >
          <h1><b> Pets </b></h1>
          <div className="product-list">
            {pet.map((pet, index) => (
              <ProductCard
                key={index}
                product={pet}
                onClick={() => handleProductClick(pet)}
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
    export default PetPages;