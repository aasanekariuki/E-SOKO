import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Products = () => {
const [products, setProducts] = useState([])
const getProducts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/products")
        
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const products = await response.json()

      setProducts(products)

  } catch (err) {
    alert(err.message)
  }
}


useEffect(() => {
  getProducts()
})




  return (
    <div style={styles.container}>

    {products && products.map((product) => (
    <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
        <p>Price: {product.price}</p>  
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
  )
}

const styles={
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#141E30',
    margin: 0,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
}

export default Products
