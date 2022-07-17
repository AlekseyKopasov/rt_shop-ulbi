import React, {useContext} from 'react'
import {Context} from '../index'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>e-Shop</NavLink>
        {user.isAuth ?
          <Nav className="mr-auto" style={{color: 'white'}}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
              className="ms-2"
            >Выйти
            </Button>
          </Nav>
          :
          <Nav className="mr-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>

  )
})

export default NavBar
