import Card from "../components/ui/Card"; // Card 임포트 잊지 마세요!

const VisionForNova = () => {
  const plans = [
    {
      title: "AI 기반 리서치 효율화",
      desc: "프롬프트 엔지니어링 역량을 활용해 판례 검색 및 법률 문서 초안 작성 시간을 단축하고, 변호사님이 핵심 변론 전략에 집중할 수 있는 환경을 만듭니다."
    },
    {
      title: "데이터 구조화 및 증거 분석",
      desc: "SQLD와 전산세무 지식을 결합해 복잡한 자금 흐름을 데이터화합니다. 특히 경제범죄 사건에서 숫자 뒤에 숨은 흐름을 파악하여 결정적 증거 분석을 지원합니다."
    },
    {
      title: "디지털 네이티브 협업",
      desc: "비대면/재택 환경에 최적화된 IT 역량으로 원격 협업 툴을 능숙하게 활용하며, 저작권 및 악플 대응 등 대량의 디지털 자료를 체계적으로 관리합니다."
    }
  ];

  return (
    <section id="vision" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">입사 후 포부</h2>
          <div className="w-12 h-1 bg-brand"></div>
          <p className="mt-6 text-slate-400 text-lg break-keep">
            노바의 혁신적인 송무 체계를 데이터로 뒷받침하겠습니다.
          </p>
        </div>

        {/* 수직 리스트 형태의 카드 그룹 */}
        <div className="space-y-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className="bg-slate-800 border-slate-700 hover:border-brand group transition-all"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors text-slate-100">
                {plan.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed break-keep">
                {plan.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionForNova;