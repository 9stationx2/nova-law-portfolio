const Badge = ({ children, variant = 'primary', size = 'sm' }) => {
  const variants = {
    // 강조용 (연한 배경 + 브랜드 컬러 텍스트)
    primary: "bg-brand-light text-brand",
    // 태그용 (회색 배경 + 짙은 회색 텍스트)
    outline: "bg-slate-100 text-slate-500"
  };

  const sizes = {
    // 기존 스타일 (태그용)
    sm: "py-1 px-4 text-xs",
    // 강조용 (인트로 타이틀 위 등)
    lg: "py-2 px-6 text-sm md:text-base"
  };

  return (
    <span className={`inline-block rounded-full font-bold tracking-wide transition-all ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

export default Badge;