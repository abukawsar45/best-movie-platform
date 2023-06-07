// use local storage to manage cart data
const addToCart = (id,quantity) => {
  let orderCart = getCartData();
  const ticketQuantity = orderCart[id];
  // console.log(ticketQuantity);
  if (!ticketQuantity) {
    orderCart[id] = quantity;
  } else {
    const newQuantity = parseFloat(ticketQuantity) + parseFloat(quantity);
    orderCart[id] = newQuantity;
  }
  localStorage.setItem('order-cart', JSON.stringify(orderCart));
}


// get data from LocalStorage
const getCartData = () => {
  let orderCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('order-cart');
  if (storedCart) {
    orderCart = JSON.parse(storedCart);
  }
  return orderCart;
};

export { addToCart, getCartData };
