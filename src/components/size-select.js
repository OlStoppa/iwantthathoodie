import React, { useState } from "react"

const SizeSelect = () => {
  const selectedArr = new Array(5).fill(false)
  const sizes = ["S", "M", "L", "XL", "XXL"]
  const [[...selectedSize], selectSize] = useState(selectedArr)

  const handleSelectSize = clicked => {
    const userSelected = selectedSize.map(
      (isSelected, index) => clicked === index
    )
    selectSize(userSelected)
  }
  return (
    <div className="size-select">
      {sizes.map((size, index) => (
        <div
          onClick={() => handleSelectSize(index)}
          className={selectedSize[index] ? "size-box selected" : "size-box"}
        >
          <h4>{size}</h4>
        </div>
      ))}
    </div>
  )
}

export default SizeSelect
