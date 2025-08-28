import "./Home.scss";

function Home() {
  return (
    <div className="homepage">
      <h1 className="homepage-title">HomePage</h1>
      <video autoplay muted loop id="myVideo">
        <source src="../../Assets/BG_Video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default Home;
