const products = [
  {
    id: 1,
    product: "Waterbottle",
    description:
      "Eco-friendly, BPA-free water bottles for hydration on the go.",
    price: 17,
    image: "../images/apiImages/waterbot.jpeg",
  },
  {
    id: 2,
    product: "Set of  Dumbells",
    description: "Versatile dumbells for a range of exercises",
    price: 40,
    image: "../images/apiImages/dumbells.jpeg",
  },
  {
    id: 3,
    product: "Kettlebell",
    description: "Cast iron kettlebell to enhance strength and endurance",
    price: 28,
    image: "../images/apiImages/kettlebell.jpg",
  },
  {
    id: 4,
    product: "Medicine Ball",
    description:
      "Weighted medicine ball for strength training and core workouts.",
    price: 30,
    image: "../images/apiImages/medball.jpeg",
  },
  {
    id: 5,
    product: "Skipping Rope",
    description:
      "Durable, lightweight design for fast-paced workouts. Perfect for endurance and agility training",
    price: 22,
    image: "../images/apiImages/skipp.jpeg",
  },
  {
    id: 6,
    product: "Resistance Bands",
    description: "Flexible resistance bands for enhancing workout intensity",
    price: 25,
    image: "../images/apiImages/resistbands.jpeg",
  },
  {
    id: 7,
    product: "Foam Roller",
    description: "For muscle recovery and flexibility",
    price: 19,
    image: "../images/apiImages/foam.jpg",
  },
  {
    id: 8,
    product: "Pull-up Bar",
    description: "Easy-to-install pull-up bar for upper body workouts",
    price: 42,
    image: "../images/apiImages/pullup.jpeg",
  },
  {
    id: 9,
    product: "Balance Board",
    description:
      "Balance board for core strengthening and coordination training",
    price: 35,
    image: "../images/apiImages/board.jpg",
  },
  {
    id: 10,
    product: "Bench Press",
    description:
      "Sturdy and adjustable workout bench for a variety of exercises",
    price: 60,
    image: "../images/apiImages/bench.jpeg",
  },
  {
    id: 11,
    product: "Hand-Grips",
    description:
      "Enhance grip strength and forearm endurance with these comfortable, non-slip hand grips. Ideal for climbers and gym enthusiasts",
    price: 30,
    image: "../images/apiImages/grips.jpeg",
  },
  {
    id: 12,
    product: "Sweatband",
    description:
      "Stay cool and focused with our ultra-absorbent sweatband. Perfect for any workout to keep sweat at bay",
    price: 15,
    image: "../images/apiImages/sweatband.jpeg",
  },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
