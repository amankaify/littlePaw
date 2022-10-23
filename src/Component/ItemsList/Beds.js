const beds = [
  {
    id: 1,
    name: "Better Than Basics Sofa Bed for Dogs - Red",
    price: 2700,
    brand:"Brand NAME",
    rating: 60,
    description: "Item Details",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Better-Than-Basics-Sofa-Bed-for-Dogs---Red_510x@2x.jpg?v=1659510306",
    images_array: [
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Better-Than-Basics-Sofa-Bed-for-Dogs---Red_510x@2x.jpg?v=1659510306",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/BetterThanBasicSofaBedforDogs-Red_510x@2x.jpg?v=1663582566",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/BetterThanBasicSofaBedforDogs-Red4_510x@2x.jpg?v=1663582566",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/BETTER_510x@2x.jpg?v=1663582566",
    ],
  },
  {
    id: 2,
    name: "KOZI PET Rectangular Shaped Oxford",
    price: 375,
    brand:"Brand NAME",
    rating: 60,
    description: "Item Details",
    image: "https://m.media-amazon.com/images/I/6124wwLIc6L._SX679_.jpg",
    images_array: [
        "https://m.media-amazon.com/images/I/6124wwLIc6L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71w3on4Ch3L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61CTrqR9ZiL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41+inR8m+TL.jpg",
    ],
  },
  {
    id: 3,
    name: "Sofa Bed For Dogs & Cats - Aqua Blue",
    price: 2799,
    brand:"RESPLOOT",
    rating: 60,
    description: "Item Details",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Resploot_-Sofa-Bed-For-Dogs-_-Cats---Aqua-Blue_510x@2x.jpg?v=1659510552",
      images_array: [
        "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Resploot_-Sofa-Bed-For-Dogs-_-Cats---Aqua-Blue_510x@2x.jpg?v=1659510552",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/IMG_9289_510x@2x.jpg?v=1663584520",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/IMG_9293_510x@2x.jpg?v=1663584520",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/LoungerBedSizeChart_fb7dd2e3-9e20-430a-9fac-0e98b0cdd820_510x@2x.jpg?v=1663584540",
    ],
  },
  {
    id: 4,
    name: "HUFT Nap Now Lounger Dog Bed (Free Cushion) - Black",
    price: 3699,
    brand:"HUFT",
    rating: 60,
    description: "Item Details",
    image:
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/HUFT-Quilted-Dog-Bed-For-Winter-With-Dog-Toy---Dark-Grey_510x@2x.jpg?v=1659511103",
      images_array: [
          "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/HUFT-Quilted-Dog-Bed-For-Winter-With-Dog-Toy---Dark-Grey_510x@2x.jpg?v=1659511103",
          "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/MG_1485_510x@2x.jpg?v=1663584192",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/MG_1501_510x@2x.jpg?v=1663584192",
      "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/MG_1502_510x@2x.jpg?v=1663584192",
    ],
  },
  {
    id: 5,
    name: "Avika Wooden Bamboo Cane Pet Bed For Dogs",
    price: 2647,
    brand:"AVIKA",
    rating: 60,
    description: "Item Details",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41tvMOZg5ML._SX300_SY300_QL70_FMwebp_.jpg",
      images_array: [
        "https://images-eu.ssl-images-amazon.com/images/I/41tvMOZg5ML._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61Po-u3p-US._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51RO3j1Q41S._SX522_.jpg",
      "https://m.media-amazon.com/images/I/416BqsEVdES.jpg",
    ],
  },
  {
    id: 6,
    name: "Little Smile Affluent Soft Ethinic Designer Bed",
    price: 1599,
    brand:"LITTLE SMILE",
    rating: 60,
    description: "Item Details",
    image:
      "https://rukminim1.flixcart.com/image/416/416/knxiavk0/pet-bed/o/b/t/m-sbrsdb010-m-slatters-be-royal-store-original-imag2g86a2updc7d.jpeg?q=70",
      images_array: [
          "https://rukminim1.flixcart.com/image/416/416/knxiavk0/pet-bed/o/b/t/m-sbrsdb010-m-slatters-be-royal-store-original-imag2g86a2updc7d.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/416/416/knxiavk0/pet-bed/d/s/g/m-sbrsdb010-m-slatters-be-royal-store-original-imag2g86edhcykpj.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/knxiavk0/pet-bed/i/o/d/m-sbrsdb010-m-slatters-be-royal-store-original-imag2g862t3mu8zx.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/knxiavk0/pet-bed/f/t/a/m-sbrsdb010-m-slatters-be-royal-store-original-imag2g86cr7jka7k.jpeg?q=70",
    ],
  },
];

export { beds };
