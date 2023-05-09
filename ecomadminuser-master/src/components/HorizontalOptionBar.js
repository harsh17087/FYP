import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ToggleButton from 'react-toggle-button'
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { ThemeContext } from '../context/ThemeContext'


const HorizontalOptionBar = () => {
    // const [theme, setTheme] = useLocalStorage('dark');
    const [showDropDown, setShowDropDown] = useState(null)
    const [showSubDropDown, setShowSubDropDown] = useState(null)
    const { setTheme, theme } = useContext(ThemeContext)
    const [toggleTheme, setToggleTheme] = useState(theme? 'dark': 'light')

    const themeToggler = () => {
        if(toggleTheme){
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }
    useEffect(() => {
       themeToggler()
    }, [toggleTheme])

    const categoryData = [
        {
            cateName: 'Games',
            subCat: [
                {
                    subCatName: 'Board Games'
                },
                {
                    subCatName: 'PC Games'
                },
                {
                    subCatName: 'Console Games'
                }
            ]
            

        },
        {
            cateName: 'Hardware',
            subCat: [
                {
                    subCatName: 'Professional'
                },
                {
                    subCatName: 'Retro Gaming'
                },
                {
                    subCatName: 'Consoles'
                },
                {
                    subCatName: 'Office'
                },
                {
                    subCatName: 'Other'
                },
            ]

        },
        {
            cateName: 'Cosmetics',
            subCat: [
                {
                    subCatName: 'Skins'
                },
                {
                    subCatName: 'Items'
                },
                {
                    subCatName: 'Other'
                }
            ]
            

        },
        {
            cateName: 'Others',
            subCat: [
                {
                    subCatName: 'Figurine'
                },
                {
                    subCatName: 'Literature'
                },
                {
                    subCatName: 'Goodies'
                },
                {
                    subCatName: 'Clothing'
                },
                {
                    subCatName: 'Other'
                },
                {
                    subCatName: 'NFT'
                },
                {
                    subCatName: 'Cards'
                },
            ]

        },

    ]
const subCategories = [
    {
        subCat: 'SubCategory 1'
    },
    {
        subCat: 'SubCategory 1'
    },
    {
        subCat: 'SubCategory 1'
    },
    {
        subCat: 'SubCategory 1'
    },
]
const productData = [
    {
        subCat: 'Product 1'
    },
    {
        subCat: 'Product 3'
    },
    {
        subCat: 'Product 4'
    },
    {
        subCat: 'Product 5'
    },
]

    useEffect(() => {
        setTheme(theme)
    }, [theme])


    return (
        <OptionWrapper>
            <OptionElementOne>
                {
                    categoryData.map((item, index) => (
                        <OptionMenuLink 
                            onMouseEnter={() => setShowDropDown(index)}
                            onMouseLeave={() => setShowDropDown(null)}
                            key={index}
                            to="#">{item.cateName}
                            <div className={ showDropDown === index ?"dropdown": 'dropdown_hide'}>
                                {item.subCat&&
                                    
                                    item.subCat.map((subcat, index) => (
                                        <OptionMenuLink  
                                        onMouseEnter={() => setShowSubDropDown(index)}
                                        onMouseLeave={() => setShowSubDropDown(null)}
                                            key={index} to="#">
                                            {subcat.subCatName}
                                            <div className={ showSubDropDown === index ?"sub_dropdown": 'sub_dropdown_hide'}>
                                                    {
                                                        productData.map((prod, index) => (
                                                           <OptionMenuLink key={index} to="#">
                                                               {prod.subCat}
                                                           </OptionMenuLink>
                                                        ))
                                                    }
                                            </div>
                                        </OptionMenuLink>
                                    ))
                                }
                            </div>
                        </OptionMenuLink>
                    ))
                }
              
            </OptionElementOne>
            <OptionElementTwo>
            <ToggleButton
                 value={toggleTheme}
                 onToggle={() => setToggleTheme(!toggleTheme)}
                 inactiveLabel={"Light"}
                 activeLabel={"Dark"}
                />
            </OptionElementTwo>
        </OptionWrapper>
    )
}

export default HorizontalOptionBar

const OptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F0F1F580;
    padding: 1rem;
`
const OptionElementOne = styled.div`
    display: flex;
    width: 35%;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 90%;
        overflow-x: auto;
        ::-webkit-scrollbar  {
        width: 0;
    }
        
  }
`


const OptionElementTwo = styled.div`
    display:flex;
`   
const OptionMenuLink = styled(Link)`
    text-decoration: none;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    width: fit-content;
    height: fit-content;
    @media (max-width: 768px){
        width:  100%;
       
    }
:hover {
        color: ${({ theme }) => theme.primaryText};
    }

.dropdown {
        display: flex;
        flex-direction: column;
        position: absolute;
        height: fit-content;
        width: fit-content;
        justify-content: space-between;
        background: ${({ theme }) => theme.body};
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;
        transition: 0.2s;
        :hover {
        color: ${({ theme }) => theme.primaryText};
    }
    }
    .dropdown_hide {
       display: none;
    }

    .sub_dropdown {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: fit-content;
        height: fit-content;
        min-height: fit-content;
        max-height: fit-content;
        justify-content: space-between;
        background: ${({ theme }) => theme.body};
        padding: 1rem;
        border-radius: 5px;
        z-index: 20;
        left: 3rem;
        transition: 0.2s;
        :hover {
        color: ${({ theme }) => theme.primaryText};
    }
    }
    .sub_dropdown_hide {
        display: none;
    }

`