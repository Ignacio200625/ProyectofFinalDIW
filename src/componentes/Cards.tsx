import Card from "./Card";
import image1 from "../assets/Lanzamiento.png"
import image2 from "../assets/SeguridadTotal.png"
import image3 from "../assets/AnalisisAvanzado.png"
import image4 from "../assets/Soporte.png"

function Cards(){

    return(
        <>
         <div className="flex justify-center px-16 py-20 text-center">
            <div>
                <h1 className="text-5xl dark:text-white font-extrabold leading-tight ">
               Nuestros servicios principales
            </h1>
            <p className="mt-10 dark:text-white ">Todo lo que necesitas para transformar tu presencia digital</p>
            </div>
            
        </div>
        <div className="flex gap-10 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-[25%]">
                <Card title={"Lanzamiento Rapido"} description={"Implementacion ágil de proyectos  en tiempo record"} image={image1}  />
            </div>
            <div className="w-full md:w-[25%]">
                <Card title={"Analisis Avanzado"} description={"Métricas detalladas para decisiones informadas"} image={image2} />
            </div>
            <div className="w-full md:w-[25%]">
                <Card title={"Seguridad Total"} description={"Protección de datos de última generacion"} image={image3} />
            </div>
            <div className="w-full md:w-[25%]">
                <Card title={"Soporte 24/7"} description={"Asistencia continua para su tranquilidad"} image={image4} />
            </div>
        </div>
        </>
    )

}

export default Cards;

