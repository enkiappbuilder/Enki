import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import img from '../../../public/images/artistTemplate.png'

const style = {
  alignContent: 'center',
  color: '#4a4b4c'
}

const TemplateContainer = ({ header }) => (
  <Card
    className='templateContainer'
    style={style}
    image={img}
    header={header}
  />
)

export default TemplateContainer
