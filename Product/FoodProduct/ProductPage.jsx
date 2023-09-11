import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails'; // Import your details component


  const food = [
    // your list of products
    {
      id: 1,
      name: 'PEDIGREE Gravy Chunks',
      price: 675,
      description: 'Your cute little pup deserves more than simple home cooked food. Serve it this mouth watering and healthy meal of chicken and rice mixed with gravy and watch how it cleans its plate in no time.',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/b/6/b/-original-imagkggabpnvu4fj.jpeg?q=70',
    },
    {
      id: 2,
      name: 'PEDIGREE PRO Puppy Large Breed,Young Dog Food',
      price: 1172,
      description: 'For the healthy growth of muscles and bones of your large breed puppy, feed him/her the this Pedigree dry dog food. Large breed puppies grow fast.',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/l/m/h/-original-imagzernrvmma8mr.jpeg?q=70',
    },
    {
      id: 3,
      name: 'Wiggles EveryDawg Puppy Dry Food, 100g, 2-21 months-German Shepherd',
      price: 39,
      description: 'EveryDawg is the right nutrition for mother dogs and newborn puppies between 3 to 12 weeks of age. It has Chicken, Rice and Vegetables as the main ingredient.',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/u/n/x/0-1-dog-1-evry-puppy-100g-wiggles-original-imagka45sky6k2uu.jpeg?q=70',
      
    },
    {
      id: 4 ,
      name:"Active (Buy 1 Get 1 Free) Adult Chicken and Vegetables Vegetable 2.4 kg (2x1.2 kg) Dry Adult Dog Food",
      price: 331,
      description: 'Active Adult Dry Dog Food is a complete and balanced nutrient-rich food, which enhances the physical performance of your pet. It is enriched with essential ingredients along with vitamins and minerals keeping your pet active and agile.',
      image: 'https://rukminim2.flixcart.com/image/612/612/ku79vgw0/pet-food/w/w/u/dog-932151-active-original-imag7dhy8h7thzz4.jpeg?q=70',
    },
    {
      id:5,
      name: "Drools and Egg, Chicken 4.2 kg Dry Adult Dog Food",
      price: 719,
      description:"Made with real chicken, this Drools Dry Dog Food is a palatable meal that offers your pet a host of benefits. They include strong bones, a healthy digestive system, a shiny coat of fur, and healthy skin.",
      image:"https://rukminim2.flixcart.com/image/612/612/l0jwbrk0/pet-food/m/j/r/-original-imagcbfemszfkdzv.jpeg?q=70"
    },
    {
      id:6,
      name: "Bones UP Dog Chew Chicken Stick 450 g, Sticks for Dogs, Dog Snacks, Dog Treats Chicken 0.45 kg Dry Young, Adult Dog Food",
      price: 122,
      description:"BonesUp Dog Munchies are packed with scrumptious flavor that dogs just can't resist. Made with natural ingredients. The longer-lasting, highly digestible formula satisfies dogs who love to chew and do not contain any added salt, sugar and artificial preservatives.",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/r/y/g/dog-cm1450g-bonesup-original-imaghzaqzzfygf2d.jpeg?q=70"
    },
    {
      id:7,
      name: "Drools Chunks in gravy for Adult - Chicken Liver and Real Chicken 3.6 kg (24x0.15 kg) Wet Adult Dog Food",
      price: 756,
      description:"",
      image:"https://rukminim2.flixcart.com/image/416/416/ks0onm80/pet-food/0/f/e/dog-932661-drools-original-imag5zbth57qcdrz.jpeg?q=70"
    },
    {
      id:8,
      name: "Drools Focus Super Premium 12 kg Dry Adult Dog Food",
      price: 3870,
      description:"Drools Focus Super Premium Adult Dry Dog Food is an all Breed formula. A wholesome nutritional meal that ensures all the benefits from strong immunity to dental health. We provide a power packed food that your pet will love. Fortified with Vitamins, essential Amino Acids, Minerals, Antioxidants and other important ingredients Drools Focus Adult Dry Dog Food provides a complete and balanced food to your pet. After an intensive research by the experienced nutritionists and veterinarians, our ingredients undergoes a thorough test where it meets all the obligatory quality standards.",
      image:"https://rukminim2.flixcart.com/image/416/416/l0tweq80/pet-food/c/z/6/-original-imagcjfyjfmxfqp5.jpeg?q=70"
    },
    {
      id:9,
      name: "PEDIGREE Adult Chicken, Vegetable 10 kg Dry Adult Dog Food",
      price: 2031,
      description:"The Pedigree Adult Chicken and Vegetables dry dog food is loaded with many vitamins, minerals and antioxidants that are essential for your pet’s proper growth. It acts as a balanced diet to make your dog healthy from both inside and outside. It is good for your canine’s teeth, fur, bones, digestive tract and muscles. It will also boost your pet’s immunity.",
      image:"https://rukminim2.flixcart.com/image/416/416/ko7idu80/pet-food/7/a/r/dog-8906002480449-pedigree-original-imag2pt5hct4qdmc.jpeg?q=70"
    },
    {
      id:10,
      name: "HIMALAYA Healthy pet food puppy Mutton, Rice 1.2 kg Dry New Born, Young Dog Food",
      price: 364,
      description:"Himalaya Healthy Dog food is a complete and balanced food for dogs & puppies manufactured by Himalaya Healthcare, a renowned name is human as well as pet health products. While the primary ingredient in the food is chicken and rice, it is enriched with herbal and biological ingredients like papaya, black pepper, Popala, Guducchi etc. Himalaya products are well-known for their superior natural ingredients fortified with herbs and these are no different.",
      image:"https://rukminim2.flixcart.com/image/416/416/k7m8brk0/pet-food/w/n/k/1-2-dog-puppy-himalaya-original-imafptqb2zekgrpg.jpeg?q=70"
    },
    {
      id:11,
      name: "PEDIGREE Adult Meat, Rice 3 kg Dry Adult Dog Food",
      price: 729,
      description:"Featuring many nutrients, such as Omega 6, Zinc, Calcium, Phosphorous and dietary fibres essential for your dog’s proper growth, the Pedigree Adult Meat and Rice dog food will keep your pet healthy and happy. It is good for your dog’s fur, bones, teeth, digestive tract and muscles. Not only that, it also boosts your canine’s immunity.",
      image:"https://rukminim2.flixcart.com/image/416/416/l29c9e80/pet-food/e/p/h/-original-imagdnatmgnbnsrs.jpeg?q=70"
    },
    {
      id:12,
      name: "PEDIGREE Puppy Milk, Chicken 3 kg Dry New Born Dog Food",
      price: 765,
      description:"Pedigree for puppies comes with the goodness of chicken and milk to provide your little furball with a nourishing and balanced meal. It contains protein so that your puppy's muscles get stronger and so that he/she gets enough energy to run havoc in your home.",
      image:"https://rukminim2.flixcart.com/image/416/416/l29c9e80/pet-food/s/j/d/-original-imagdnapja4hgytt.jpeg?q=70"
    },
  ];

  function ProductPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleProductClick = (food) => {
      setSelectedProduct(food);
    };
  
    const handleCloseProductDetails = () => {
      setSelectedProduct(null);
    };
  
    return (
      <div className="product-page">
        <div>
        <h1><b>Pet Food Products</b></h1>
        </div>
        <div className="product-list">
          {food.map((food, index) => (
            <ProductCard
              key={index}
              product={food}
              onClick={() => handleProductClick(food)}
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
  
  export default ProductPage;