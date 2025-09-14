import { useEffect, useState } from "react";
import {motion} from "framer-motion"

const Home = () => {
  interface Shoe {
    title: string;
    description: string;
    image: string;
    price: number;
    reviews: string;
    sizes: string[];
    stock: string;
  }
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/shoe");
        const data = await res.json();
        console.log(data.data);

        setShoes(data.data); // save in state
      } catch (err) {
        console.error("Error fetching shoes:", err);
      }
    };
    fetchShoes();
  }, []);

  return (
    <div className="flex flex-col items-center p-10">
      {/* Hero Section */}
       <section className="relative w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <h1 className="font-extrabold text-5xl md:text-7xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              CRAZY
            </span>{" "}
            SHOES
          </h1>
          <p className="text-lg text-gray-300">
            Step in <span className="font-semibold text-white">style</span>,{" "}
            <span className="font-semibold text-white">comfort</span> and{" "}
            <span className="font-semibold text-white">confidence</span>. <br />
            Discover the perfect pair today.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-full font-semibold text-black hover:scale-105 transition-transform">
              Shop Now
            </button>
            <button className="border border-gray-500 px-8 py-3 rounded-full hover:bg-gray-700 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/1/KW/JL/RX/42609945/sports-shoes.jpg"
            alt="Shoe Pic"
            className="w-[90%] md:w-[80%] rounded-3xl shadow-2xl shadow-yellow-500/30 hover:scale-105 transition-transform"
          />
        </motion.div>
      </div>

      {/* Background Accent (blur circle) */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
    </section>
      {/* Shoes Data Section */}
      <div>
        <h1 className="text-4xl font-bold mt-9">Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full">
        {shoes.map((shoe, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={shoe.image}
              alt={shoe.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex flex-col items-start text-left">
              <h2 className="text-xl font-semibold text-gray-800">
                {shoe.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{shoe.description}</p>
              <div className="flex justify-between items-center w-full mt-4">
                <p className="text-xl font-bold text-gray-900">${shoe.price}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="text-yellow-400">★</span> {shoe.reviews}{" "}
                    reviews
                  </span>
                  <span>|</span>
                  <span>{shoe.stock} in stock</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Sizes: {shoe.sizes.join(", ")}
              </p>
              <button className="w-full mt-5 py-3 px-6 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
