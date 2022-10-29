const foods = [
  {
    id: 1,
    category: "food",
    name: "Pedigree PRO, 20kg Pack",
    price: 5669,
    brand:"Pedigree",
    size: null,
    rating: 80,
    description: "Item details",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreePROExpertNutritionLargeBreed_3-18Months_DryPuppyFood-20kg_510x@2x.jpg?v=1636440824",
      images_array: [
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreePROExpertNutritionLargeBreed_3-18Months_DryPuppyFood-20kg_510x@2x.jpg?v=1636440824",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/616gtyQm6ML._SL1000__1_510x@2x.jpg?v=1639554874",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/61NVTp52LQL._SL1000__1_510x@2x.jpg?v=1639554874",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/61zK_Md1r-L._SL1000__1_510x@2x.jpg?v=1639554874"
    ],
  },
  {
    id: 2,
    category: "food",
    name: "Pedigree Chicken Chunks in Gravy Wet Puppy Food - 70 g packs",
    price: 1530,
    brand:"Pedigree",
    size: null,
    rating: 90,
    description: "Item details",
    image: "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreeChickenChunksinGravyWetPuppyFood-70g_18335d4c-880f-4999-bc28-bdf23c352d6b_510x@2x.jpg?v=1651733238",
    images_array: [
   "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreeChickenChunksinGravyWetPuppyFood-70g_18335d4c-880f-4999-bc28-bdf23c352d6b_510x@2x.jpg?v=1651733238",
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/61eb4mcn_YL._SL1000_7513f979-01a3-4846-be89-2023233f4cee_510x@2x.jpg?v=1651733238",
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/61UbXauHkoL._SL1500_2fab36a8-23a2-4a2b-9981-1dfda87d7626_510x@2x.jpg?v=1656508689",
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/61QS3IJGluL._SL1000_1220dbff-aea0-4752-b005-3ebc6e1a4c65_510x@2x.jpg?v=1656508689"
    ],
  },
  {
    id: 3,
    category: "food",
    name: "Royal Canin Shih Tzu Adult Dry Dog Food 1.5 Kg",
    price: 1503,
    brand:"Royal Canin",
    rating: 60,
    size: null,
    description: "Item details",
    image: "https://m.media-amazon.com/images/I/71CbFOjA67L._SY879_.jpg",   
     images_array: [
   "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/RoyalCaninShihTzuAdultDryDogFood_510x@2x.jpg?v=1637582451",
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/81UK3C6QY4L._SL1500_510x@2x.jpg?v=1637640883",
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/81bDN41LG5L._SL1500_510x@2x.jpg?v=1656326138",

    ],
  },
  
  {
    id: 4,
    category: "food",
    name: "Kennel Kitchen Adult & Puppy Dog Food, Chicken and Lamb Chunks in Gravy, 12 Pouches",
    price: 391,
    brand:"Kennel",
    size: null,
    rating: 90,
    description: "Item details",
    image: "https://m.media-amazon.com/images/I/51h57u0+0jL._SY300_SX300_.jpg",
    images_array: [
      "https://m.media-amazon.com/images/I/51h57u0+0jL._SY300_SX300_.jpg",
      "https://m.media-amazon.com/images/I/81+vu395j1L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61FKjRPP4LL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61KpgeRJxgL._SX679_.jpg"
    ],
  },
  {
    id: 5,
    category: "food",
    name: "Drools Chicken and Egg Adult Dry Dog Food, 10kg",
    price: 1685,
    brand:"Drools",
    size: null,
    rating: 90,
    description: "Item details",
    image: "https://m.media-amazon.com/images/I/61p0tyktUHL._SX679_.jpg",
    images_array: [
   "https://m.media-amazon.com/images/I/61p0tyktUHL._SX679_.jpg",
   "https://m.media-amazon.com/images/I/71MiVh12YFL._SX679_.jpg",
   "https://m.media-amazon.com/images/I/71vsjZP+mcL._SX679_.jpg",
   "https://m.media-amazon.com/images/I/71+GM6g7DNL._SX679_.jpg",
    ],
  },
  {
    id: 6,
    category: "food",
    name: "Pedigree Tasty Minis Cubes Puppy Dog Treat, Chicken Flavour - 125 g Pack & Biscrok Biscuits Dog Treat (Above 4 Months) Chicken Flavour, 500g Pack",
    price: 330,
    brand:"Pedigree",
    size: null,
    rating: 90,
    description: "Item details",
    image:
      "https://m.media-amazon.com/images/I/7129Ex9tUjL._SX679_.jpg",
      images_array: [
      "https://m.media-amazon.com/images/I/7129Ex9tUjL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61xbL41m+jL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61OSfq9QD+L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81VC2Po6YNL._SX679_.jpg",
    ],
  },
  {
    id: 7,
    category: "food",
    name: "Drools Trumppetz Focus Adult Super Dog Food, 12kg",
    price: 4099,
    brand:"Drools",
    size: null,
    rating: 90,
    description: "Item details",
    image: "https://m.media-amazon.com/images/I/41WYl1Dt8ML.jpg",
    images_array: [
     "https://m.media-amazon.com/images/I/41WYl1Dt8ML.jpg",
      "https://m.media-amazon.com/images/I/81uRFdM8RhL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/71qXZCESBiS._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71yOPGZJciS._SX679_.jpg"
    ],
  },
  {
    id: 8,
    category: "food",
    name: "Pedigree Dentastix Oral Care Treats for Small Breed Adult Dogs (5-10 kg), 28 Sticks, 440g Monthly Pack",
    price: 456,
    brand:"Pedigree",
    size: null,
    rating: 90,
    description: "Item details",
    image: "https://m.media-amazon.com/images/I/61teH4prV5L._SX679_.jpg",
    images_array: [
   "https://m.media-amazon.com/images/I/61teH4prV5L._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61oqfXrlDQL._SX679_.jpg",
     "https://m.media-amazon.com/images/I/61jmurfTq-L._SX679_.jpg",
     "https://m.media-amazon.com/images/I/6148oY-h1UL._SX679_.jpg"

    ],
  },

];

export { foods };
