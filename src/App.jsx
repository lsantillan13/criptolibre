export default function App() {
  return (
    <div className="App">
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <span className="block md:hidden cursor-pointer">☰</span>
        <ul className="flex gap-4">
          <li><a href="#home" className="text-blue-200">Homes</a></li>
          <li><a href="#products" className="text-white">Products</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="home" className="p-8 border-b border-gray-300">Home Section</section>
      <section id="products" className="p-8 border-b border-gray-300">Products Section</section>
      <section id="contact" className="p-8 border-b border-gray-300">Contact Section</section>
    </main>
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© 2024 Your E-commerce. All rights reserved.</p>
    </footer>
  </div>
  )
}