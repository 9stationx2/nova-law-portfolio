const Card = ({ children, className = "" }) => {
  // 1. 외부에서 배경색(bg-)이나 테두리색(border-)을 지정했는지 확인
  const hasCustomBg = className.includes("bg-");
  const hasCustomBorder = className.includes("border-");

  // 2. 지정되지 않았을 때만 기본 스타일(흰색 배경, 연회색 테두리)을 적용
  const defaultStyles = `
    ${!hasCustomBg ? "bg-white" : ""} 
    ${!hasCustomBorder ? "border-slate-200" : ""}
  `;

  return (
    <div
      className={`p-8 border rounded-xl transition-all shadow-sm hover:shadow-md hover:border-brand ${defaultStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;