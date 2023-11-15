const Hero = () => {
  return (
    <div className="bg-black" style={{ width: "100%" }}>
      <div className="text-center bg-body-tertiary rounded-3">
        <img
          src="./girl_with_chain.jpg"
          alt="Girl sensually biting a chain"
          style={{ width: "100%", maxHeight: "40%" }}
        />

        <div className="d-inline-flex gap-2 mb-5"></div>
      </div>
    </div>
  );
};

export default Hero;
