import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { renderProducts } from "../api/api.js";

const Shop = () => {
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
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

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

  // ✅ Filtering
  let filteredProducts =
    brand === "all"
      ? shoes
      : shoes.filter(
          (item) => item.brand.toLowerCase() === brand.toLowerCase()
        );

  // ✅ Sorting
  if (sort === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sort === "reviews") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => parseFloat(b.reviews) - parseFloat(a.reviews)
    );
  }

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
    <div>
      {/* HERO SECTION */}
      <section
        className="relative bg-black text-white py-36 px-6 md:px-20 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.newtonrunning.com/cdn/shop/files/NR-Fusion2-Web-Header.jpg?v=1713977324')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold"
        >
          Shop the Latest Collection
        </motion.h1>

        <p className="relative z-10 mt-4 text-gray-300 text-lg">
          Explore premium sneakers, casuals, and performance footwear designed
          for every step you take.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-12 px-6">
        {/* SIDEBAR FILTERS */}
        <aside className="w-full md:w-1/4 bg-white shadow-md rounded-2xl p-6 h-fit space-y-6">
          <h2 className="text-xl font-bold mb-2">Filters</h2>

          {/* Brand Filter */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Brand</h3>
            <select
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="all">All</option>
              <option value="adidas">Adidas</option>
              <option value="nike">Nike</option>
              <option value="puma">Puma</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Sort by</h3>
            <select
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="reviews">Top Rated</option>
            </select>
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          {currentProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((shoe, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-gray-300 rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-1"
                >
                  <img
                    src={shoe.image}
                    alt={shoe.title}
                    className="w-full rounded-2xl h-56 object-cover"
                  />
                  <div className="p-5 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{shoe.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {shoe.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-bold">Brand:</span> {shoe.brand}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xl font-bold">${shoe.price}</p>
                      <span className="text-sm text-gray-500">
                        ⭐ {shoe.reviews}
                      </span>
                    </div>
                    <button className="mt-5 py-3 px-6 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* PAGINATION */}
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
