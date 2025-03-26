const boycottProducts = [
    { name: "কোকাকোলা", image: "coca-cola.png" },
    { name: "পেপসি", image: "pepsi.png" },
    { name: "নেসলে", image: "nestle.png" },
];

const approvedProducts = [
    { name: "মধু", image: "honey.png" },
    { name: "চিনি", image: "sugar.png" },
    { name: "দেশি চাল", image: "rice.png" },
];

function searchProduct() {
    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    let found = false;

    [...boycottProducts, ...approvedProducts].forEach(product => {
        if (product.name.toLowerCase().includes(query)) {
            found = true;
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>${boycottProducts.includes(product) ? 'বয়কট করুন' : 'ব্যবহার করতে পারেন'}</p>
            `;
            productList.appendChild(productDiv);
        }
    });

    if (!found) {
        productList.innerHTML = '<p>কোনো পণ্য পাওয়া যায়নি।</p>';
    }
}

function onScanSuccess(decodedText) {
    document.getElementById("barcodeResult").innerHTML = `স্ক্যানকৃত বারকোড: ${decodedText}`;
}

const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
scanner.render(onScanSuccess);