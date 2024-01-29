import React, { useState } from 'react'
import '../utils/App.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../components/GlobalContent'
import Order from '../components/order'
import { Section1 } from '../components/GlobalContent'

function Burgers() {
    // Utilizar el contexto global para agregar ordenes
    const { changeordercount } = useGlobalContext();

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
                            <div className='categories'><h3 className='categories-title'>Hamburguesas</h3></div>
                            <div onClick={() => changeordercount('Simple queso', 3000)} className='category-section'>
                                <div className='categories-text-section'>
                                    <h3>Simple con queso ($3000)</h3>
                                    <p className='categories-description'>Medallón 120g, Cheddar X2</p>
                                </div>
                                <img className='categories-image-section' src='/media/simplequeso.png' alt='Hamburguesa simple con queso'></img>
                            </div>
                            <div onClick={() => changeordercount('Doble con queso', 3600)} className='category-section'>
                                <div className='categories-text-section'>
                                    <h3>Doble con queso ($3600)</h3>
                                    <p className='categories-description'>Doble Medallón 120g y Cheddar X4</p>
                                </div>
                                <img className='categories-image-section' src='/media/doblequeso.png' alt='Hamburguesa doble con queso'></img>
                            </div>
                            <div onClick={() => changeordercount('Triple con queso', 4100)} className='category-section'>
                                <div className='categories-text-section'>
                                    <h3>Triple con queso($4100)</h3>
                                    <p className='categories-description'>Triple Medallón 120g y Cheddar X6</p>
                                </div>
                                <img className='categories-image-section' src='/media/triplequeso.png' alt='Hamburguesa triple con queso'></img>
                            </div>
                            <div className='arrow-circle'>
                                <Link to='/home'><img src='/media/flecha-izq.png' className='arrow-return'></img></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Burgers