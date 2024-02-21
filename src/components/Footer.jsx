import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {logo, mylogo, menu, close} from '../assets'

function Footer() {

  return (
    <>
    <footer className="bg-primary text-center dark:bg-neutral-300 lg:text-left">
  <div className="p-4 text-center text-white dark:text-neutral-400">
    © 2023 Copyright
   
  </div>
</footer>
    </>
  )
}

export default Footer