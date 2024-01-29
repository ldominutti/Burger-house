import React from 'react'
import '../utils/App.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../components/GlobalContent'
import Order from '../components/order'
import { Section1 } from '../components/GlobalContent'

function Drink() {
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
                            <div className='categories'><h3 className='categories-title'>Bebidas</h3></div>
                            <div onClick={() => changeordercount('Agua mineral', 500)} className='category-section'>
                                <div className='categories-text-section'>
                                    <h3>Agua mineral ($500)</h3>
                                    <p className='categories-description'>Botella de agua mineral 500cc</p>
                                </div>
                                <img className='categories-image-section' src='/media/agua.jpg' alt='Agua mineral chica'></img>
                            </div>
                            <div onClick={() => changeordercount('Sprite', 1200)} className='category-section'>
                                <div className='categories-text-section'>
                                    <h3>Sprite ($1200)</h3>
                                    <p className='categories-description'>Botella de vidrio sprite 500cc</p>
                                </div>
                                <img className='categories-image-section' src='/media/sprite.png' alt='Sprite chica de vidrio'></img>
                            </div>
                            <div onClick={() => changeordercount('Pepsi', 1200)} className='category-section'>
                                <div className='categories-text-section'>
                                    <h3>Coca cola ($1200)</h3>
                                    <p className='categories-description'>Botella de vidrio coca cola 500cc</p>
                                </div>
                                <img className='categories-image-section' src='/media/coca.jpg' alt='Coca cola chica de vidrio'></img>
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
export default Drink