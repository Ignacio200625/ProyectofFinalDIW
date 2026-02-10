import Button from "./Button"

function Preparacion() {
  return (
    <div className="mt-10 px-6 md:px-20 py-20 bg-gradient-to-r from-acento-light to-acento-dark dark:from-acento-dark dark:to-acento-light rounded-3xl shadow-xl">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
          ¿Listo para comenzar?
        </h1>
        <p className="mt-4 text-white/80 text-lg md:text-xl max-w-xl">
          Empieza tu camino con nuestra prueba gratuita o explora nuestros planes completos.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
        <Button variant={"terciary"} text={"Prueba Gratuita"}/>
        <Button text={"Ver Planes"} variant={"secondary"}/>
      </div>
    </div>
  )
}

export default Preparacion
