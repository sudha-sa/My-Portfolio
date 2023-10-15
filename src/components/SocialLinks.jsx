import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "www.linkedin.com/in/sudha-sahu-20589b237",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/sudha-sa",
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:sudhasahu123123@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Resume.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ]

    return (
        <div className='flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map((link) => (
                    <li key={link.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + link.style}>
                        <a
                            href={link.href}
                            className='flex items-center justify-between w-full text-white'
                            download={link.download}
                            target='_blank'
                            rel="noopener noreferrer">
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
