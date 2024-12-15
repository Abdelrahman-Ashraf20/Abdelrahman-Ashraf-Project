// قائمة تخزين المنتجات في السلة
let cart = [];

// دالة لإضافة المنتجات للسلة
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// دالة لتحديث السلة
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = ''; // تنظيف القائمة القديمة

    let total = 0; // حساب الإجمالي

    cart.forEach((item, index) => {
        total += item.price;

        // إنشاء عناصر السلة
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // زر الإزالة
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.backgroundColor = '#dc3545'; // لون أحمر
        removeButton.style.color = 'white';
        removeButton.style.marginLeft = '10px';
        removeButton.onclick = () => removeFromCart(index);

        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`; // تحديث الإجمالي
}

// دالة لإزالة المنتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1); // إزالة المنتج بناءً على الفهرس
    updateCart(); // تحديث السلة
}
