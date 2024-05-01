import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'react-router-dom';
import Button from '@mui/material/Button';
import Login from '../Pages/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function Navbaar({ totalItemsInCart }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  


  return (
    <Box>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          <Toolbar>
            <Button variant="contained" onClick={handleShow}> CONTACT</Button>
          </Toolbar>

          <Toolbar>
            <Typography>
              <Button href="/login" variant="contained">
                LOGIN
              </Button>
            </Typography>
          </Toolbar>
          <Toolbar>
            < ShoppingCartIcon  /> {totalItemsInCart}
          </Toolbar>
        </Toolbar>
      </AppBar>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (

              <form className="form-signinn">
                <h2 className="form-signin-heading">Please login</h2>
                <Field type="text" name="username" className="form-control" placeholder="Username" />
                <ErrorMessage  style ={{color:'red'}} name="username" component="div" className="error" /><br />

                <Field type="email" name="email" className="form-control" placeholder="Email" />
                <ErrorMessage  style ={{color:'red'}} name="email" component="div" className="error" /><br />

                <Field type="password" name="password" className="form-control" placeholder="Password" />
                <ErrorMessage style ={{color:'red'}} name="password" component="div" className="error" /><br />

                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Submit'}
                </button>
              </form>

            )}

          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>

  )
}

export default Navbaar