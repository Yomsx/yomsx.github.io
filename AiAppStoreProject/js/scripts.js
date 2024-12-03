
// Basic JavaScript for AI App Store

// Wallet connection functionality
document.getElementById('connect-wallet').addEventListener('click', async () => {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    alert(`Connected wallet: ${accounts[0]}`);
  } else {
    alert('MetaMask or another wallet provider is required!');
  }
});

// Example dynamic filtering logic
const products = [
  { id: 1, name: "AI Generator App", category: "AI Tools" },
  { id: 2, name: "Crypto Tracker", category: "Finance" },
  { id: 3, name: "NFT Manager", category: "Web3" },
];

const renderProducts = (filter = null) => {
  const productSection = document.getElementById('products');
  productSection.innerHTML = "";
  products
    .filter(product => !filter || product.category === filter)
    .forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.textContent = `${product.name} (${product.category})`;
      productDiv.style.border = "1px solid #ccc";
      productDiv.style.padding = "10px";
      productDiv.style.margin = "10px";
      productDiv.style.borderRadius = "5px";
      productDiv.style.backgroundColor = "#fff";
      productSection.appendChild(productDiv);
    });
};

renderProducts(); // Initial render
