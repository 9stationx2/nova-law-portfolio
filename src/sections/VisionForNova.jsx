import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

const VisionForNova = () => {
  return (
    <section id="vision" className="py-24 px-6 bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg">
            합류 후 90일 플랜
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-6 tracking-tight">
            보안과 송무를 잇는 데이터 허브
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto break-keep leading-relaxed">
           집단소송의 시작은 쏟아지는 의뢰인의 문의(CS)와 방대한 종이 서류 취합입니다. <br className="hidden md:block" />
  저는 이 치열한 실무의 최전선에서 발로 뛰는 동시에, 파편화된 원고 데이터를 <br className="hidden md:block" />
  완벽한 법정 제출용 증거로 정제하는 시스템적 허브(Hub)가 되겠습니다.
          </p>
        </div>

        {/* 데이터 파이프라인 3단계 UI */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-6 mt-12">
          
          {/* 1단계: 외부망/웹 DB (암호화 상태) */}
          <Card className="flex-1 bg-slate-800 border-slate-700 flex flex-col">
            <div className="mb-4">
              <span className="text-brand-light font-mono text-sm font-bold block mb-1">STEP 01. Web DB</span>
              <h3 className="text-xl font-bold text-white">외부망 데이터 수집</h3>
              <p className="text-sm text-slate-400 mt-2">개발팀 협업: AES-256 암호화로 민감정보 보호</p>
            </div>
            {/* 데이터가 알아볼 수 없는 난수로 암호화되어 있음을 시각화 */}
            <div className="bg-slate-950 p-4 rounded-md font-mono text-xs text-green-400 overflow-x-auto flex-1 border border-slate-800">
              <pre>{`{
  "plaintiff": "김노바",
  "ssn": "ENC(U2FsdGVkX1+...)",
  "evidence": "img_01.jpg",
  "bank": "신한",
  "account": "ENC(x8F9zQ2...)"
}`}</pre>
            </div>
          </Card>

          {/* 화살표 */}
          <div className="flex items-center justify-center text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform transition-transform lg:-rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* 2단계: 내부망 정제 (나의 역할) */}
          <Card className="flex-1 bg-slate-800 border-brand/50 shadow-[0_0_15px_rgba(79,70,229,0.2)] flex flex-col relative transform lg:-translate-y-4">
            <div className="absolute -top-3 right-4">
              <Badge variant="primary">My Role</Badge>
            </div>
            <div className="mb-4">
              <span className="text-brand-light font-mono text-sm font-bold block mb-1">STEP 02. Internal Net</span>
              <h3 className="text-xl font-bold text-white">내부망 복호화 및 검증</h3>
              <p className="text-sm text-slate-400 mt-2">인가된 환경에서 증거물 대조 및 유효성 검증</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-md font-mono text-xs text-blue-400 overflow-x-auto flex-1 border border-slate-800">
              <pre>{`-- 인가된 Admin 환경에서만 복호화 수행
SELECT 
  name,
  AES_DECRYPT(ssn, 'internal_key') AS real_ssn,
  evidence_status
FROM mass_litigation_raw
WHERE is_verified = TRUE;`}</pre>
            </div>
          </Card>

          {/* 화살표 */}
          <div className="flex items-center justify-center text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transform transition-transform lg:-rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* 3단계: 송무팀 (법원 제출용 평문) */}
          <Card className="flex-1 bg-slate-800 border-slate-700 flex flex-col">
            <div className="mb-4">
              <span className="text-brand-light font-mono text-sm font-bold block mb-1">STEP 03. Court Output</span>
              <h3 className="text-xl font-bold text-white">송무용 문서 자동화</h3>
              <p className="text-sm text-slate-400 mt-2">변호사님이 즉시 제출 가능한 평문(Plaintext) 변환</p>
            </div>
            <div className="bg-white p-2 rounded-md overflow-x-auto flex-1 border border-slate-300">
              <table className="w-full text-xs text-left text-slate-800 border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="p-1.5 font-bold">원고명</th>
                    <th className="p-1.5 font-bold">주민등록번호</th>
                    <th className="p-1.5 font-bold">증거(호증)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-1.5">김노바</td>
                    <td className="p-1.5 tracking-widest text-red-600 font-medium">900101-1234567</td>
                    <td className="p-1.5 text-brand font-medium">갑제1호증</td>
                  </tr>
                  <tr>
                    <td className="p-1.5">이리걸</td>
                    <td className="p-1.5 tracking-widest text-red-600 font-medium">850505-2345678</td>
                    <td className="p-1.5 text-brand font-medium">갑제2호증</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default VisionForNova;