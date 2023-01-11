var obj = {
  name: "ilya",
  age: 24,
  hobby: ["walking", "sleeping"],
  favorite_hobby: ["sports", "cooking"],
};
type product = {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
};
var product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "Agreat carpet - almost brand-new!",
  },
};
console.log(product.details.description);
console.log(obj.name);

obj.favorite_hobby.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});
