import React from 'react'
import Procedure from './Procedure'
import {imgData} from './imgData'

function view() {
  return <Procedure slides={imgData} />
}

export default view