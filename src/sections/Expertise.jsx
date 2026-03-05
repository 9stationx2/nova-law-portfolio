import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

const Expertise = () => {
  const competencies = [
    {
      id: "01",
      category: "Legal & Finance",
      title: "법의 논리와 자금 흐름의 교차점",
      description: "법학 전공(평점 3.92)으로 다져진 탄탄한 리걸 마인드에 전산세무/회계 지식을 결합했습니다. 노바법률사무소의 주력 분야인 형사 및 민사 사건, 특히 복잡한 경제범죄 소송에서 증거의 맹점을 찾아내고 구조화하는 데 최적화되어 있습니다.",
      tags: ["법학 전공", "전산세무/회계"],
    },
    {
      id: "02",
      category: "Data & IT Architecture",
      title: "방대한 판례와 증거의 데이터화",
      description: "SQLD 자격을 바탕으로 Oracle, MySQL, MariaDB 등 다양한 관계형 데이터베이스 생태계를 능숙하게 다룹니다. Python, 기계학습(ML) 기초, Java에 대한 이해도를 바탕으로 비대면 법무행정 시스템의 데이터를 효율적으로 관리하고 가공합니다.",
      tags: ["SQLD", "RDBMS", "Python & ML", "Java"],
    },
    {
      id: "03",
      category: "Work Ethic & Growth",
      title: "아날로그의 치밀함, 디지털의 확장성",
      description: "개발 노트에 손글씨로 꼼꼼하게 와이어프레임을 기획하는 아날로그적 치밀함으로 문제를 정의합니다. 현재 2026년 상반기 정보처리기사 및 빅데이터분석기사 취득을 목표로 시험을 준비 중이며, 정보보안기사까지 3관왕을 달성하여 끊임없이 성장하는 IT 역량을 증명하겠습니다.",
      tags: ["10년의 끈기", "정보처리기사 준비 중", "빅분기 준비 중"],
    },
  ];

  return (
    <section id="expertise" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 타이틀 */}
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            핵심 역량
          </h2>
          <p className="text-lg text-slate-500">
            법무행정의 효율을 극대화하는 세 가지 핵심 무기
          </p>
        </div>

        {/* 역량 카드 그리드 (모바일: 1열, PC: 3열) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((item) => (
              <Card key={item.id} className="flex flex-col h-full">
                {/* 번호 표시 */}
                <span className="text-brand font-mono font-bold text-xl mb-4 block">
                  {item.id}.
                </span>
                
                {/* 카테고리 */}
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {item.category}
                </h3>
                
                {/* 타이틀 */}
                <h4 className="text-xl font-bold text-slate-800 mb-4 leading-snug">
                  {item.title}
                </h4>
                
                {/* 설명 (flex-grow를 통해 텍스트 길이에 상관없이 하단 여백 확보) */}
                <p className="text-slate-600 leading-relaxed grow mb-6 break-keep text-sm">
                  {item.description}
                </p>

                {/* 태그 뱃지 (이전 단계에서 수정한 Badge 컴포넌트 위치) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
              
            
      </div>
      
    </section>
  );
};

export default Expertise;