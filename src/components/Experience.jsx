import React from 'react'
import html from "../assets/icons/html.jpg"
import css from "../assets/icons/css.png"
import js from "../assets/icons/js.jpg"
import react from "../assets/icons/reactjs.jpg"
import bootstrap from "../assets/icons/bootstrap.png"
import tailwind from "../assets/icons/tailwind.png"
import Github from "../assets/icons/Github.png"


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: js,
      title: 'JavsScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-300'
    },
    {
      id: 5,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-500'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'
    },
    {
      id: 7,
      src: Github,
      title: 'Github',
      style: 'shadow-gray-500'
    }
  ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full '>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technology I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-40 h-30 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Experience