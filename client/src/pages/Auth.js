import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {Button, Card, Container, Form, Row} from 'react-bootstrap'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card
        className="p-5"
        style={{width: 600}}>
        <h2 className="m-auto">{isLogin ? 'Авторизация': 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите email..."
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
          />
          <Row className="d-flex justify-content-between mt-3 pe-3 ps-3">
            {isLogin ?
              <div className="d-flex align-items-center w-auto p-0">
                Нет аккаунта?
                <NavLink className="ps-2" to={REGISTRATION_ROUTE}>
                  Зарегистрируйтесь!</NavLink>
              </div> :
              <div className="d-flex align-items-center w-auto p-0">
                Есть аккаунт?
                <NavLink className="ps-2" to={LOGIN_ROUTE}>
                  Войдите!</NavLink>
              </div>
            }
            <Button
              className="w-auto"
              variant={"outline-success"}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
