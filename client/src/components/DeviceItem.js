import React from 'react'
import {Card, Col, Image} from 'react-bootstrap'
import star from '../assets/star.svg'

const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
      <Card className="mt-3 w-auto" style={{width: 150, cursor: 'pointer', border: 'light', padding: 5}}>
        <Image src={device.img}/>
        <div className="text-black-50 d-flex justify-content-between">
          <div>Title....</div>
          <div className="d-flex align-items-center">
            <div className="me-1">{device.rating}</div>
            <Image width={15} height={15} src={star}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
