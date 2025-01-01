const MenuBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: `url()`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center mt-20 text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">Our Menu</h1>
            <p className="mb-5 uppercase">Would You Like To try a dish?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
