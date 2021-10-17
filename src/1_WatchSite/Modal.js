/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client';
import { Button, Modal } from 'react-bootstrap';
import { LOGIN_USER } from './Queries';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';



const Modall = ({ show, setShow }) => {
  const [, setCookie] = useCookies();
  const [loginUser] = useMutation(LOGIN_USER);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [checkValid, setCheckValid] = useState({ email: false, password: false });
  const { email, password } = inputs;
  var regex = /\S+@\S+\.\S+/;



  const submit = () => {
    if (!email || !regex.test(email)) {
      return setCheckValid({ email: true });
    }
    else if (!password) {
      return setCheckValid({ password: true });
    }
    loginUser({
      variables: {
        email,
        password
      },
      context: {
        headers: {
          "Authorization": "Access"
        }
      }
    }).then((el) => {
      const { token, id } = el.data.loginUser;
      setCookie('authToken', token, { path: '/' });
      setCookie('userevent', id, { path: '/' });
      setInputs({ email: '', password: '' });
      toast.success('Logined Successfully!');
      if (show) {
        setTimeout(() => {
          setShow(false);
        }, 1000);
      }
    }).catch(() => {
      toast.error('Login Failed! try again');
    });
  }


  
  useEffect(() => {
    if (email && !regex.test(email)) {
      setCheckValid({ ...checkValid, email: true });
    }
    else {
      setCheckValid({ email: false, password: false });
    }
  }, [email, password]);





  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Login here</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b className="lead">Please authenticate in order to process!</b>
        <article className="modal-body mt-2">
          <div className="">
            <label>Type Email</label>
            <input
              value={email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              type="email"
              required={true}
              className="form-control"
              style={{ borderColor: checkValid.email ? 'red' : 'gainsboro' }}
            />
          </div>
          <div className="mt-1">
            <label>Type Password</label>
            <input
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              value={password}
              type="text"
              className="form-control"
              style={{ borderColor: checkValid.password ? 'red' : 'gainsboro' }}
            />
          </div>
        </article>
        <br />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ padding: '5px 20px' }} variant="danger" type="button" onClick={() => setShow(false)}>
          <i className="fas fa-times fa-2x"></i>
        </Button>
        <Button variant="primary" style={{ padding: '5px 15px' }} type="button" onClick={() => submit()}>
          <i className="fas fa-check fa-2x"></i></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modall
