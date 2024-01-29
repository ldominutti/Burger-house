import React, { useState } from 'react';
import '../utils/App.css'
import { useGlobalContext } from './GlobalContent'
import { Link } from 'react-router-dom';
import { sendOrder } from '../../api/api';

function Order() {
    // Estados locales para manejar la interfaz
    const [saveAlert, setSaveAlert] = useState('')
    const [savePrice, setSavePrice] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [showUserOptions, setShowUserOptions] = useState('do-not-show')
    const [orderOptions, setOrderOptions] = useState('do-not-show')
    const [showContinueOrder, setShowContinueOrder] = useState(false)

    // Funciones para manejar la visibilidad de opciones de usuario y de orden
    const showuseroptions = () => {
        if (showUserOptions === 'do-not-show') {
            setShowUserOptions('user-options')
        } else if (showUserOptions === 'user-options') {
            setShowUserOptions('do-not-show-user-options')
        } else if (showUserOptions === 'do-not-show-user-options') {
            setShowUserOptions('user-options')
        }
    }

    const showorderoptions = () => {
        if (orderOptions === 'do-not-show') {
            setOrderOptions('order')
            if (showUserOptions === 'user-options') {
                setShowUserOptions('do-not-show-user-options')
            }
            setSaveAlert(alerts)
            setSavePrice(prices)
            clearAlerts()
            clearPrice()
        }
        else if (orderOptions === 'order') {
            setOrderOptions('do-not-show')
            setShowAlert(false)
            addAlert(saveAlert)
            addPrice(savePrice)
            setSaveAlert('')
            setSavePrice('')
        }
    }
    // Funcion para cancelar todo el pedido
    const cancelordercount = () => {
        clearAlerts()
        clearPrice()
        clearOrders()
    }
    // Continuar con el pedido definido si existe
    const continueorder = () => {
        if (orders.length > 0) {
            showorderoptions()
            clearAlerts()
            clearPrice()
            setShowContinueOrder(true)
            setShowConfirmOrder(true)
        } else {
            setShowAlert(true)
            addAlert('No hay ningún producto en el pedido')
        }
    }
    // Cancelar la orden despues de haber continuado
    const cancelordercontinue = () => {
        setShowContinueOrder(false)
        clearAlerts()
        clearPrice()
        cancelordercount()
        setShowAlert(false)
    }
    // Estados locales para manejar el método de pago
    const [mercadoPago, setMercadoPago] = useState(false);

    const handlemeradopagoclick = () => {
        setMercadoPago(true);
    };

    const handlecashclick = () => {
        setMercadoPago(false);
    };

    // Estado local para manejar la confirmación de la orden
    const [showConfirmOrder, setShowConfirmOrder] = useState(true)

    // Importar contexto global
    const { setName, setAddress, setPhoneNumber, sectionDelivery, name, address, phoneNumber, removeOrders, orders, clearOrders, addAlert, clearAlerts, addPrice, clearPrice, prices, alerts } = useGlobalContext();

    // Función para enviar la orden al servidor
    const handleSubmit = async (event) => {
        if (name, address, phoneNumber) {
            event.preventDefault()
            setShowConfirmOrder(false)
            setShowAlert(false)
            const order = {
                name: name,
                address: address,
                phone_number: phoneNumber,
                products: orders
            }
            await sendOrder(order)
        } else {
            setShowAlert(true)
            addAlert('Rellena todos los campos antes de enviar')
        }
    }

    return (<>
        <div className={showContinueOrder ? ('order-continue') : ('do-not-show')}>
            <img className='logo' src='/media/logo-burger.png' alt='Logo'></img>
            <h2 className='order-title'>Burger House</h2>
            <div className='section-break-order'></div>
            {showConfirmOrder ? (<form className='order-confirm' onSubmit={(e) => { e.preventDefault(); }}>
                <h4 className='order-format-payment'>Confirmacion del pedido por: {sectionDelivery ? ('Delivery') : ('Take Away')}</h4>
                <div className='section-break-order-data'>Mis datos</div>
                {sectionDelivery ? (
                    <>
                        <input type='text' className='order-input-name' placeholder='Ingrese su nombre...' value={name} onChange={(e) => setName(e.target.value)} maxLength="30" />
                        <input type='text' className='order-input-address' placeholder='Ingrese su dirección...' value={address} onChange={(e) => setAddress(e.target.value)} maxLength="50" />
                        <input type='number' className='order-input-phone-number' placeholder='Ingrese su número de teléfono...' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength="20" />
                    </>
                ) : (
                    <>
                        <input type='text' className='order-input-name' placeholder='Ingrese su nombre...' value={name} onChange={(e) => setName(e.target.value)} maxLength="30" />
                        <input type='number' className='order-input-phone-number' placeholder='Ingrese su número de teléfono...' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength="20" />
                    </>
                )}

                <div className='section-break-order-payment'>Mi pago</div>
                <button className={mercadoPago ? 'payment-mercado-pago-button active' : 'payment-mercado-pago-button'} onClick={handlemeradopagoclick}>
                    Mercado Pago
                </button>
                <button className={!mercadoPago ? 'payment-cash-button active' : 'payment-cash-button'} onClick={handlecashclick}>
                    Efectivo
                </button>
                <h4>{mercadoPago ? ('El pago se realizara por mercado pago') : ('El pago se realizara por efectivo')}</h4>
                <button onClick={handleSubmit} type='submit' className='order-finish-button'>Finalizar la compra</button>
            </form>) : (<>
                <h3 className='order-finish-confirm'>Compra realizada!</h3>
                {mercadoPago ? (<h4 className='order-finish-text'>Se le enviara un mensaje via WhatsApp con un link de pago y la informacion sobre el pedido, cualquier aclaracion la podra enviar por ahi.</h4>) : (<h4 className='order-finish-text'>Se le enviara un mensaje via WhatsApp con la informacion sobre el pedido, cualquier aclaracion la podra enviar por ahi.</h4>)}
            </>)}
        </div>
        <div onClick={cancelordercontinue} className={`filter ${showContinueOrder ? '' : 'do-not-show'}`}></div>
        <div className={showAlert ? 'alert' : 'do-not-show'}>
            <h2 className='order-count-cancel' onClick={() => setShowAlert(false)}>❌</h2>
            <div className="alert-content">
                <h2>{(alerts)}</h2>
            </div>
        </div>
        <div className={orderOptions}>
            <img className='logo' src='/media/logo-burger.png' alt='Logo'></img>
            <h2 className='user-options-title'>Burger House</h2>
            <div className='section-break-user-options'></div>
            {orders.map((order, index) => (
                <div key={index}>
                    <p className='order-item'>
                        Artículo: {order.articulo},
                        Precio: ${order.precio},
                        Cantidad: {order.cantidad}
                    </p><h2 className='order-item-cancel' onClick={() => removeOrders(order.articulo, order.precio * order.cantidad)}>❌</h2>
                </div>
            ))}
            <button className='order-continue-button' onClick={continueorder}>Continuar con el pedido</button>
        </div>
        <div onClick={showorderoptions} className={`filter ${orderOptions === 'order' ? '' : 'do-not-show'}`}></div>
        <div className={prices > 0 ? ('alert') : ('do-not-show')}>
            <h2 className='order-count-cancel' onClick={() => cancelordercount()}>❌</h2>
            <div className="alert-content">
                <h2>{(alerts + prices)}</h2>
            </div>
            <img src='/media/pedidos2.png' onClick={showorderoptions} className='alert-buy' alt='ver pedido'></img>
        </div>
        <div className={showUserOptions}>
            <img className='logo' src='/media/logo-burger.png' alt='Logo'></img>
            <h2 className='user-options-title'>Burger House</h2>
            <div className='section-break-user-options'></div>
            <div className='user-options-section-buys'>
                <img src='/media/pedidos.png' onClick={showorderoptions} className='user-options-buys-image' alt='carrito de compras'></img>
                <h3 className='user-options-buys-text' onClick={showorderoptions}>Mi pedido</h3>
            </div>
        </div>
        <div className={showUserOptions === 'user-options' ? ('filter') : ('do-not-show')} onClick={showuseroptions}></div>
        <div className='container-nav'>
            <div className='nav'>
                <Link to='/home' className='logo logo-nav'><img className='logo' src='/media/logo-burger.png' alt='Logo'></img></Link>
                <img className='user-options-image' src='/media/user-options.png' alt='opciones de usuario' onClick={showuseroptions}></img>
            </div>
        </div>
    </>
    );
}
export default Order