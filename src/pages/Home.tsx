import Hero from "../componentes/Hero";
import Cards from "../componentes/Cards";
function Home() {
  return <div className="md:py-5 md:px-20">
    <div className="bg-neutro-fondo-light dark:bg-black">
      <Hero/>
    </div>
    <Cards/>
  </div>;
}

export default Home;
