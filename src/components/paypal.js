import React, { useState, useRef, useEffect } from 'react'





const Paypal = (props) => {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const paypalRef = useRef()
    const { cart, total } = props
    const totalAsString = total.toString()
   
    
    useEffect(() => {
        
            window.paypal.Buttons({
                createOrder: (data,actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount:{
                                value: totalAsString,
                            currency_code: 'USD',
                            breakdown: {
                                item_total: {value: totalAsString, currency_code: 'USD'}
                            }
                        },
                        invoice_id: 'thishoodie',
                        items: items

                        }]
                            
                        
                    })
                }
            }).render(paypalRef.current)
    }, [])


    const items = props.cart.map((item) => {
        return {
         name: item.title,
         unit_amount: {value: item.salePrice.toString(), currency_code: 'USD'},
         quantity: item.qty.toString()
        }
    })
    console.log(items)
    return (
        <>
        
        <div ref={paypalRef} />
        
            </>
    )
}

export default Paypal