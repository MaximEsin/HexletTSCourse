function formatPrice(item?: number | null) {
  if (typeof item === null || typeof item === undefined || !item) {
    return '$0.00';
  } else {
    const num = item.toFixed(2);
    return '$' + num;
  }
}
