import './contact_us.scss';
import Banner from '../../components/homepage_banner/homepage_banner.js';
import {contactUsContent} from '../../components/globals/content.js';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Card, Alert } from 'react-bootstrap'

function ContactUs() {
  const formRef = useRef();
  const [error, setError] = useState('');
  const [sent, setFormSent] = useState('');
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  let today = new Date().toISOString().slice(0, 10);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    console.log(sent, loading);

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        setError('');
        await emailjs.sendForm('service_63r0b3j', 'ballroom_question', formRef.current, 'mm1mHn3ZQHqM__gYo')
          .then((result) => {
            console.log(result.status);
            setFormSent('yes');
          }, (error) => {
            throw new Error(error);;
          });
      } catch (error) {
        error ? setError('Что-то пошло не так.') : setError('Что-то пошло не так.');
      }
    }

    setValidated(true);
    setLoading(false);
  }

  return (
    <div className='contact-us-container'>
      {sent ? <>
        <div className='contact-us-banner header'>
        <Banner
        bannerText={contactUsContent.thanks}
        bannerType={'header'}/>
        </div></> : <>
        <div className='contact-us-banner header'>
          <Banner
          bannerText={contactUsContent.header}
          bannerType={'header'}/>
        </div>
        <div className='contact-us-form-container'>
          <Card>
            <Card.Body>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
                <Form.Group className='mt-3' id='name' key='name'>
                  <Form.Label>Имя</Form.Label>
                  <Form.Control type='name' name='user_name' required/>
                  <Form.Control.Feedback type="invalid">Это поле является обязательным!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' id='surname' key='surname'>
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control type='surname' name='user_surname' required/>
                  <Form.Control.Feedback type='invalid'>Это поле является обязательным!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' id='email' key='email'>
                  <Form.Label>Электронная Почта</Form.Label>
                  <Form.Control type='email' name='user_email' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$'/>
                  <Form.Control.Feedback type='invalid'>Пожалуйста, введите почту в формате email@example.com.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' id='question' key='question'>
                  <Form.Label>Вопрос</Form.Label>
                  <Form.Control type='text' as="textarea" rows={3} name='user_question' required/>
                  <Form.Control.Feedback type="invalid">Это поле является обязательным!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' id='phone' key='phone'>
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control type='name' name='user_phone' pattern='[0-9]{6,12}$'/>
                  <Form.Control.Feedback type="invalid">Пожалуйста, введите телефон в формате 123456789.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mt-3' id='date' key='date'>
                  <Form.Control type='name' name='date' defaultValue={today} hidden/>
                </Form.Group>
                <Button disabled={loading} className='w-100 mt-3' variant='flat' type='submit'>Задать вопрос</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>}
      <><style type="text/css">
        {`
          .btn-flat {
            background-color: #e1e1e1;
            color: black;
            border: none;
            border-radius: 0;
          }
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
          .form-control {
            border-radius: 0;
          }
        `}
      </style></>
    </div>
  );
}

export default ContactUs;
