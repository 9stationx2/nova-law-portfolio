const Footer = () => {
  return (
    <footer className="w-full text-center border-t border-slate-200 py-8 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm text-slate-400 font-medium">
          "본 포트폴리오 웹사이트는 기획부터 구현까지 AI와의 협업을 통해 제작되었습니다."
        </p>
        <p className="text-xs text-slate-400 mt-2">
          Built with React & Tailwind CSS. &copy; 2026 NOVA Candidate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;