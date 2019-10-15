import React from 'react'

const Sushi = (props) => {
  let { id, img_url, name, price, eaten } = props.sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => props.eatSushi(id, price, eaten)}>
        { !eaten ? <img src={img_url} alt={name} width="100%"/> : null }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi