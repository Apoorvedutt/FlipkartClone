console.log("Hello World");

let a = document.getElementById("categories");
console.log(a);

/* let arr = [1,2,3,4,5,6];
// for( let i=0; i<= arr.length; i++){
//     console.log(arr[i]);
// */

// Section of categories of the flipkart

let categories = [
  {
    img_src:
      "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
  },
  {
    img_src:
      "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Mobiles",
  },
  {
    img_src:
      "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
    title: "Fashion",
  },
  {
    img_src:
      "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    title: "Electronics",
  },
  {
    img_src:
      "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    title: "Home & Furniture",
  },
  {
    img_src:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100",
    title: "Sports & games",
  },
 
  {
    img_src:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100",
    title: "Appliances",
  },
];

categories.map((element) => {
  let image = document.createElement("img");
  image.src = element.img_src;

  let title = document.createElement("p");
  title.innerHTML = element.title;

  let box = document.createElement("div");
  box.append(image, title);
  document.getElementById("categories").append(box);
});

// list<Account> accList = [Select Id, name, noOfemployees, address FROM Account LIMIT 19];

// for(Account acc : accList) {
//     acc.
// }
