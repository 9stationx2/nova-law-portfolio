import { portfolioData } from '../data/portfolioData';
import Badge from '../components/ui/Badge';


const Intro = () => {
  const { title, subtitle } = portfolioData.intro;

  return (
    <section 
      id="intro" 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <div className="max-w-3xl">
        
          {/* 타겟팅 뱃지 */}
          <Badge variant="primary" size="lg">
            노바법률사무소 집단소송팀 지원
          </Badge>

        {/* 타겟팅 뱃지: mb-8을 추가하여 타이틀과의 간격 확보 */}
        <div className="mb-8"></div>

        {/* 메인 타이틀 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 whitespace-nowrap leading-tight text-slate-900">
          {title}
        </h1>
        
        {/* 서브 카피 */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto break-keep whitespace-pre-line">
          {subtitle}
        </p>
        
        <p className="text-lg md:text-5xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto break-keep whitespace-pre-line">
          ooo
        </p>

      </div>
    </section>
  );
};

export default Intro;