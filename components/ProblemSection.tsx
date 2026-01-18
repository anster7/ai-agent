import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEMS } from '../constants';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            "AI는 쓰고 있지만,<br className="hidden md:block" /> 
            <span className="text-gray-400">AI가 일하고 있지는 않습니다."</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            많은 기업들이 AI를 도입했지만, 여전히 사람은 바쁩니다. <br/>
            진정한 디지털 전환을 가로막는 문제들을 해결해야 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-neutral-800/50 border border-white/5 p-8 rounded-2xl hover:bg-neutral-800 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-neutral-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all text-gray-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;