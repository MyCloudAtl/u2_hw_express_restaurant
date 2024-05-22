const entrees = [
    { name: "Filot Mignon",
    protein: "Cow",
    price: "$28"},
    { name: "Seafood Linguine", 
    protein: "Marine",
    price: "$26"},
    { name: "Margherita Pizza", 
    protein: "Vegetarian",
    price: "$18" },
  ];  

// this is creating an Index router -> List
// it is the full array of data
const getEntrees = (request, response) => {
    response.send(entrees)
}
const getEntree = (request, response) => {
    response.send(entrees[request.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}