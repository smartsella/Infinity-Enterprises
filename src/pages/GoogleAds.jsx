
import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, TrendingUp, Smartphone, Globe } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function GoogleAds() {
  return (
    <div className="pt-20">
      <Section className="bg-gradient-to-bl from-green-900/20 to-blue-900/20 min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-4"
          >
            <Search size={14} /> <span>Search Engine Marketing (SEM)</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-bold tracking-tight"
          >
             Capture Intent with <span className="text-gradient from-green-400 to-blue-500">Google Ads</span>
          </motion.h1>
          
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Be found when it matters most. We optimize every keyword, bid, and ad copy to ensure you dominate the search results and capture high-intent leads.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
             <Button variant="primary" to="/contact" className="px-8 py-4 shadow-xl shadow-green-500/10">Start Ranking</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                   alt="Google Analytics Dashboard" 
                   className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Floating Stats */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 space-y-4">
                   <Card className="bg-surface/90 backdrop-blur-xl border-green-500/20">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm font-medium">Conversion Rate</span>
                        <TrendingUp size={16} className="text-green-500" />
                     </div>
                     <div className="text-4xl font-bold mb-2">+45%</div>
                     <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[75%] animate-pulse"></div>
                     </div>
                   </Card>
                   
                   <Card className="bg-surface/90 backdrop-blur-xl border-blue-500/20 translate-x-8">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm font-medium">Cost Per Click (CPC)</span>
                        <BarChart2 size={16} className="text-blue-500" />
                     </div>
                     <div className="text-4xl font-bold mb-2">$1.24</div>
                     <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[45%]"></div>
                     </div>
                   </Card>
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-8">Who Is Google Ads For?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Google Ads is perfect for businesses looking to capture high-intent leads. If people are searching for your service, you need to be there. We specialize in:
            </p>
            <div className="space-y-6">
              <FeatureItem icon={Search} title="Search Campaigns" desc="Capture demand with high-intent keywords." />
              <FeatureItem icon={Smartphone} title="App Install Campaigns" desc="Drive downloads and engagement for your mobile app." />
              <FeatureItem icon={Globe} title="Display & Discovery" desc="Build brand awareness across the Google network." />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Optimization Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
           {['Keyword Research', 'Ad Copy Testing', 'Bid Strategy AI', 'Quality Score Fix'].map((step, i) => (
             <Card key={i} className="text-center py-10 group hover:bg-white/5 transition-colors border-white/5 hover:border-white/10">
               <div className="w-14 h-14 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center text-xl font-bold text-gray-500 group-hover:text-green-400 group-hover:bg-green-500/20 transition-all border border-white/5">
                 {i + 1}
               </div>
               <h3 className="font-bold text-lg text-white mb-2">{step}</h3>
               <p className="text-sm text-gray-500">Continuous refinement for peak performance.</p>
             </Card>
           ))}
        </div>
        <div className="mt-16 text-center">
            <Button to="/contact" variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-green-500/20">Boost Your Rankings</Button>
        </div>
      </Section>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
      <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
        <Icon className="text-green-400" size={26} />
      </div>
      <div>
        <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
