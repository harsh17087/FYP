import React from 'react'
import { MdSettings} from 'react-icons/md'
// import {AiFillHome} from 'react-icons/ai'
// import {BsChatDotsFill,} from 'react-icons/bs'
import {BiChevronRight, BiChevronDown, BiNews} from 'react-icons/bi'
// import { GiMedicines } from 'react-icons/gi'
// import { FaDisease, FaHospital } from 'react-icons/fa'
// import {MdAddCall} from 'react-icons/md'
// import {FiTrendingUp} from 'react-icons/fi'
// import {BsCalendar2Fill, BsFillCalendar2EventFill} from 'react-icons/bs'
import {BsCalendar4Event, BsHandThumbsUp, BsBell} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {CgMenuRight} from 'react-icons/cg'

import {FaRegUserCircle} from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const SidebarDataa = () => {
    const {theme} = useContext(ThemeContext)
    
    const [iconColor, setIconColor] = useState(theme === 'light'? '#19202A': '#fff' )

    const colorToggle = () => {
    theme === 'light'? setIconColor('#19202A'): setIconColor("#fff")
    }

useEffect(() => {
  colorToggle()
}, [theme])



return (
    <div>
            
        </div>
    )
}

export default SidebarDataa


export const SidebarData =  [
    {
        title: 'Events',
        path: '/events',
        icon: <BsCalendar4Event size="20" color={iconColor} />,
        iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
        iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },

    {
        title: 'Profile',
        path: '#',
        icon: <FaRegUserCircle size="20" color={iconColor} />,
        iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
        iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
        subNav: [
            {
                title: 'My Profile',
                path: '/profile',
            },
            {
                title: 'My Statstics',
                path: '/stats',
            },
            {
                title: 'Other',
                path: '#',
            },
        ]
    },
    {
        title: 'Message',
        path: '/chat',
        icon: <BiEnvelope size="20" color={iconColor} />,
        iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
        iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    {
        title: 'Notification',
        path: '/notification',
        icon: <BsBell size="20" color={iconColor} />,
        iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
        iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    {
        title: 'Like',
        path: '#',
        icon: <BsHandThumbsUp size="20" color={iconColor} />,
        iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
        iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    {
        title: 'Help',
        path: '/help',
        icon: <AiOutlineQuestionCircle size="20" color={iconColor} />,
        iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
        iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    
    
]