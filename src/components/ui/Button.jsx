// src/components/ui/Button.jsx
const Button = ({ children, href, variant = 'primary', className = "", ...props }) => {
  const baseStyles = "px-8 py-4 font-medium transition-colors w-full sm:w-auto text-sm tracking-wide inline-block text-center rounded-md";
  const variants = {
    primary: "bg-brand text-white hover:bg-indigo-700 shadow-md",
    secondary: "bg-white text-black border border-slate-300 hover:bg-slate-50 shadow-sm"
  };


  // 외부에서 들어오는 className을 가장 뒤에 붙여서 커스텀 여지를 남기되, 
  // 기본 variant 스타일이 적용되도록 합니다.
  return (
    <a href={href} 
    className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}>
      {children}
    </a>
  );
};

export default Button;