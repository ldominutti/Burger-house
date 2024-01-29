import React from 'react'
import '../utils/App.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../components/GlobalContent'
import Order from '../components/order'
import { Section1 } from '../components/GlobalContent'

function Fries() {
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
              <div className='categories'><h3 className='categories-title'>Papas Fritas</h3></div>
              <div onClick={() => changeordercount('Papas fritas', 2000)} className='category-section'>
                <div className='categories-text-section'>
                  <h3>Papas fritas ($2000)</h3>
                  <p className='categories-description'>Incluye una porción de papas para 2 personas.</p>
                </div>
                <img className='categories-image-section' src='/media/fries.jpg' alt='Papas fritas'></img>
              </div>
              <div onClick={() => changeordercount('Papas con cheddar', 2800)} className='category-section'>
                <div className='categories-text-section'>
                  <h3>Papas con cheddar($2800)</h3>
                  <p className='categories-description'>Incluye una porción de papas con cheddar para 2 personas</p>
                </div>
                <img className='categories-image-section' src='/media/papascheddar.jpg' alt='Papas fritas con cheddar'></img>
              </div>
              <div onClick={() => changeordercount('Papas house', 3200)} className='category-section'>
                <div className='categories-text-section'>
                  <h3>Papas house($3200)</h3>
                  <p className='categories-description'>Incluye una porción de papas con cheddar, panceta y verdeo para 2 personas</p>
                </div>
                <img className='categories-image-section' src='/media/papascheddarverdeo.jpg' alt='Papas fritas house'></img>
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
export default Fries