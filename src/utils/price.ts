export function getPercentual(alcohol: number, gas: number) {
  return (alcohol / gas) * 100;
}

export function getPrice(alcohol: number, gas: number) {
  const price = getPercentual(alcohol, gas);
  if (price <= 70) {
    return true;
  } else {
    return false;
  }
}
