# Plataforma de Comercio Electrónico con Criptomonedas

## Descripción
Este proyecto es una plataforma de comercio electrónico similar a MercadoLibre, pero con la capacidad de aceptar criptomonedas como método de pago. La plataforma está diseñada para ser segura, escalable y fácil de usar, con un enfoque en la experiencia del usuario y la integración de tecnologías modernas.

## Características
- **Autenticación de Usuarios**: Registro, inicio de sesión y gestión de perfiles.
- **Carrito de Compras**: Añadir, eliminar y gestionar productos en el carrito.
- **Proceso de Pago**: Integración con pasarelas de pago que aceptan criptomonedas.
- **Gestión de Pedidos**: Visualización y seguimiento de pedidos.
- **Gestión de Productos**: Añadir, editar y eliminar productos.
- **Reseñas de Productos**: Los usuarios pueden dejar reseñas y calificaciones.
- **Búsqueda y Filtros**: Búsqueda avanzada y filtros para encontrar productos.
- **Configuración de la Aplicación**: Personalización de la configuración de la plataforma.
- **Gestión de Vendedores**: Registro y gestión de vendedores.

## Estructura de Carpetas

```plaintext
src/
  auth/
    components/
    services/
    styles/
    utils/
  cart/
    components/
    services/
    styles/
    utils/
  checkout/
    components/
    services/
    styles/
    utils/
  common/
    components/
    services/
    styles/
    utils/
  home/
    components/
    services/
    styles/
    utils/
  orders/
    components/
    services/
    styles/
    utils/
  payments/
    components/
    services/
    styles/
    utils/
  products/
    components/
    services/
    styles/
    utils/
  profile/
    components/
    services/
    styles/
    utils/
  reviews/
    components/
    services/
    styles/
    utils/
  search/
    components/
    services/
    styles/
    utils/
  settings/
    components/
    services/
    styles/
    utils/
  vendors/
    components/
    services/
    styles/
    utils/
  App.js
  index.js

##Tecnologías Utilizadas
Frontend: React.js, Vite.
Backend: Node.js, Express.js.
Base de Datos: MongoDB.
Autenticación: JWT (JSON Web Tokens).
Pasarela de Pago: Coinbase Commerce, BitPay, CoinGate.
Estilos: CSS, SASS, TailwindCSS.

##Instalación y Configuración
###Prerrequisitos
Node.js (v14 o superior)
pnpm (v6 o superior)
MongoDB
Inicialización del Proyecto
Clona el repositorio:
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

##Instala las dependencias usando pnpm:
pnpm install

##Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:
VITE_MONGO_URI=tu_mongo_uri
VITE_JWT_SECRET=tu_jwt_secret
VITE_COINBASE_API_KEY=tu_coinbase_api_key

##Ejecución en Desarrollo
pnpm run dev

##Construcción para Producción
pnpm run build
pnpm start

##Contribución
Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
Sube tus cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

##Contacto
Nombre: Tu Nombre
Email: tu.email@example.com
GitHub: tu-usuario
¡Gracias por contribuir y ser parte de este proyecto!