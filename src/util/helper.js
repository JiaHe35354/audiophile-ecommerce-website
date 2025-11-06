export function handleBackdropClick(event, dialog) {
  const dialogNode = dialog.current;
  const rect = dialogNode.getBoundingClientRect();

  // If click is outside the visible dialog box
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    dialogNode.classList.add("closing");
    setTimeout(() => {
      dialogNode.classList.remove("closing");
      dialogNode.close();
    }, 300);
  }
}

export function handleFormatPrice(price) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return formattedPrice;
}

export function calculateTotalPrice(cartItems) {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
