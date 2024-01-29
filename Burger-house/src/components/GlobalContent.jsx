import React, { createContext, useContext, useState } from 'react';

// Crear un contexto global para compartir datos entre componentes
const GlobalContext = createContext();

// Custom hook para acceder al contexto global
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Componente para la sección 1 del formulario de órdenes
export function Section1() {
  // Extraer valores del contexto global
  const { sectionDelivery, sectionTakeAway, changeSectionDelivery, changeSectionTakeAway, name, address, phoneNumber, setName, setAddress, setPhoneNumber } = useGlobalContext();

  return (
    <div className='section-1'>
      <div className='order-format'>
        <button className={sectionDelivery ? 'delivery' : 'no-delivery'} onClick={changeSectionDelivery}>Delivery</button>
        <button className={sectionTakeAway ? 'take-away' : 'no-take-away'} onClick={changeSectionTakeAway}>Take away</button>
      </div>
      {sectionDelivery ? (
        <>
          <input type='text' className='name-input' placeholder='Ingrese su nombre...' value={name} onChange={(e) => setName(e.target.value)} maxLength="30" />
          <input type='text' className='delivery-input' placeholder='Ingrese su dirección...' value={address} onChange={(e) => setAddress(e.target.value)} maxLength="50" />
          <input type='number' className='phone-number-input' placeholder='Ingrese su número de teléfono...' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </>
      ) : (
        <>
          <input type='text' className='name-input' placeholder='Ingrese su nombre...' value={name} onChange={(e) => setName(e.target.value)} maxLength="30" />
          <input type='number' className='phone-number-input' placeholder='Ingrese su número de teléfono...' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </>
      )}
    </div>
  );
}

// Proveedor de contexto para el estado global de la aplicación
export const AlertProvider = ({ children }) => {
  // Definir estados globales
  const [alerts, setAlerts] = useState('');
  const [prices, setPrices] = useState(0)
  const [orders, setOrders] = useState([])
  const [sectionDelivery, setSectionDelivery] = useState(true);
  const [sectionTakeAway, setSectionTakeAway] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Cambiar entre la sección de entrega y la sección para llevar
  const changeSectionDelivery = () => {
    if (sectionDelivery == false){
    setSectionDelivery(!sectionDelivery);
    setSectionTakeAway(!sectionTakeAway);
    }
  };

  const changeSectionTakeAway = () => {
    if (sectionTakeAway == false) {
    setSectionTakeAway(!sectionTakeAway);
    setSectionDelivery(!sectionDelivery);
    }
  };

  // Actualizar los inputs de nombre, dirección y número de teléfono
  const updateInputs = (newName, newAddress, newPhoneNumber) => {
    setName(newName);
    setAddress(newAddress);
    setPhoneNumber(newPhoneNumber);
  };

  // Agregar una alerta
  const addAlert = (message) => {
    setAlerts(message);
  };

  // Agregar un precio al total
  const addPrice = (price) => {
    setPrices(price + prices)
  }

  // Limpiar el total de precios
  const clearPrice = () => {
    setPrices(0)
  }

  // Limpiar las alertas
  const clearAlerts = () => {
    setAlerts('');
  };

  // Agregar órdenes de compra
  const addOrders = (articulo, precio) => {
    const existingProduct = orders.find(producto => producto.articulo === articulo);

    if (existingProduct) {
      if (existingProduct.cantidad < 10) {
        setOrders(prevOrders =>
          prevOrders.map(producto =>
            producto.articulo === articulo
              ? { ...producto, cantidad: producto.cantidad + 1 }
              : producto
          )
        );
      }

    } else {
      setOrders(prevOrders => [
        ...prevOrders,
        { articulo: articulo, precio: precio, cantidad: 1 }
      ]);
    }
  };

  // Limpiar todas las órdenes
  const clearOrders = () => {
    setOrders([])
  }

  // Remover órdenes específicas
  const removeOrders = (article, price) => {
    const newOrders = orders.filter(order => order.articulo !== article);
    const newPrice = prices - price
    setOrders(newOrders);
    setPrices(newPrice);
  }

  const changeordercount = (articulo, price) => {
    // Verificar si el producto ya existe en el pedido
    const existingProduct = orders.find(producto => producto.articulo === articulo);

    // Lógica para agregar una orden luego de verificar que no contenga mas de 10 pedidos ni que cada pedido contenga mas de 10 cantidades de productos.
    if (existingProduct) {
        if (existingProduct.cantidad < 10) {
            addOrders(articulo, price);
            addPrice(price);
            const mensaje = 'Precio total de la compra: $';
            addAlert(mensaje);
        } else {
            alert('No se pueden agregar más de 10 unidades del mismo producto.');
        }
    } else {
        if (orders.length < 10) {
            addOrders(articulo, price);
            addPrice(price);
            const mensaje = 'Precio total de la compra: $';
            addAlert(mensaje);
        } else {
            alert('No se pueden agregar más de 10 productos diferentes.');
        }
    }
};

  // Proporcionar el contexto global a los componentes secundarios
  return (
    <GlobalContext.Provider value={{ changeordercount, setName, setAddress, setPhoneNumber, name, address, phoneNumber, updateInputs, sectionDelivery, sectionTakeAway, changeSectionDelivery, changeSectionTakeAway, removeOrders, clearOrders, orders, addOrders, alerts, addAlert, clearAlerts, prices, addPrice, clearPrice }}>
      {children}
    </GlobalContext.Provider>
  );
};
