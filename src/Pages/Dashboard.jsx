import React,{useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Testimonial from './Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/actions/Action';

const Dashboard = () => {
   
    const [data, SetData] = useState([])
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/getproduct/")
    SetData(res.data)
    console.log("Response", res.data)

  }

  useEffect(() => {
    getData()
  }, [])

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));

  }
   const cartItems = useSelector(state => state.cartreducer.carts);
   const totalItemsInCart = cartItems.reduce((total, item) => total + item.qnty, 0);
return (
    <div style={{paddingTop:'10px',width:'100%'}}>   
             <Carousel>
                {data.map((product, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={product.image}
                            alt={product.name }

                          />
                           <h6>{product.price}</h6> 
                            <h6>{product.category}</h6> 
                            <h6>{product.description}</h6> 
                            <Button variant="primary" onClick={() => send(product)}>Cart</Button>
                       
                    </Carousel.Item>
                ))}
            </Carousel>
         <div style={{marginTop:"40px"}}>
              <Testimonial/>
         </div>
    </div>
  )
}

export default Dashboard


