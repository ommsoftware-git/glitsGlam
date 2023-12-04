import React from "react";
import "./Shipping.css";

const Shipping = () => {
  return (
    <>
      <section className="mtop flex_space shipping">
        <div className="container">
          <p>Please note our shipping policies as below -</p>
          <p>
            A complete postal address including pin code, email id and contact
            number is essential to help us ship your order. Kindly cross-check
            your pin-code and contact number before you complete your order.
          </p>
          <p>
            If the ordered item is in stock, it will be packed and dispatched
            from our warehouse within 3 working days.
          </p>
          <p>
            However if some of the ordered items are not in stock, then we will
            get them produced and have them dispatched within 10 working days of
            the order being placed. We will keep you informed under such
            circumstances.
          </p>
          <p>
            Our courier partners will be able to deliver the shipment to you
            between Monday to Saturday: 9am to 7pm. Working days exclude public
            holidays and Sundays. Delivery time is subject to factors beyond our
            control including unexpected travel delays from our courier partners
            and transporters due to weather conditions and strikes.
          </p>
          <p>
            As soon as your package is dispatched, we will email you your order
            tracking details. Kindly bear with us until then.
          </p>
        </div>
      </section>
    </>
  );
};

export default Shipping;
