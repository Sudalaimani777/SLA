import React from 'react'

const List = () => {
  const vegetables = [
    {
      name: 'carrot',
      color: 'orange',
      price: 30,
    },
    {
      name: 'potato',
      color: 'brown',
      price: 20,
    },
  ]

  return (
    <div>
      <h2>Vegetables</h2>
      <ul>
        {vegetables.map((vegetable) => (
          <li key={vegetable.name}>
            Name: {vegetable.name}, Color: {vegetable.color}, Price: {vegetable.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List