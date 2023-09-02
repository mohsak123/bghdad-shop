import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFormCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return cartItems.length < 1 ? (
    <div className="empty-cart">
      <h1>سلة التسوق الخاصة بك فارغة</h1>
      <p>لا يوجد سلع</p>
      <Link className="empty-cart-link" to="products">
        صفحة السلع
      </Link>
    </div>
  ) : (
    <div className="cart">
      <h1 className="cart-title">سلة التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-quantity">
                  الكمية:
                  <span>{item.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر:
                  <span>{item.price * item.quantity}$</span>
                </div>
                <i
                  onClick={() => dispatch(removeFormCart(item.id))}
                  className="bi bi-trash cart-item-delete-icon"
                ></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className="bi bi-check-circle-fill"></i>
            جزء من طلبك مؤهل للشحن المجاني. قم بتحديد هذا الخيار عند الدفع
            التفاصيل
          </div>
          <div className="cart-summary-total">
            المجموع:
            <span>
              {cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0
              )}
              $
            </span>
          </div>
          <div className="cart-summary-btn">تابع عمليات الشراء</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
