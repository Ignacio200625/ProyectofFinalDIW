import Card from "./Card";
import image1 from "../assets/Lanzamiento.png";
import image2 from "../assets/SeguridadTotal.png";
import image3 from "../assets/AnalisisAvanzado.png";
import image4 from "../assets/Soporte.png";

function Cards() {
  return (
    <>

      <div className="flex justify-center px-16 py-20 text-center">
        <div>
          <h1 className="text-5xl dark:text-white font-extrabold leading-tight">
            Nuestros servicios principales
          </h1>
          <p className="mt-10 dark:text-white">
            Todo lo que necesitas para transformar tu presencia digital
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 pb-20">
        <Card
          title="Lanzamiento Rápido"
          description="Implementación ágil de proyectos en tiempo récord"
          image={image1}
        />

        <Card
          title="Análisis Avanzado"
          description="Métricas detalladas para decisiones informadas"
          image={image2}
        />

        <Card
          title="Seguridad Total"
          description="Protección de datos de última generación"
          image={image3}
        />

        <Card
          title="Soporte 24/7"
          description="Asistencia continua para su tranquilidad"
          image={image4}
        />
      </div>
    </>
  );
}

export default Cards;
