import React from 'react';

import Calculator from "../assets/Calculator.png"
import Todo from "../assets/Todo.jpg"
import multitab from "../assets/multitab.png"
import datatable from "../assets/datatable.png"
import ChatApp from "../assets/ChatApp.jpg"
import Netflix from "../assets/Netflix.jpg"
import tech from "../assets/tech.png"
import admin from "../assets/admin.png"
import icoder from "../assets/icoder.png"
import restaurant from "../assets/restaurant.png"

const Portfolio = () => {

  const Portfoilos = [
    {
      id: 1,
      src: Calculator,
    },
    {
      id: 2,
      src: Todo,
    },
    {
      id: 3,
      src: multitab,
    },
    {
      id: 4,
      src: datatable,
    },
    {
      id: 5,
      src: ChatApp,
    },
    {
      id: 6,
      src: Netflix,
    },
    {
      id: 7,
      src: tech,
    },
    {
      id: 8,
      src: admin,
    },
    {
      id: 9,
      src: icoder,
    },
    {
      id: 10,
      src: restaurant,
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>


        <div  className='grid sm:grid-cols-2 md-grid-cols-3 gap-8 px-12 sm:px-8'>
          {Portfoilos.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='w-full h-3/4 rounded-md duration-200 hover:scale-105' />
              <div className='flex-item-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>

          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Portfolio