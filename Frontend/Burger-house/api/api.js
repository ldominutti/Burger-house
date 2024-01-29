import axios from 'axios';

// Crear una instancia de axios con la URL base de la API de órdenes
const apiUrl = axios.create({
  baseURL: "http://127.0.0.1:8000/orders/api/v1/orders/"
})

// Definir una función llamada sendOrder que envía una orden a la API
export const sendOrder = (order) => {
  // Realizar una solicitud POST a la API con la orden proporcionada
  return apiUrl.post('/', order)
}
