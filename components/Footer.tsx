import React from 'react';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <Bot className="text-white w-4 h-4" />
                    </div>
                    <span className="font-bold text-lg text-white">MYNDNOVA</span>
                </div>
                <p className="text-gray-500 text-sm max-w-xs">
                    기업의 일하는 방식을 혁신하는<br/>
                    Global AI Agent Platform
                </p>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    <Github size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-600">
            <div className="mb-4 md:mb-0">
                <span className="block mb-1">서울특별시 강남구 테헤란로 123, AI 타워 10층</span>
                <span>contact@myndnova.com | 02-1234-5678</span>
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-gray-400">이용약관</a>
                <a href="#" className="hover:text-gray-400">개인정보처리방침</a>
            </div>
            <div className="mt-4 md:mt-0">
                &copy; {new Date().getFullYear()} MYNDNOVA Inc. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;