function Home() {
  return (
    <>
      <h1>This is our TACO home</h1>
      <div className="home-container">
        <img
          className="taco-img"
          src="https://www.gs-jj.com/blog/wp-content/uploads/2017/05/taco-gang.jpg"
          alt="taco"
        ></img>
        <div className="overlay">
          <div className="text">Click Here For Our Kool Blog!</div>
        </div>
      </div>
    </>
  );
}

export default Home;
