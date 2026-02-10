function Estadisticas() {
  return (
    <div className="flex flex-col md:flex-row mt-10 px-6 md:px-10 py-10 rounded-2xl
                    bg-white dark:bg-gray-800
                    shadow-lg dark:shadow-[0_10px_30px_rgba(99,102,241,0.5)]
                    gap-6 md:gap-0">
      

      <div className="text-center w-full md:w-1/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-[#6366f1] md:leading-tight">
          10K
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base mt-1">
          Plataforma
        </p>
      </div>


      <div className="text-center w-full md:w-1/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-[#6366f1] md:leading-tight">
          99.9
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base mt-1">
          Uptime garantizado
        </p>
      </div>


      <div className="text-center w-full md:w-1/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-[#6366f1] md:leading-tight">
          24/7
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base mt-1">
          Soporte técnico
        </p>
      </div>


      <div className="text-center w-full md:w-1/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-[#6366f1] md:leading-tight">
          +150
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base mt-1">
          Países
        </p>
      </div>

    </div>
  );
}

export default Estadisticas;
