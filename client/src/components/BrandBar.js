import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Card, Row} from 'react-bootstrap'

const BrandBar = observer(() => {
  const {devices} = useContext(Context)

  return (
    <Row className="d-flex">
      {devices.brands.map(brand =>
        <Card
          className="p-3 w-auto me-2 mb-2"
          key={brand.id}
          style={{cursor: 'pointer'}}
          border={brand.id === devices.selectedBrand.id ? 'danger' : 'info'}
          onClick={() => devices.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      )}
    </Row>
  )
})

export default BrandBar
