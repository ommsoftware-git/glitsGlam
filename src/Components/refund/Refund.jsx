import React from "react";
import "./Refund.css";

const Refund = () => {
  return (
    <>
      <section className="mtop flex_space refund">
        <div className="container">
          <div className="mb-5">
            <p style={{ textAlign: "justify" }}>
              Once an order is confirmed, kasutam will not accept return or
              refund requests . However, in any of the below situations, we are
              more than happy to work with our patrons to find an amicable
              solution that is fair to all parties.
            </p>
          </div>
          <div className="mb-5">
            <h5>In case of Damaged product </h5>

            <ul>
              <li>
                kasutam needs to be notified of damaged product within 5 days
                from delivery date via email to info@kasutam.com
              </li>
              <li>
                In the email, order number, image of invoice, 1 outer box image,
                2 clear images of damaged product to be sent.
              </li>
              <li>
                In case of multiple item shipments, only the affected product
                can be returned and replaced.
              </li>
              <li>
                We will be happy to re-send and replace the product(s) promptly
                and we will work with you on providing an amicable solution.
              </li>
              <li>
                Email will be responded to within 24-48 hrs and full assistance
                will be provided thereafter.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h5>In case of Missing product </h5>

            <ul>
              <li>
                kasutam needs to be notified of missing product within 5 days
                from delivery date via email to info@kasutam.com
              </li>
              <li>
                In the email, order number, image of the invoice, 1 outer box
                image, 2 clear images of the opened box with all items received
                to be sent.
              </li>
              <li>
                We will be unable to accept a refund request. But, we will be
                happy to promptly re-send the missing product
              </li>
              <li>
                Email will be responded to within 24-48 hrs and full assistance
                will be provided thereafter.
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h5>In case of spoiled product</h5>

            <ul>
              <li>
                kasutam needs to be notified of spoilage of product within 10
                days from delivery date via email to info@kasutam.com
              </li>
              <li>
                In the email, order number, date of packaging/ date of
                manufacture, clear images or video of the product to be shared
              </li>
              <li>
                We will be unable to accept returns due to variance in taste,
                texture, colour or aroma. This is because our products are
                completely natural and made mostly by hand so no two batches
                will be identical. No compromise is made in the natural
                production process, use of best and natural ingredients and we
                will ensure that maximum nutritional value is retained
              </li>
              <li>We will work with you on providing an amicable solution.</li>
              <li>
                Product will be replaced after due investigation and diligence
                and we assure a fair outcome at all times.
              </li>
              <li>
                Email will be responded to within 24-48 hrs, and full assistance
                will be provided thereafter.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Refund;
