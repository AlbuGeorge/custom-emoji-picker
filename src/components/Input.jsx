import React from 'react'

import classes from './Input.module.css'
import { HiOutlineFaceSmile } from 'react-icons/hi2'

const Input = () => {
  return (
    <div className={classes.wrapper}>
      <input type="text" placeholder="Choose an emoji" />
      <button type="submit">
        <HiOutlineFaceSmile size="2em" className={classes.smile} />
      </button>
    </div>
  )
}

export default Input
