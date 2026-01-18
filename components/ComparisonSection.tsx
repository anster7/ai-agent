import React from 'react';
import { COMPARISONS } from '../constants';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            도입 전과 후, <br className="md:hidden" />확실한 변화를 경험하세요
          </h2>
        </div>

        <div className="grid gap-6">
          {COMPARISONS.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before */}
              <div className="bg-neutral-900/50 p-6 rounded-xl border border-red-900/30 flex items-start gap-4">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-red-400 font-bold mb-1 text-sm uppercase">Before</h4>
                  <p className="text-gray-400">{item.before}</p>
                </div>
              </div>

              {/* After */}
              <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/30 flex items-start gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 z-0" />
                <CheckCircle2 className="text-blue-400 w-6 h-6 flex-shrink-0 mt-1 relative z-10" />
                <div className="relative z-10">
                  <h4 className="text-blue-400 font-bold mb-1 text-sm uppercase">After</h4>
                  <p className="text-white font-medium">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;