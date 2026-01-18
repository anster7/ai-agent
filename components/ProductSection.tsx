import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductSection: React.FC = () => {
  const getColorStyles = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-500/30 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]';
      case 'orange':
        return 'border-orange-500/30 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]';
      case 'purple':
        return 'border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]';
      default:
        return 'border-gray-500/30';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-400 bg-blue-400/10';
      case 'orange': return 'text-orange-400 bg-orange-400/10';
      case 'purple': return 'text-purple-400 bg-purple-400/10';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="products" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            산업별 특화 AI 에이전트
          </h2>
          <p className="text-lg text-gray-400">
            기업의 핵심 밸류체인을 혁신하는 3가지 전문 에이전트를 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className={`bg-black rounded-2xl p-8 border-2 transition-all duration-300 flex flex-col ${getColorStyles(product.color)}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getIconColor(product.color)}`}>
                <product.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                {product.subtitle}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-colors border border-white/10 hover:bg-white hover:text-black text-white`}>
                자세히 보기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;