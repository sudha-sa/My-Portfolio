import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'
                    >About</p>
                </div>
                <p className='text-2xl font-bold mt-10'>Web Developer</p>
                <p className='text-xl mt-5'>
                    I am fresher,
                    but I will blend the art of design with good skills in programming to deliver an immersive and engaging user experience through efficient website development and proactive feature optimization.
                    Very passionate about aesthetic and UI design. As a web developer, you can trust me and give me some chances to explore myself in your affiliated work, and hope that in the future, you'll glad by my ability to use UX and UI.
                </p>
                <p className='text-2xl font-bold mt-10'>Personal Information</p>
                <p className='text-xl mt-5 text-gray-300'>
                    <span>Name: Sudha Sahu</span><br />
                    <span>Date Of Birth: 05-04-2001</span><br />
                    <span>Education: Bachelor of Technology</span><br />
                    <span>Address: Raipur, Chhattisgarh</span><br />
                    <span>Nation: India</span>
                </p>
                
            </div>
        </div>
    )
}

export default About