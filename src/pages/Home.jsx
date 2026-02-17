
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart2, CheckCircle, Users, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-300"
            >
              <Zap size={14} fill="currentColor" /> AI-Powered Marketing Revolution
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
            >
              Scale Your Brand with <span className="text-gradient">Intelligent Ads</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              Stop guessing. Start growing. We leverage predictive AI to optimize your Meta & Google ads for maximum ROI.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4 shadow-blue-500/20 shadow-xl">
                Start Scaling
              </Button>
              <Button to="/contact" variant="outline" className="text-lg px-8 py-4">
                View Case Studies
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" 
                alt="Digital Marketing Dashboard" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
               {/* Floating Elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-8 left-8 z-20 glass-card !p-4 !rounded-xl border-l-4 border-l-green-500"
               >
                 <div className="text-xs text-gray-400 mb-1">Total Conversions</div>
                 <div className="text-2xl font-bold text-white flex items-center gap-2">
                   2,450 <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">+12%</span>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute top-8 right-8 z-20 glass-card !p-4 !rounded-xl border-l-4 border-l-blue-500"
               >
                 <div className="text-xs text-gray-400 mb-1">ROAS</div>
                 <div className="text-2xl font-bold text-white">4.8x</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-surface/30">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[500px] group"
           >
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
               alt="Team Collaboration" 
               className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
           </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Not Just an Agency. <br/><span className="text-blue-400">Your Growth Partner.</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't believe in "set it and forget it." Our team becomes an extension of yours, obsessing over your data and constantly refining strategies to squeeze more revenue out of every dollar.
            </p>
            <div className="space-y-6">
              <CheckItem text="Proprietary AI Bidding Algorithms" />
              <CheckItem text="Creative Studio for High-Converting Ads" />
              <CheckItem text="Real-time Performance Dashboards" />
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
               <div className="glass-card !p-4 text-center">
                  <h4 className="text-3xl font-bold text-white mb-1">98%</h4>
                  <p className="text-sm text-gray-400">Client Retention</p>
               </div>
               <div className="glass-card !p-4 text-center">
                  <h4 className="text-3xl font-bold text-white mb-1">$50M+</h4>
                  <p className="text-sm text-gray-400">Ad Spend Managed</p>
               </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">The Infinite Growth Loop</h2>
          <p className="text-gray-400 text-lg">A systematic, data-backed approach to scaling your digital presence sustainably.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <ProcessStep number="01" title="Audit" desc="Deep dive into your current performance, competitors, and market position." delay={0} />
          <ProcessStep number="02" title="Strategy" desc="AI-powered roadmap tailored to your specific KPIs and growth targets." delay={0.1} />
          <ProcessStep number="03" title="Execution" desc="High-quality asset creation, campaign launching, and tracking setup." delay={0.2} />
          <ProcessStep number="04" title="Scale" desc="Continuous testing, optimization, and budget scaling based on ROAS." delay={0.3} />
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface/30">
        <h2 className="text-4xl font-bold text-center mb-16">Trusted by Innovators</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Strategix transformed our lead gen. The AI optimization slashed our CPL by 40% in just two months."
            author="Sarah Jenkins"
            role="CMO, TechFlow"
            delay={0}
          />
          <TestimonialCard 
            quote="Finally an agency that understands the full funnel. The creative quality combined with deep data analysis is a game changer."
            author="Michael Chen"
            role="Founder, GrowthWorks"
            delay={0.1}
          />
          <TestimonialCard 
            quote="Professional, transparent, and results-oriented. They truly feel like an extension of our internal team."
            author="David Ross"
            role="Director of Marketing, Omega"
            delay={0.2}
          />
        </div>
      </Section>

      {/* CTA Banner */}
      <Section>
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
               alt="Meeting" 
               className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Dominate Your Market?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book a free strategy call and let's discuss how we can help you scale your revenue with AI-driven marketing.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-12 py-5 shadow-2xl shadow-blue-500/30">
              Schedule Your Free Audit
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

function CheckItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
        <CheckCircle size={14} />
      </div>
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

function ProcessStep({ number, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative group"
    >
      <div className="text-7xl font-black text-white/5 absolute -top-6 -left-4 z-0 group-hover:text-blue-500/10 transition-colors duration-300 select-none">
        {number}
      </div>
      <Card className="relative z-10 h-full border-t-4 border-t-transparent hover:border-t-blue-500 transition-all duration-300">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
      </Card>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="flex flex-col h-full justify-between hover:bg-white/10">
        <div className="mb-6 text-gray-300 italic leading-relaxed">"{quote}"</div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 flex items-center justify-center text-xl font-bold text-gray-500">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-white">{author}</div>
            <div className="text-xs text-blue-400">{role}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
