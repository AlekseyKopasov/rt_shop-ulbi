import React, {useContext, useState} from 'react'
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from 'react-bootstrap'
import {Context} from '../../index'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownMenu from 'react-bootstrap/DropdownMenu'

const CreateDevice = ({show, onHide}) => {
  const {devices} = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [type, setType] = useState(null)
  const [brand, setBrand] = useState(null)
  const [image, setImage] = useState(null)

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = e => {
    setImage(e.target.files[0])
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex">
          <Row className="d-flex flex-column me-3">
            <Dropdown className="mb-2">
              <DropdownToggle variant={'outline-dark'} className="w-100">Выберите тип</DropdownToggle>
              <DropdownMenu>
                {devices.types.map(type =>
                  <DropdownItem key={type.id}>{type.name}</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="mb-2">
              <DropdownToggle variant={'outline-dark'} className="w-100">Выберите бренд</DropdownToggle>
              <DropdownMenu>
                {devices.brands.map(brand =>
                  <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </Row>
          <Row>
            <Form.Control
              placeholder={'Введите название устройства'}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Form.Control
              className="mt-2"
              placeholder={'Введите цену'}
              type="number"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            />
            <Form.Control
              className="mt-2"
              placeholder={'Загрузить изображение'}
              type="file"
              onChange={selectFile}
            />
            <hr/>
            <Button
              variant={'outline-primary'}
              className="w-auto"
              onClick={addInfo}
            >
              Добавить новое свойство
            </Button>
            {info.map(i =>
              <Row
                className="mt-2"
                key={i.number}>
                <Col
                  md={4}
                  className="ps-0 w-auto"
                >
                  <Form.Control
                    placeholder={'Название характеристи'}
                  />
                </Col>
                <Col
                  md={4}
                  className="ps-0 w-auto"
                >
                  <Form.Control
                    placeholder={'Описание характеристи'}
                  />
                </Col>
                <Col
                  md={4}
                  className="ps-0 w-auto"
                >
                  <Button
                    className="w-auto"
                    variant={"outline-danger"}
                    onClick={() => removeInfo(i.number)}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            )}
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
        <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
