import Hero from "../componentes/Hero";
import Cards from "../componentes/Cards";
import NegocioDigital from "../componentes/NegocioDigital";
import Estadisticas from "../componentes/Estadisticas";
import Preparacion from "../componentes/Preparacion";
import Footer from "../componentes/Footer";


function Home() {
  return <div>
    <div className="md:py-5 md:px-20">
    <div className="bg-neutro-fondo-light dark:bg-black">
      <Hero/>
    </div>
    <Cards/>
    <NegocioDigital />
    <div className="bg-white dark:bg-black ">
      <Estadisticas />
    </div>
     <Preparacion />
   

  </div>
    <Footer />
  </div>
  

}

export default Home;
