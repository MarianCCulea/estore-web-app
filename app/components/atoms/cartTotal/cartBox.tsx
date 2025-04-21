import { useCartTotal } from '../../../hooks/useCartTotal';

const CartSummary = () => {
  const { 
    subtotal, 
    itemCount, 
    total 
  } = useCartTotal();

  return (
    <div className="cart-summary">
      <h3>Order Summary ({itemCount} items)</h3>
      <div className="summary-row">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="summary-row font-bold border-t pt-2">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
};