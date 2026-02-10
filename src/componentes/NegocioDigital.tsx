import image from "../assets/Negociodigital.jpeg";
import integracion from "../assets/Integracio.png";
import escalabilidad from "../assets/Escalabilidad.png";
import optimizacion from "../assets/Optimizacion.png";

function NegocioDigital() {
  return (
    <div className="grid grid-cols-1 px-6 md:px-20 gap-10 md:grid-cols-2 items-center mt-10">
    
      <div className="flex justify-center md:justify-start">
        <img
          src={image}
          alt="Negocio digital"
          className="rounded-xl shadow-lg w-full md:w-[500px] object-cover"
        />
      </div>


      <div className="w-full md:w-[80%]">
        <section>
          <h1 className="text-3xl md:text-5xl font-extrabold text-nowrap dark:text-white leading-tight">
            Nuestro <span className="text-[#6366f1]">negocio digital</span>
          </h1>

          <div className="mt-12 flex flex-col gap-8">
           
            <div className="flex items-start gap-6">
              <img
                src={optimizacion}
                alt="Optimización"
                className="h-12 w-12 rounded-md border-2 border-[#6366f1] p-1"
              />
              <div>
                <p className="font-bold  dark:text-[#6366f1] text-lg">
                  Optimización automática
                </p>
                <span className="text-gray-600 md:text-nowrap dark:text-gray-300 text-base">
                  Mejora continua del rendimiento con IA avanzada
                </span>
              </div>
            </div>

           
            <div className="flex items-start gap-6">
              <img
                src={integracion}
                alt="Integración"
                className="h-12 w-12 rounded-md border-2   border-[#6366f1] p-1"
              />
              <div>
                <p className="font-bold text-lg dark:text-[#6366f1]">
                  Integración total
                </p>
                <span className="text-gray-600 md:text-nowrap  dark:text-gray-300 text-base">
                  Conecta todos tus sistemas de forma eficiente y segura
                </span>
              </div>
            </div>


            <div className="flex items-start gap-6">
              <img
                src={escalabilidad}
                alt="Escalabilidad"
                className="h-12 w-12 rounded-md border-2 border-[#6366f1] p-1"
              />
              <div>
                <p className="font-bold text-lg dark:text-[#6366f1]">
                  Escalabilidad garantizada
                </p>
                <span className="text-gray-600 md:text-nowrap dark:text-gray-300 text-base">
                  Crece tu negocio digital sin límites con nuestra infraestructura
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NegocioDigital;
