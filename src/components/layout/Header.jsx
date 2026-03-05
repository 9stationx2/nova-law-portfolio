const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 영역 (클릭 시 맨 위로 이동) */}
        <a href="#intro" className="font-extrabold text-xl tracking-tighter text-slate-900">
          송무팀<span className="text-brand">_</span>내이름
        </a>
        
        {/* 데스크탑 네비게이션 메뉴 */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#expertise" className="hover:text-brand transition-colors">
            핵심 역량
          </a>
          <a href="#vision" className="hover:text-brand transition-colors">
            입사 후 포부
          </a>
          <a href="#contact" className="hover:text-brand transition-colors">
            연락처
          </a>
        </nav>

        {/* 모바일용 퀵 버튼 */}
        <a href="#contact" className="md:hidden text-sm font-bold text-brand bg-blue-50 px-4 py-2 rounded-full">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;