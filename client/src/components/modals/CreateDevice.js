import React, {useContext, useState} from 'react'
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from 'react-bootstrap'
import {Context} from '../../index'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import {useEffect} from 'react'
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from '../../http/deviceAPI'
import {observer} from 'mobx-react-lite'

const CreateDevice = observer(({show, onHide}) => {
  const {devices} = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [type, setType] = useState(null)
  const [brand, setBrand] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => devices.setTypes(data))
    fetchBrands().then(data => devices.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = e => {
    setImage(e.target.files[0])
  }

  const changeInfo = (key, number, value) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', image)
    formData.append('brandId', devices.selectedBrand.id)
    formData.append('typeId', devices.selectedType.id)
    formData.append('info', JSON.stringify(info))

    createDevice(formData).then(data => onHide())
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
              <Dropdown.Toggle
                variant={'outline-dark'}
                className="w-100"
              >
                {devices.selectedType.name || 'Выберите тип'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.types.map(type =>
                  <Dropdown.Item
                    onClick={() => devices.setSelectedType(type)}
                    key={type.id}
                  >
                    {type.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mb-2">
              <Dropdown.Toggle
                variant={'outline-dark'}
                className="w-100"
              >
                {devices.selectedBrand.name || 'Выберите бренд'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.brands.map(brand =>
                  <Dropdown.Item
                    onClick={() => devices.setSelectedBrand(brand)}
                    key={brand.id}
                  >
                    {brand.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
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
                    value={i.title}
                    placeholder={'Название характеристи'}
                    onChange={(e) => setInfo('title', e.target.value, i.number)}
                  />
                </Col>
                <Col
                  md={4}
                  className="ps-0 w-auto"
                >
                  <Form.Control
                    value={i.description}
                    placeholder={'Описание характеристи'}
                    onChange={(e) => setInfo('description', e.target.value, i.number)}
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
        <Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice
