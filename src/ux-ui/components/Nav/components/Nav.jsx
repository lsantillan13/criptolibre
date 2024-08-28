import NavLink from "../../../../common/components/NavLinks/NavLink"
export default function Nav() {
    return (
        <header className="bg-gray-800 text-white p-4 relative block w-100">
            <span className="flex p-2">
                <h1 className="mx-4 py-1 font-semibold uppercase">CriptoLibre</h1>
                <input type="search" placeholder="Buscar productos y más" className="outline-none border border-1 text-black px-2 py-2 w-[40%]"></input>
                <button className="outline-none border-l-1 text-black px-2 py-2 bg-white">Buscar</button>
            </span>
            <nav className="flex justify-between items-center">
                <span className="block md:hidden cursor-pointer">☰</span>
                    <ul className="flex gap-4 text-white">
                        <li className="md:block sm:hidden"><NavLink to="/">Inicio</NavLink></li>
                        <li className="md:block sm:hidden"><NavLink to="/Categories">Categorias</NavLink></li>
                        <li className="md:block sm:hidden"><NavLink to="/Offers">Ofertas</NavLink></li>
                        <li className="md:block sm:hidden"><NavLink to="/HowToBuy">Cómo Comprar</NavLink></li>
                        <li className="md:block sm:hidden"><NavLink to="/PaymentInfo">Métodos de Pago</NavLink></li>
                        <li className="md:block sm:hidden"><NavLink to="/Help">Ayuda</NavLink></li>
                    </ul>
                    <ul className="flex gap-4 text-white">
                        <li className=""><NavLink to="/login">Iniciar Sesión</NavLink></li>
                        <li className=""><NavLink to="/register">Registrarse</NavLink></li>
                        <li className="hidden"><NavLink to="/BuyHistory">Mis compras</NavLink></li>
                        <li className="hidden"><NavLink to="/Favourites">Favoritos</NavLink></li>
                        <li className="hidden"><NavLink to="/ShoppingCart">Carrito</NavLink></li>                        
                    </ul>
            </nav>
        </header>
    )
}