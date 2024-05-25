const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-mens-transparent-hour-hand-watch-png-image_6687176.png"
          className="w-1/2 rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
