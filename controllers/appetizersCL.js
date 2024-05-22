
const appetizers = [
    { name: "Escargot",
    protein: "Snail",
    price: "$20"},
    { name: "Seared Scallops", 
    protein: "Mollusk",
    price: "$22"},
    { name: "Calamari", 
    protein: "Squid",
    price: "$18" },
  ];  

// this is creating an Index router -> List
// it is the full array of data
const getAppetizers = (request, response) => {
    response.send(appetizers)
}
const getAppetizer = (request, response) => {
    response.send(appetizers[request.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizer
}