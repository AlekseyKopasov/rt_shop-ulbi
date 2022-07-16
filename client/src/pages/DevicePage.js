import React from 'react'
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap'
import star from '../assets/star.svg'

const DevicePage = () => {
  const device =  {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'data:image/jpeg;base64,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'};
  const descriptions = [
    {id: 1, title: 'Оперативная память', description: '5 гб'},
    {id: 2, title: 'Камера', description: '6 мп'},
    {id: 3, title: 'Процессор', description: '700 гц'},
    {id: 4, title: 'Оперативная память', description: '8 гб'},
    {id: 5, title: 'Оперативная память', description: '9 гб'},
  ]

  return (
    <Container className="mt-3">
        <Row className="align-items-center">
          <Col md={4}>
            <Image width={300} height={300} src={device.img}/>
          </Col>
          <Col md={4}>
            <Row className="d-flex flex-column align-items-center">
              <h2 className="text-center">{device.name}</h2>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: '100px', background: `url(${star}) no-repeat center center`, backgroundSize: '100px 100px'}}
              >
                {device.rating}
              </div>
            </Row>
          </Col>
          <Col md={4}>
            <Card
              className="d-flex flex-column align-items-center justify-content-around"
              style={{width: 300, height: 300, fontSize: 32, border: '3px solid lightgrey'}}
            >
              <h3>От: {device.price} руб.</h3>
              <Button variant={'outline-dark'}>Добавить в корзину</Button>
            </Card>
          </Col>
        </Row>
      <Row className="d-flex flex-column m-3">
        <h2 className="mb-3 p-0">Характеристики</h2>
        {descriptions.map((info, index) =>
          <Row
            key={info.id}
            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px'}}
          >
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default DevicePage
