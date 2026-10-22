const CART_STORAGE_KEY = "fresh-basket-cart";
const CART_UPDATED_EVENT = "cartUpdated";

export function getCartItems() {
  const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
}

export function getCartProductKey(product) {
  return `${product.name}::${product.image}`;
}

function saveCartItems(items) {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function addToCart(product) {
  const price = Number(String(product.price).replace("$", "").trim());
  if (!Number.isFinite(price)) {
    throw new Error(`Invalid price for product "${product.name}"`);
  }

  const items = getCartItems();
  const productKey = getCartProductKey(product);
  const existingItem = items.find(
    (item) => getCartProductKey(item) === productKey,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    items.push({
      name: product.name,
      image: product.image,
      price,
      quantity: 1,
    });
  }

  saveCartItems(items);
}

export function updateCartQuantity(product, quantity) {
  const items = getCartItems();
  const productKey = getCartProductKey(product);
  const item = items.find(
    (cartItem) => getCartProductKey(cartItem) === productKey,
  );

  if (!item) {
    return;
  }

  item.quantity = Math.max(1, quantity);
  saveCartItems(items);
}

export function removeFromCart(product) {
  const productKey = getCartProductKey(product);
  const items = getCartItems().filter(
    (item) => getCartProductKey(item) !== productKey,
  );
  saveCartItems(items);
}
