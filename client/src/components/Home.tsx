import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { renderProducts } from "../api/api.js";

const Home = () => {
  interface Shoe {
    title: string;
    description: string;
    image: string;
    price: number;
    reviews: string;
    sizes: string[];
    stock: string;
    brand: string;
  }

  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [brand, setBrand] = useState("all");

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await renderProducts();
        setShoes(res.data);
      } catch (err) {
        console.error("Error fetching shoes:", err);
      }
    };
    fetchShoes();
  }, []);

  // ✅ Brand change handler
  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };

  // ✅ Filtering logic
  const filteredProducts =
    brand === "all"
      ? shoes
      : shoes.filter(
          (item) => item.brand.toLowerCase() === brand.toLowerCase()
        );

  return (
    <div className="flex flex-col items-center p-10 bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative w-full bg-gray-50 rounded-2xl text-black py-20 px-6 md:px-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <h1 className="font-extrabold text-6xl md:text-7xl leading-tight">
              <span className="text-black">CRAZY</span>{" "}
              <span className="text-gray-700">SHOES</span>
            </h1>
            <p className="text-lg text-gray-700">
              Step in <span className="font-semibold text-black">style</span>,{" "}
              <span className="font-semibold text-black">comfort</span> and{" "}
              <span className="font-semibold text-black">confidence</span>.{" "}
              <br />
              Discover the perfect pair today.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
                Shop Now
              </button>
              <button className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/1/KW/JL/RX/42609945/sports-shoes.jpg"
              alt="Shoe Pic"
              className="w-[90%] md:w-[80%] rounded-3xl shadow-2xl shadow-gray-300 hover:scale-105 transition-transform"
            />
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <div className="w-full max-w-7xl">
        <div>
          <h1 className="text-4xl my-8 font-bold text-center text-black">
            Our Collection
          </h1>
          <div>
            <select className="my-4 border px-3 py-2 rounded-md" onChange={handleCategoriesChange}>
              <option value="all">All</option>
              <option value="adidas">Adidas</option>
              <option value="nike">Nike</option>
              <option value="puma">Puma</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((shoe, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={shoe.image}
                alt={shoe.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col items-start text-left">
                <h2 className="text-xl font-semibold text-black">
                  {shoe.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{shoe.description}</p>
                <h4 className="text-sm mt-2">
                  <span className="font-bold">Brand:</span> {shoe.brand}
                </h4>
                <p className="text-sm">
                  <span className="font-bold">Sizes:</span>{" "}
                  {shoe.sizes.join(", ")}
                </p>
                <div className="flex justify-between items-center w-full mt-4">
                  <p className="text-xl font-bold text-black">${shoe.price}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="flex items-center">
                      <span className="text-black">★</span> {shoe.reviews}
                    </span>
                    <span>|</span>
                    <span>{shoe.stock} left</span>
                  </div>
                </div>
                <button className="w-full mt-5 py-3 px-6 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
