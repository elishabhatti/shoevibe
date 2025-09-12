import { useEffect, useState } from "react";

const Home = () => {
  interface Shoe {
    title:string;
    description:string;
    image:string;
    price:number;
    reviews:string;
    sizes:string[];
    stock:string;
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
      <div className="w-full flex flex-col md:flex-row gap-5 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-5 items-start">
          <h1 className="font-bold text-6xl md:text-9xl">CRAZY SHOES.</h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full">
        {shoes.map((shoe, index) => (
          <div
            key={index}
            className="shadow-lg rounded-2xl p-4 flex flex-col items-center bg-white"
          >
            <img
              src={shoe.image}
              alt={shoe.title}
              className="w-full h-56 object-cover rounded-xl"
            />
            <h2 className="text-xl font-bold mt-3">{shoe.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{shoe.description}</p>
            <p className="mt-2 font-semibold">${shoe.price}</p>
            <p className="text-sm text-gray-500">⭐ {shoe.reviews} / 5</p>
            <p className="text-sm text-gray-500">{shoe.stock} / 5</p>
            <p className="text-sm">Available sizes: {shoe.sizes}</p>
            <button className="bg-black text-white px-4 py-2 mt-3 rounded-full">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
