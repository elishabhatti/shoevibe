import { useEffect, useState } from "react";

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
      <div className="shadow-md shadow-gray-300 rounded-md p-5 w-full flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5 items-center">
          <h1 className="font-bold text-6xl md:text-7xl">CRAZY SHOES.</h1>
          <p>
            Step in style, comfort and confidence <br /> - Discover the perfect
            pair today
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Shop now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-4xl"
            src="https://5.imimg.com/data5/SELLER/Default/2023/1/KW/JL/RX/42609945/sports-shoes.jpg"
            alt="Shoe Pic"
          />
        </div>
      </div>
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
