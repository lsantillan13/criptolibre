import { useState } from "react";

const offers = [
    {
        id: 1,
        title: "Oferta 1",
        description: "Descuento del 20% en todos los productos.",
        image: "https://via.placeholder.com/600x400"
    },
    {
        id: 2,
        title: "Oferta 2",
        description: "Compra uno y lleva el segundo al 50% de descuento.",
        image: "https://via.placeholder.com/600x400"
    },
    {
        id: 3,
        title: "Oferta 3",
        description: "Envío gratis en compras mayores a $100.",
        image: "https://via.placeholder.com/600x400"
    },
    {
        id: 4,
        title: "Oferta 4",
        description: "20% de descuento en productos seleccionados.",
        image: "https://via.placeholder.com/600x400"
    },
    {
        id: 5,
        title: "Oferta 5",
        description: "Compra uno y llévate el segundo a mitad de precio.",
        image: "https://via.placeholder.com/600x400"
    },
    {
        id: 6,
        title: "Oferta 6",
        description: "Descuento del 30% en la primera compra.",
        image: "https://via.placeholder.com/600x400"
    }
];

export default function OffersCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 4;
    const totalSlides = Math.ceil(offers.length / itemsPerPage);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

    return (
        <section id="offers" className="relative p-4 bg-gray-100 mb-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Ofertas Especiales</h2>
            <div className="relative overflow-hidden h-full">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        width: `${totalSlides + 99}%`
                    }}
                >
                    {offers.map((offer, index) => (
                        <div
                            key={offer.id}
                            className="w-1/4 flex-shrink-0 p-4"  // w-1/4 ensures 4 items per page
                        >
                            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-2">
                                    <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                                    <p className="text-gray-600">{offer.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
                    onClick={prevSlide}
                >
                    Prev
                </button>

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50"
                    onClick={nextSlide}
                >
                    Next
                </button>

                <div
                    className="absolute -bottom-[0.1%] left-1/2 transform -translate-x-1/2 flex space-x-2"
                >
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
