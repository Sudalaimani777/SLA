// Sample product data
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1500 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Tablet", category: "Electronics", price: 600 },
  { id: 4, name: "TV", category: "Electronics", price: 2000 },
  { id: 5, name: "Book", category: "Books", price: 15 },
  { id: 6, name: "Desk", category: "Furniture", price: 500 },
  { id: 7, name: "Monitor", category: "Electronics", price: 1200 },
];

// TASK 1: Filter items based on a condition
// Get all products in the "Electronics" category that cost more than 1000

async function getElectronicsAbovePrice(minPrice = 1000) {
  try {
    // Simulating an async operation (like fetching from API)
    const filteredProducts = await filterProductsByCondition(
      products,
      "Electronics",
      minPrice
    );
    console.log(`Products in Electronics category costing more than $${minPrice}:`);
    console.log(filteredProducts);
    return filteredProducts;
  } catch (error) {
    console.error("Error filtering products:", error);
  }
}

async function filterProductsByCondition(data, category, minPrice) {
  return new Promise((resolve) => {
    // Simulate async delay (like API call)
    setTimeout(() => {
      const filtered = data.filter(
        (product) => product.category === category && product.price > minPrice
      );
      resolve(filtered);
    }, 1000);
  });
}

// TASK 2: Update an object in an array
// Increase the price of "Phone" by 10%

async function updatePhonePrice() {
  try {
    const updatedProducts = await updateProductPrice(products, "Phone", 1.1);
    console.log("\nAfter increasing Phone price by 10%:");
    console.log(updatedProducts);
    return updatedProducts;
  } catch (error) {
    console.error("Error updating price:", error);
  }
}

async function updateProductPrice(data, productName, multiplier) {
  return new Promise((resolve) => {
    // Simulate async delay (like API call)
    setTimeout(() => {
      const updated = data.map((product) =>
        product.name === productName
          ? { ...product, price: product.price * multiplier }
          : product
      );
      resolve(updated);
    }, 800);
  });
}

// Execute both tasks
async function main() {
  console.log("=== ASYNC/AWAIT PRACTICE ===\n");
  console.log("Original products:", products);
  console.log("\n--- TASK 1: Filter by Category & Price ---");
  await getElectronicsAbovePrice(1000);

  console.log("\n--- TASK 2: Update Product Price ---");
  await updatePhonePrice();
}

// Run the main function
main();
