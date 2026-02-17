
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-20">
      <Section className="min-h-screen flex items-center relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
         
         <div className="grid lg:grid-cols-2 gap-16 w-full items-start">
            <div className="space-y-8">
               <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-5xl md:text-7xl font-bold"
               >
                 Let's Work <br/><span className="text-gradient">Together</span>
               </motion.h1>
               <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                 Ready to scale your business? Fill out the form or reach out directly. We don't employ salespeople, so you'll be speaking directly with a strategist.
               </p>
               
               <div className="space-y-6 pt-8">
                 <ContactItem icon={Mail} title="Email Us" value="hello@strategix.com" />
                 <ContactItem icon={Phone} title="Call Us" value="+1 (555) 123-4567" />
                 <ContactItem icon={MapPin} title="Visit Us" value="123 Innovation Dr, Tech City, TC 94043" />
               </div>
               
               <div className="pt-8">
                  <div className="text-gray-500 text-sm mb-4">Trusted by teams at</div>
                  <div className="flex gap-6 opacity-40 grayscale">
                    {/* Placeholders for logos */}
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                    <div className="h-8 w-24 bg-white/20 rounded"></div>
                  </div>
               </div>
            </div>
            
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
            >
              <Card className="p-8 md:p-10 bg-surface/50 backdrop-blur-xl border-white/10 shadow-2xl">
                 <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">First Name</label>
                          <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600" placeholder="John" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Last Name</label>
                          <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600" placeholder="Doe" />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-300">Email Address</label>
                       <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600" placeholder="john@company.com" />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-300">Project Budget</label>
                       <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-400">
                          <option>$1,000 - $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $50,000</option>
                          <option>$50,000+</option>
                       </select>
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-300">Message</label>
                       <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600" placeholder="Tell us about your goals..."></textarea>
                    </div>
                    
                    <Button variant="primary" className="w-full py-4 text-lg font-medium group">
                       Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </form>
              </Card>
            </motion.div>
         </div>
      </Section>
    </div>
  );
}

function ContactItem({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
       <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-300">
         <Icon size={20} />
       </div>
       <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-white font-medium">{value}</div>
       </div>
    </div>
  )
}
