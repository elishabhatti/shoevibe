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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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

  // ✅ Category filter
  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
    setCurrentPage(1);
  };

  // ✅ Filtering
  const filteredProducts =
    brand === "all"
      ? shoes
      : shoes.filter(
          (item) => item.brand.toLowerCase() === brand.toLowerCase()
        );

  // ✅ Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex flex-col items-center bg-white text-black">
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

      {/* ABOUT SECTION */}
      <section className="w-full max-w-6xl text-center py-20 px-6">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We’re passionate about delivering sneakers that combine{" "}
          <span className="font-semibold text-black">style</span>,{" "}
          <span className="font-semibold text-black">comfort</span> and{" "}
          <span className="font-semibold text-black">performance</span>.  
          Whether you're hitting the gym, the streets, or just chilling, 
          our shoes are designed to keep you moving with confidence.
        </motion.p>
      </section>

      {/* PRODUCT SECTION */}
      <section className="w-full max-w-7xl py-16 px-6">
        <h1 className="text-4xl mb-8 font-bold text-center">Our Collection</h1>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <h2 className="font-medium">Categories:</h2>
          <select
            className="border px-3 py-2 rounded-md"
            onChange={handleCategoriesChange}
          >
            <option value="all">All</option>
            <option value="adidas">Adidas</option>
            <option value="nike">Nike</option>
            <option value="puma">Puma</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {currentProducts.map((shoe, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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
                <p className="text-sm text-gray-600 mt-2">
                  {shoe.description}
                </p>
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
                    <span>★ {shoe.reviews}</span>
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section className="w-full bg-gray-50 py-20 px-6 text-center">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Have questions or need support? We’d love to hear from you!
        </p>
        <form className="max-w-3xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
