import React, { useState } from 'react'
import Moviemodal from './Moviemodal'
import "./styles.css"

function Searchcard({title}) {
  const [showModal, setShowModal] = useState(false)
  showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  return (
      <div className='ml-5 mt-12'>
          <p className='text-4xl font-semibold'>{title}</p>
          <div className='flex overflow-y-hidden mt-6 container mx-auto px-4  overflow-x-scroll p-5 card__posters transition-transform '>
              <img className='h-[150px]  mr-2.5 duration-500 hover:scale-105 hover:opacity-100 object-containmax-w-[250px] inline-block  object-contain' src="https://i.pinimg.com/564x/9a/b3/b5/9ab3b59541a9e257306d53170968f5f4.jpg" alt='Movie Name' onClick={() => setShowModal(true)}/>
          </div>
      {showModal && <Moviemodal click={() => setShowModal(false)}/>}
      </div>
  )
}

export default Searchcard