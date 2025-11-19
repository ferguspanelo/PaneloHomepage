import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#ffaa4c] selection:text-white overflow-hidden relative">
      
      {/* Continuous Aurora Background - Spanning Hero & Features */}
      <div className="absolute top-0 left-0 right-0 h-[400vh] z-0 overflow-hidden pointer-events-none">
        {/* Dark Orange - Top Left (Darker and slightly more opaque) */}
        <div className="absolute -top-[5%] -left-[10%] w-[90%] h-[30%] rounded-full bg-[#c2410c] blur-[130px] opacity-50 mix-blend-multiply animate-blob" style={{ animationDelay: '0s' }}></div>
        
        {/* Light Orange - Top Right (Reduced opacity) */}
        <div className="absolute top-[2%] -right-[10%] w-[80%] h-[35%] rounded-full bg-[#fb923c] blur-[110px] opacity-30 mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }}></div>
        
        {/* Blue - Moved further up and increased opacity for more presence */}
        <div className="absolute top-[10%] right-[10%] w-[70%] h-[35%] rounded-full bg-[#60a5fa] blur-[130px] opacity-60 mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Grey - Mid/Bottom Right */}
        <div className="absolute top-[20%] -right-[5%] w-[50%] h-[30%] rounded-full bg-[#94a3b8] blur-[100px] opacity-40 mix-blend-multiply animate-blob" style={{ animationDelay: '1s' }}></div>

        {/* Extended background elements for the longer vertical section */}
         <div className="absolute top-[40%] left-[10%] w-[60%] h-[30%] rounded-full bg-[#fb923c] blur-[150px] opacity-20 mix-blend-multiply animate-blob" style={{ animationDelay: '3s' }}></div>
         <div className="absolute top-[60%] right-[20%] w-[70%] h-[30%] rounded-full bg-[#60a5fa] blur-[150px] opacity-20 mix-blend-multiply animate-blob" style={{ animationDelay: '5s' }}></div>

        {/* Fade to white at the bottom to remove harsh lines */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-transparent mix-blend-difference text-white">
        <div className="text-2xl font-bold tracking-tighter font-display">Panelo</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#features" className="hover:opacity-70 transition-opacity">Capabilities</a>
          <a href="#process" className="hover:opacity-70 transition-opacity">Process</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <FadeIn delay={0.2}>
            <div className="mb-6 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-sm font-medium text-slate-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>AI-powered Consumer x Product Intelligence</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="text-7xl md:text-9xl font-display font-normal tracking-tight leading-[0.95]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-500 to-slate-600">
                Launch Smarter.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
             <h2 className="text-4xl md:text-5xl font-display font-normal text-black tracking-tight leading-tight">
              Identify your winners early. <br className="hidden md:block" />
              Decode the why before you invest.
            </h2>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-light mt-4">
              Embed consumer insights into your product range architecture and drive profitability through your loyalty program.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-[#1a1a1a] text-white font-medium text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group">
                Start Predicting Demand
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 text-[#1a1a1a] font-medium text-lg hover:bg-white/70 transition-all shadow-sm hover:shadow-md active:scale-95">
                Book a Demo
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section - Vertical ZigZag */}
      <section id="features" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-32 text-slate-900">
              Consumer-Informed Product Assortment
            </h2>
          </FadeIn>

          <div className="space-y-32">
            {/* Item 1: Supercharged Creativity */}
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="flex-1 space-y-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a1a]">Supercharged Creativity</h3>
                  <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                    <p>AI allows designers to create more iterations than ever before.</p>
                    <p>But which ones will resonate most? Don't guess.</p>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-slate-100/50 border border-white/50 shadow-sm backdrop-blur-sm flex items-center justify-center">
                  <span className="text-slate-400 font-light">Image / Video Placeholder</span>
                </div>
              </div>
            </FadeIn>

            {/* Item 2: Consumers Decide */}
            <FadeIn>
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                <div className="flex-1 space-y-6 text-left md:text-left"> {/* Kept text align left for consistency even on right side */}
                  <h3 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a1a]">Consumers Decide</h3>
                  <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                    <p>Invite your audience in to embed insights earlier</p>
                    <p>Optimize your success by letting consumers identify the winners</p>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-slate-100/50 border border-white/50 shadow-sm backdrop-blur-sm flex items-center justify-center">
                  <span className="text-slate-400 font-light">Image / Video Placeholder</span>
                </div>
              </div>
            </FadeIn>

            {/* Item 3: Product Intelligence */}
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="flex-1 space-y-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a1a]">Product Intelligence</h3>
                  <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                    <p>Transform community feedback into actionable data.</p>
                    <p>Launch the right products in the right quantities.</p>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-slate-100/50 border border-white/50 shadow-sm backdrop-blur-sm flex items-center justify-center">
                  <span className="text-slate-400 font-light">Image / Video Placeholder</span>
                </div>
              </div>
            </FadeIn>

            {/* Item 4: Avoid Costly Mistakes */}
            <FadeIn>
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                <div className="flex-1 space-y-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a1a]">Avoid Costly Mistakes</h3>
                  <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                     <p>An informed and accurate inventory buy transforms your season.</p>
                     <p>Maximize performance and ensure long-term profitability.</p>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-slate-100/50 border border-white/50 shadow-sm backdrop-blur-sm flex items-center justify-center">
                  <span className="text-slate-400 font-light">Image / Video Placeholder</span>
                </div>
              </div>
            </FadeIn>

            {/* Item 5: Profitability Driver */}
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="flex-1 space-y-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a1a]">Profitability Driver</h3>
                  <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                    <p>A new driver of profitability in your loyalty program.</p>
                    <p>Your community informs inventory buys. Earn rewards for participation.</p>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-slate-100/50 border border-white/50 shadow-sm backdrop-blur-sm flex items-center justify-center">
                  <span className="text-slate-400 font-light">Image / Video Placeholder</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-4 bg-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-medium text-[#1a1a1a] mb-4">The Panelo Process</h2>
              <p className="text-xl text-slate-500">From design to demand in three steps.</p>
            </div>
          </FadeIn>

          <div className="space-y-16 relative">
            {/* Connector Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -z-10 md:-translate-x-1/2"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
              <div className="flex-1 md:text-right order-2 md:order-1">
                <FadeIn delay={0.1} className="md:ml-auto">
                  <h3 className="text-2xl font-semibold mb-2">Upload Prospective Designs</h3>
                  <p className="text-slate-600">Input your concepts, sketches, or renders directly into the platform.</p>
                </FadeIn>
              </div>
              
              <div className="relative z-10 order-1 md:order-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-orange-100 text-orange-500 font-bold text-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-orange-200 transition-all duration-300">1</div>
              </div>
              
              <div className="flex-1 order-3 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
              <div className="flex-1 hidden md:block order-1"></div>
              
              <div className="relative z-10 order-1 md:order-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-blue-100 text-blue-500 font-bold text-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">2</div>
              </div>
              
              <div className="flex-1 order-2 md:order-3">
                 <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-semibold mb-2">Collect Community Feedback</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Product Ranking</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Attribute Level Insights</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>Preference Mapping</li>
                  </ul>
                </FadeIn>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
              <div className="flex-1 md:text-right order-2 md:order-1">
                <FadeIn delay={0.3} className="md:ml-auto">
                  <h3 className="text-2xl font-semibold mb-2">Predict Demand</h3>
                  <p className="text-slate-600">Panelo analyzes the data to surface what drives preference and predicts market success.</p>
                </FadeIn>
              </div>
              
              <div className="relative z-10 order-1 md:order-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-200 text-slate-500 font-bold text-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-slate-300 transition-all duration-300">3</div>
              </div>
              
              <div className="flex-1 order-3 hidden md:block"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#1a1a1a] text-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-display font-bold tracking-tighter">Panelo</div>
          <div className="text-slate-400 text-sm">© 2025 Panelo Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
