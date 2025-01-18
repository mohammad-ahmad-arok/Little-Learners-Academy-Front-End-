import "./Button.css";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ label, icon }) => {
  return (
    <button
      className={`md:shadow-custom-lg shadow-custom-md bg-Orange_90 rounded-xl
         py-4 w-full border-2 border-black flex items-center justify-center gap-2 hover:shadow-custom-md`}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
