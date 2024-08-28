import { useState, useEffect } from "react";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [ 
        "https://http2.mlstatic.com/D_NQ_732084-MLA78421953660_082024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_777684-MLA77436518502_072024-OO.webp",
        "https://http2.mlstatic.com/D_NQ_670682-MLA78393660022_082024-OO.webp"
    ];

    const nextSlide = () => { 
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => { 
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto slide transition every 3.5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-screen mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden relative h-56 md:h-96">                
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ 
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}
                >
                    {slides.map((slide, index) => (
                        <img 
                            key={index} 
                            src={slide} 
                            className="w-full h-full object-cover flex-shrink-0" 
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                >
                    Prev
                </button>

                <button 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
                    onClick={nextSlide}
                    aria-label="Next Slide"
                >
                    Next
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 mt-4">
                {slides.map((_, index) => (
                    <button 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`} 
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* InfoCards */}
            {/* <section className="p-8 bg-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                    {/* Card 1 */}
                    {/* <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Métodos de Pago</h2>
                        <p className="text-gray-600">Descubre las opciones disponibles para pagar tus compras de manera segura.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Ver más</a>
                    </div> */}

                    {/* Card 2 */}
                    {/* <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Cómo Comprar</h2>
                        <p className="text-gray-600">Guía paso a paso sobre cómo realizar tus compras en nuestro sitio.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Ver más</a>
                    </div> */}

                    {/* Card 3 */}
                    {/* <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Políticas de Devolución</h2>
                        <p className="text-gray-600">Conoce nuestras políticas de devolución y cómo gestionar un retorno.</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 block">Ver más</a>
                    </div> */}
                {/* </div>
            </section> */}
            
        </div>
    )
}
