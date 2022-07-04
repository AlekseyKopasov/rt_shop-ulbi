import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {ListGroup} from 'react-bootstrap'

const TypeBar = observer(() => {
  const {devices} = useContext(Context)

  return (
    <ListGroup>
      {devices.types.map(type =>
        <ListGroup.Item key={type.id}>
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>  )
})

export default TypeBar
