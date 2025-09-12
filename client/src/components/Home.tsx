import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchShoes = async () => {
      const shoe = await fetch("http://localhost:3000/api/shoe");
      console.log(await shoe.json());
    };
    fetchShoes()
  }, []);
  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-[50%] flex flex-col gap-5 items-start">
        <h1 className="font-bold text-9xl">CRAZY SHOES.</h1>
        <p className="">
          Step in style, comfort and confidence <br /> -Discover the perfect
          pair today
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full">
          Show now
        </button>
      </div>
      <div className="w-[50%]">
        <img
          className="w-full rounded-4xl"
          src="https://5.imimg.com/data5/SELLER/Default/2023/1/KW/JL/RX/42609945/sports-shoes.jpg"
          alt="Shoe Pic"
        />
      </div>
    </div>
  );
};

export default Home;
