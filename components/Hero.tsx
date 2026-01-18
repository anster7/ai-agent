import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Spline Animation */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/retrofuturismbganimation-XG01JHI5fOCMvD5Ti9sn31Rb/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-105" // slight scale to cover edges if needed
          title="3D AI Background"
          style={{ pointerEvents: 'none' }} // Ensure text is selectable, remove if interaction is needed
        ></iframe>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/90 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Next Gen AI Solution</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl">
            AI를 쓰는 회사가 아니라<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI가 일하는 회사
            </span>를 만듭니다
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            단순 반복 업무는 이제 그만. <br className="md:hidden"/>
            스스로 판단하고 실행하는 <strong className="text-white font-semibold">MYNDNOVA AI 에이전트</strong>를 채용하세요.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              무료 컨설팅 신청하기
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#products"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              서비스 둘러보기
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full mb-1"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;