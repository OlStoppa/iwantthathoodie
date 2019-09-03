import React from "react"
import Image from "../components/image"
import ContactForm from "../components/contactForm"

const ProductModalInner = props => {
  const { content } = props

  const renderContent = () => {
    if (content === "size") {
      return (
        <div className="size-chart-wrapper">
          <Image filename="size-chart.png" />
        </div>
      )
    }
    if(content === "returns") {
        return (
            <>
            <h2>Returns</h2>
            <p>Our return policy is effective for 30 days from the date of delivery. Returns must be postmarked no later than 30 days from the date you received your This Hoodie order. To be eligible for a return, your item must be unused, in the same condition that you received it, and it must also be in the original packaging.</p>
            <p>Refunds (if applicable) If you would like to return your item, please use the Return/Exchange print out provided to you by our support team. You will be responsible for return postage unless the item you purchased is damaged or the incorrect size, in which case our customer support will provide a return label free of charge.</p>
            <p>Once your return is received and processed we will send you an email notifying that we have received your returned item. Once your return is approved, your refund will be processed in the form of either store credit or refund.</p>
            </>
            )
    }
    if(content==="shipping"){
        return (
            <>
            <h2>Shipping</h2>
            <p>We offer free shipping on all US orders (Continental US only). We do not provide shipping to addresses outside the US at this time.</p>
            <p>Please allow 14 to 23 working days for delivery.</p>
            </>
        )
    }
    if(content === "contact") {
        return <ContactForm />
    }
  }
  return (
      <>
      {renderContent()}
      </>
      )
}

export default ProductModalInner
