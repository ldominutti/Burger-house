import React from 'react'
import '../utils/App.css'
import { Link } from 'react-router-dom'
import Order from '../components/order'
import { Section1 } from '../components/GlobalContent'

function Home() {

    return (
        <>
            <Order></Order>
            <div className='container'>
                <div className='container-menu'>
                    <img className='logo-banner' src='/media/fondo-burger.png' alt='Logo de fondo de pagina' title='Logo'></img>
                    <div className='menu'>
                        <Section1></Section1>
                        <div className='section-break'></div>
                        <div className='section-2'>
                            <div className='categories'><h3 className='categories-title'>Categorías</h3></div>
                            <div className='category'>
                                <Link className='categories-link' to='/Papas'>
                                    <h3 className='categories-text'>Papas Fritas</h3>
                                    <img className='categories-image' src='/media/fries.jpg' alt='Papas fritas'></img>
                                </Link>
                            </div>
                            <div className='category'>
                                <Link className='categories-link' to='/Hamburguesas'>
                                    <h3 className='categories-text'>Hamburguesas</h3>
                                    <img className='categories-image' src='/media/simplequeso.png' alt='Hamburguesas'></img>
                                </Link>
                            </div>
                            <div className='category'>
                                <Link className='categories-link' to='/Bebidas'>
                                    <h3 className='categories-text'>Bebidas</h3>
                                    <img className='categories-image' src='/media/drink.jpg' alt='Bebidas'></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;