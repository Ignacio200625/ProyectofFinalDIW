import image from "../assets/Hero.png";
import Button from "./Button";

function Hero() {
  return (
    <section className=" flex  md:flex-row md:items-center justify-between px-6 md:px-16 py-12 md:py-20 dark:border-blue-800 dark:border-2">

      <div className="w-full md:w-1/2  text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl dark:text-white font-extrabold md:leading-tight">
          Bienvenido a Nuestra <br />
          <span className="text-acento-light dark:text-acento-dark">Plataforma</span>
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-lg max-w-xl mx-auto md:mx-0">
          Descubre las mejores soluciones digitales para tu negocio. Innovación,
          eficiencia y resultados garantizados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <Button text="Empezar ahora" variant="primary" />
          <Button text="Saber Mas" variant="secondary" />
        </div>
      </div>

  
      <div className="w-full hidden md:w-1/2 md:flex justify-center md:justify-end mt-8 md:mt-0">
        <img src={image} alt="Hero" className="w-[250px] sm:w-[320px] md:w-[420px] object-contain" />
      </div>
    </section>
  );
}

export default Hero;
