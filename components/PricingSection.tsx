import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            부담 없는 구독형 모델
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            초기 구축 비용의 부담을 줄이고, 지속적인 업데이트와 관리를 받을 수 있는 <br className="hidden md:block"/>
            합리적인 요금제를 제안합니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise Plan</h3>
                    <p className="text-gray-400 mb-6">기업 규모와 니즈에 맞춘 최적화 설계</p>
                    <div className="text-4xl font-bold text-white mb-2">
                        Custom <span className="text-lg font-normal text-gray-500">/ 월</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-8">+ 초기 세팅비 별도 (1회)</p>
                    <a href="#contact" className="block w-full text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                        견적 문의하기
                    </a>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                    <h4 className="text-lg font-bold text-white mb-6">포함된 혜택</h4>
                    <ul className="space-y-4">
                        {[
                            "맞춤형 AI 에이전트 설계 및 구축",
                            "전담 엔지니어 기술 지원",
                            "실시간 모니터링 대시보드 제공",
                            "분기별 성능 고도화 업데이트",
                            "사내 데이터 보안 및 프라이빗 클라우드"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                                <Check className="w-5 h-5 text-blue-500 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
       </div>
    </section>
  );
};

export default PricingSection;