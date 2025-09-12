const Home = () => {
  return (
    <div className="flex justify-between items-center p-10">
      <div className="w-[50%] flex flex-col gap-5 items-start">
        <h1 className="font-bold text-9xl">CRAZY SHOES</h1>
        <p className="">
          Step in style, comfort and confidence <br /> -Discover the perfect
          pair today
        </p>
        <button>Show now </button>
      </div>
      <div className="w-[50%]">
        <img
          className="w-full rounded-4xl"
          src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
