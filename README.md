# Burger House - Online Burger Ordering Platform

This web application was built using React and Django with Python. It is designed for a primarily burger business and offers a seamless online ordering experience.

# Project Structure:

Frontend: The frontend section of the project is located within the 'Frontend/Burger-house' folder. Burguer-house/pages: Contains different routes and sections of the website. Burger-house/components: Contains reusable files, including globalcontext.jsx, which manages the overall context of the page. Burger-house/utils - Contains page styles in 'app.css' and project definition and routes in 'app.jsx'. Burger-house/media: Contains images used in the project. burger-house/api: Used to connect React to Django, making POST requests to the server to store orders in the database.

Backend: The backend functionalities are located in the 'Backend/Backend' directory. Server-side functionalities are handled here. Backend/orders: App in charge of managing orders.

# Getting Started:
Clone this repository to your local machine. Install the necessary dependencies inside the 'Frontend/Burger-house' directory: "npm install npm install vite npm install react-router-dom npm install react-hot-toast npm install axios npm install react-hook-form". Start the frontend with the command 'npm run dev' inside the 'Frontend/Burger-house' folder, start the backend with the command 'Python Manage.py runserver' inside the 'Backend' directory. To see the page working, visit "http://localhost:5173/home" after completing the steps above. If you want to see the orders saved in the backend visit "http://127.0.0.1:8000/orders/api/v1/orders/" after completing the above steps

Technologies Used:
React Django Python Vite.js CSS
