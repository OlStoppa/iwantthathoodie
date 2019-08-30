import React, { useState, useRef, useEffect } from "react"

const Paypal = props => {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const paypalRef = useRef()
  const { cart, total } = props
  
  const totalAsString = total.toString()

  useEffect(() => {
    window.paypal
      .Buttons({
        onShippingChange : function(data, actions) {
          if(data.shipping_address.country_code !== 'US') {
            alert(' Sorry, we only ship to the US at this time.')
            return actions.reject()
          }
          return actions.resolve()
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAsString,
                  currency_code: "USD",
                  breakdown: {
                    item_total: { value: totalAsString, currency_code: "USD" },
                  },
                },
                invoice_id: "thishoodie",
                items: items,
              },
            ],
          })
        },
        onApprove: async(data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            props.setOrderDetails(order)
            props.openModal(true)
            console.log(order)
        },
        onError: err => {
            console.log(err);
        }
      })
      .render(paypalRef.current)
  }, [])

  const items = cart.map(item => {
    return {
      name: `${item.title} - ${item.size}`,
      unit_amount: {
        value: item.salePrice.toString(),
        currency_code: "USD",
      },
      quantity: item.qty.toString(),
    }
  })

  return (
    <>
      <div ref={paypalRef} />
    </>
  )
}

export default Paypal
