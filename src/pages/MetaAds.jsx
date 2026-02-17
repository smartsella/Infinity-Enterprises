
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function MetaAds() {
  return (
    <div className="pt-20">
      <Section className="min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974" 
            alt="Social Media Marketing" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4"
          >
            Facebook & Instagram Advertising
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            AI-Driven <span className="text-gradient">Meta Ads</span>
          </motion.h1>
          
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Stop wasting budget on broad targeting. We use predictive AI to identify your most profitable audience segments before you spend a dime.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
             <Button variant="primary" to="/contact" className="px-8 py-4">Start Scaling</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Meta Ads?</h2>
            <p className="text-gray-400 mb-8 font-light leading-relaxed text-lg">
              With over 3 billion monthly active users, Meta platforms offer unparalleled reach. But reach without relevance is waste. Our approach ensures your creative hits the right retina at the right time.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <Target size={24} className="text-blue-400 shrink-0" />
                <span className="font-medium"> Precise demographic & behavioral targeting</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <Zap size={24} className="text-purple-400 shrink-0" />
                <span className="font-medium">Dynamic Creative Optimization (DCO)</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <TrendingUp size={24} className="text-green-400 shrink-0" />
                <span className="font-medium">Full-funnel retargeting strategies</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center justify-center p-8 text-center bg-blue-500/10 border-blue-500/20 col-span-1 hover:scale-105 transition-transform">
              <span className="text-5xl font-bold text-white mb-2">3.5x</span>
              <span className="text-sm text-gray-400">Average ROAS</span>
            </Card>
            <Card className="flex flex-col items-center justify-center p-8 text-center bg-purple-500/10 border-purple-500/20 col-span-1 hover:scale-105 transition-transform">
              <span className="text-5xl font-bold text-white mb-2">-40%</span>
              <span className="text-sm text-gray-400">CPA Reduction</span>
            </Card>
            <Card className="col-span-2 flex flex-col items-center justify-center p-8 text-center bg-surface/50 hover:bg-surface/80">
              <span className="text-4xl font-bold text-white mb-2">24/7</span>
              <span className="text-sm text-gray-400">Automated Optimization</span>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="text-center bg-surface/30">
        <h2 className="text-4xl font-bold mb-16">Our Strategy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6 text-blue-400">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Audit & Setup</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Pixel verification, event tracking setup, and account structure overhaul to ensure data accuracy.</p>
          </Card>
          <Card className="p-8 hover:-translate-y-2 transition-transform duration-300">
             <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6 text-purple-400">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Audience Testing</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Rapid testing of lookalikes, interests, and broad AI-defined audiences to find winners fast.</p>
          </Card>
          <Card className="p-8 hover:-translate-y-2 transition-transform duration-300">
             <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 text-green-400">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Scale & Sustain</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Horizontal and vertical scaling strategies that increase spend without sacrificing efficiency.</p>
          </Card>
        </div>
        <div className="mt-16">
          <Button to="/contact" variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-blue-500/20">Start Your Campaign</Button>
        </div>
      </Section>
    </div>
  );
}
