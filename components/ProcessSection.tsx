import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black text-white relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-3">Core Technology</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            생각하고 실행하는 <br className="md:hidden" /> 4단계 자동화 사이클
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-purple-900 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <step.icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                </div>

                {/* Arrow (Mobile only) */}
                {index < PROCESS_STEPS.length - 1 && (
                    <div className="md:hidden absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 text-gray-600">
                        <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                )}

                <h4 className="text-xl font-bold mb-3 text-white">
                  <span className="text-blue-500 mr-2">0{step.id}.</span>
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
       </div>
    </section>
  );
};

export default ProcessSection;