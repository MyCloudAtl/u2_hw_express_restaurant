const desserts = [
    { name: "Flan",
    price: "$8",
    upgrades: "Vanilla Creame",
    add: "$3",},
    { name: "Creame Brulee", 
    price: "$10",
    upgrade: "Caramelized fruit",
    add: "$4"},
    { name: "Dulce de Leche", 
    price: "$12",
    upgrade: "Sweat Cream Gelato",
    add: "$3"},
  ];  

// this is creating an Index router -> List
// it is the full array of data
const getDesserts = (request, response) => {
    response.send(desserts)
}

const getDessert = (request, response) => {
    response.send(desserts[request.params.id])
}

// const img = new Image('https://www.recipetineats.com/wp-content/uploads/2016/09/Creme-Brulee_8.jpg?resize=650,910'); // Create new img element
// img.addEventListener("load", () => {
//   // execute drawImage statements here
// });
// img.src = "myImage.png";

module.exports = {
    getDesserts,
    getDessert
}