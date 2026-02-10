interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary"; // Solo estas dos variantes
}

const variants: Record<"primary" | "secondary", string> = {
  primary: `
    text-white
    bg-[#6366f1]
    shadow-[0_0_15px_rgba(99,102,241,0.6)]
    hover:shadow-[0_0_30px_rgba(99,102,241,0.9)]
    hover:scale-105
  `,
  secondary: `
    text-gray-800
    bg-white
    border
    border-gray-300
    hover:bg-gray-100
  `,
};

export function Button({ text, variant = "primary" }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer";

  return (
    <button className={`${base}  ${variants[variant]}`}>
      {text}
    </button>
  );
}


export default Button;