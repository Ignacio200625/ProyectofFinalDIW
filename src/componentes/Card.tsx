import Button from "./Button";

export function Card({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image:string
}) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200
shadow-[0_0_30px_rgba(59,130,246,0.35)]
hover:shadow-[0_0_50px_rgba(59,130,246,0.55)]
dark:shadow-[0_0_20px_rgba(255,255,255,0.6)]
dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.65)]
p-6 flex flex-col w-full items-center text-center
transition-all duration-300 ease-out hover:scale-[1.03] cursor-pointer">

  <div className="w-25 h-20 mb-4 bg-gray-200 rounded-md flex items-center justify-center">
    <img src={image} alt="" className="h-full w-full" />
  </div>

  <h3 className="text-lg font-semibold text-[#6366f1] mb-2">
    {title}
  </h3>

  <p className="text-gray-500 mb-6">
    {description}
  </p>

  <Button text="Saber Mas" variant="secondary" />
</div>

  );
}

export default Card