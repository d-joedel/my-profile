import wukong from "../assets/wukong.png";

function Home() {
  return (
    <div className="container hero">

      <div className="hero-text">
        <h1 className="glow">JOE DEL DACUDAO</h1>
        <h3>BSIT Student | Future MONKEY KING OF PROGRAMMING</h3>

        <p>
          A passionate maybe sometimes, IT student learning all sorts of things in development and
          creating something that can make me pass my subjects...
        </p>
      </div>

      <img src={wukong} alt="Wukong" className="hero-img" />
      <div className="page">
  
</div>

    </div>
  );
}

export default Home;