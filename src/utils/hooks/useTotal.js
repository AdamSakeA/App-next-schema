export default function useTotal(data) {
  const totalPrice = data?.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const totalOrdered = data?.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return { totalPrice, totalOrdered };
}
