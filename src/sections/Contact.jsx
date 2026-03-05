import Button from "../components/ui/Button";



const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-12 px-6 bg-slate-50 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Ready to Innovate?
        </h2>
        <p className="text-lg text-slate-600 mb-10 break-keep">
          노바법률사무소의 비대면 송무 혁신에 합류할 준비가 되어 있습니다. <br className="hidden md:block" />
          법률과 IT 데이터가 만나는 지점에서 만들어낼 시너지를 직접 확인해 보세요.
        </p>
        
       {/* 코드 확인 섹션 */}
        <div className="flex justify-center">
          <Button 
            href="https://github.com/your-id" // 실제 본인 깃허브 주소로 변경!
            variant="primary"
            target="_blank" 
            rel="noopener noreferrer" // 외부 className을 비우거나, 레이아웃 관련 클래스만 최소한으로 남깁니다.
            className="w-full sm:w-64" // 모바일에서는 꽉 차게, PC에서는 적당한 너비로
          >
            GitHub에서 코드 확인하기
          </Button>
        </div>
      </div>

     
    </section>
  );
};

export default Contact;