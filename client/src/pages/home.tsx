import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy, SlidersHorizontal, Heart, Check, X, Plus, Minus, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="absolute top-0 left-0 right-0 h-[600vh] z-0 overflow-hidden pointer-events-none">
        {/* Dark Orange - Top Left (Darker and slightly more opaque) */}
        <div className="absolute -top-[2%] -left-[10%] w-[90%] h-[20%] rounded-full bg-[#c2410c] blur-[130px] opacity-50 mix-blend-multiply animate-blob" style={{ animationDelay: '0s' }}></div>
        
        {/* Light Orange - Top Right (Reduced opacity) */}
        <div className="absolute top-[1%] -right-[10%] w-[80%] h-[25%] rounded-full bg-[#fb923c] blur-[110px] opacity-30 mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }}></div>
        
        {/* Blue - Moved further up and increased opacity for more presence */}
        <div className="absolute top-[5%] right-[10%] w-[70%] h-[25%] rounded-full bg-[#60a5fa] blur-[130px] opacity-60 mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }}></div>
        
        {/* Grey - Mid/Bottom Right */}
        <div className="absolute top-[10%] -right-[5%] w-[50%] h-[20%] rounded-full bg-[#94a3b8] blur-[100px] opacity-40 mix-blend-multiply animate-blob" style={{ animationDelay: '1s' }}></div>

        {/* Extended background elements for the longer vertical section */}
         <div className="absolute top-[15%] left-[10%] w-[60%] h-[20%] rounded-full bg-[#fb923c] blur-[150px] opacity-20 mix-blend-multiply animate-blob" style={{ animationDelay: '3s' }}></div>
         <div className="absolute top-[25%] right-[20%] w-[70%] h-[20%] rounded-full bg-[#60a5fa] blur-[150px] opacity-20 mix-blend-multiply animate-blob" style={{ animationDelay: '5s' }}></div>

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
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center group">
              <div className="flex-1 order-2 md:order-1 pl-16 md:pl-0">
                <FadeIn delay={0.1} className="md:ml-auto md:w-fit">
                  <h3 className="text-2xl font-semibold mb-2">Upload Prospective Designs</h3>
                  <ul className="space-y-2 text-slate-600">
                     <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                       <span>Bring your designs, concepts, or samples into one place</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                       <span>Panelo auto-detects styles, variants, and key attributes</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                       <span>Everything is instantly ready for community testing</span>
                     </li>
                   </ul>
                </FadeIn>
              </div>
              
              <div className="relative z-10 order-1 md:order-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-orange-100 text-orange-500 font-bold text-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-orange-200 transition-all duration-300">1</div>
              </div>
              
              <div className="flex-1 order-3 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center group">
              <div className="flex-1 hidden md:block order-1"></div>
              
              <div className="relative z-10 order-1 md:order-2 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-blue-100 text-blue-500 font-bold text-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">2</div>
              </div>
              
              <div className="flex-1 order-2 md:order-3 pl-16 md:pl-0">
                 <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-semibold mb-2">Collect Community Feedback</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span>Real buyers rank products head-to-head</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span>Understand the “why” behind preference</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span>Map styles to audience tastes in minutes</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center group">
              <div className="flex-1 order-2 md:order-1 pl-16 md:pl-0">
                <FadeIn delay={0.3} className="md:ml-auto md:w-fit">
                  <h3 className="text-2xl font-semibold mb-2">Predict Demand</h3>
                  <ul className="space-y-2 text-slate-600">
                     <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></div>
                       <span>See which concepts will win before you commit</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></div>
                       <span>Forecast demand by customer type</span>
                     </li>
                     <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></div>
                       <span>Get clear recommendations for buy depth and assortment mix</span>
                     </li>
                   </ul>
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

      {/* Feedback Methodologies Section */}
      <section className="py-32 px-4 bg-slate-50/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Ranking */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="mb-8 flex justify-center">
                   {/* Placeholder illustration */}
                   <div className="w-full aspect-[4/3] bg-blue-50 rounded-xl flex items-center justify-center">
                    <Trophy className="w-16 h-16 text-blue-200" />
                   </div>
                </div>
                <h3 className="text-2xl font-display text-center mb-2">Product Ranking</h3>
                <p className="text-sm text-slate-500 text-center mb-6">Tournament-style head-to-head comparisons</p>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  <p>Customers compare your products in head-to-head matchups.</p>
                  <p>Our intelligent ranking system surfaces true favorites with statistical confidence so you know what deserves the shelf space and inventory investment.</p>
                </div>
                <div className="space-y-3 border-t border-slate-100 pt-6">
                  {["Relative product popularity", "Confidence-backed decisions", "Smarter buying and assortment planning"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-blue-100 text-blue-600 rounded-full p-0.5"><Check className="w-3 h-3" /></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Attribute Insights */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="mb-8 flex justify-center">
                   {/* Placeholder illustration */}
                   <div className="w-full aspect-[4/3] bg-orange-50 rounded-xl flex items-center justify-center">
                    <SlidersHorizontal className="w-16 h-16 text-orange-200" />
                   </div>
                </div>
                <h3 className="text-2xl font-display text-center mb-2">Attribute Insights</h3>
                <p className="text-sm text-slate-500 text-center mb-6">Detailed attribute-level feedback collection</p>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  <p>Users give direct feedback on things like color, cut, material, and price.</p>
                  <p>It's your window into why certain products resonate giving your design and merchandising teams a creative edge.</p>
                </div>
                <div className="space-y-3 border-t border-slate-100 pt-6">
                  {["Attribute-level performance", "Custom question support", "Design validation and product improvement"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-orange-100 text-orange-600 rounded-full p-0.5"><Check className="w-3 h-3" /></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Preference Mapping */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="mb-8 flex justify-center">
                   {/* Placeholder illustration */}
                   <div className="w-full aspect-[4/3] bg-red-50 rounded-xl flex items-center justify-center">
                    <Heart className="w-16 h-16 text-red-200" />
                   </div>
                </div>
                <h3 className="text-2xl font-display text-center mb-2">Preference Mapping</h3>
                <p className="text-sm text-slate-500 text-center mb-6">Multi-select favorite product identification</p>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  <p>Let customers pick their personal favorites from a curated set.</p>
                  <p>Analyze how products cluster together for given cohorts to reveal bundle opportunities, go-to-market themes, and merchandising strategy.</p>
                </div>
                <div className="space-y-3 border-t border-slate-100 pt-6">
                  {["Product combination analysis", "Cohort-based trends", "GTM guidance for marketing & merchandising"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-red-100 text-red-600 rounded-full p-0.5"><Check className="w-3 h-3" /></div>
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Panelo Section */}
      <section className="py-32 px-4 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-20 text-[#1a1a1a]">Why choose Panelo?</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Panelo */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 h-full">
                <h3 className="text-2xl font-display text-center mb-10 text-slate-900">Without Panelo</h3>
                <div className="space-y-6">
                  {[
                    "Gut-feeling and anecdotal product decisions",
                    "Limited understanding of why products perform",
                    "Slow and inconsistent feedback loops",
                    "Shallow participant insights",
                    "No visibility into early product success signals"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* With Panelo */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-10 border-2 border-blue-100 shadow-lg h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-display text-center mb-10 text-blue-600">With Panelo</h3>
                <div className="space-y-6 relative z-10">
                  {[
                    "Consumer-informed product design and inventory decisions",
                    "Quantitative, data-backed product validation",
                    "Real-time response and trend tracking",
                    "Deep participant segmentation and attribute analysis",
                    "Clear visualizations for easy interpretation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 bg-slate-50/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-20 text-[#1a1a1a]">Choose Your Plan</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Freemium */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full flex flex-col">
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Freemium</h3>
                  <p className="text-slate-500 text-sm mb-6">Try Panelo at no cost</p>
                  <div className="text-4xl font-display font-medium text-slate-900">$0<span className="text-lg text-slate-400 font-sans">/month</span></div>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {["1 survey per month", "20 participants", "10 products max", "Product ranking only", "Foundational Analytics"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 rounded-xl border border-slate-200 font-medium hover:bg-slate-50 transition-colors">
                  Get Started Free
                </button>
              </div>
            </FadeIn>

            {/* Starter */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border-2 border-orange-500 shadow-xl h-full flex flex-col relative transform md:-translate-y-4">
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <p className="text-slate-500 text-sm mb-6">Perfect for small teams</p>
                  <div className="text-4xl font-display font-medium text-orange-600">$299<span className="text-lg text-slate-400 font-sans">/month</span></div>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {["5 surveys per month", "100 participants", "40 products max", "All survey types", "AI insights & analytics"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-orange-200">
                  Get Started
                </button>
              </div>
            </FadeIn>

            {/* Professional */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full flex flex-col">
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <p className="text-slate-500 text-sm mb-6">For growing businesses</p>
                  <div className="text-4xl font-display font-medium text-blue-600">$999<span className="text-lg text-slate-400 font-sans">/month</span></div>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {["Unlimited surveys", "Unlimited participants", "Unlimited products", "Advanced AI analytics", "Priority support"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Enterprise Banner */}
          <FadeIn delay={0.4}>
            <div className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
              
              <div className="max-w-2xl relative z-10">
                <h3 className="text-2xl font-bold mb-3">Need Enterprise Support?</h3>
                <p className="text-slate-200 leading-relaxed">
                  Looking for custom solutions, dedicated support, or higher participant limits? Our enterprise plan is tailored to your specific needs with advanced features and personalized onboarding.
                </p>
              </div>
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg relative z-10 border border-white/10">
                Contact Sales
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-32 px-4 bg-white relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-16 text-[#1a1a1a]">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Who is Panelo made for?",
                  a: "Panelo is designed for retailers, brands, and product teams who want to make data-driven decisions about product development, inventory, and marketing. Whether you're a startup launching new products or an established brand optimizing your assortment, Panelo provides the insights you need."
                },
                {
                  q: "How does Panelo's AI analysis work?",
                  a: "Our platform uses OpenAI's GPT-4 Vision to analyze product images and extract detailed attributes automatically. Combined with customer feedback data, we provide intelligent insights about product performance, customer preferences, and market opportunities."
                },
                {
                  q: "What types of surveys can I create?",
                  a: "Panelo offers three powerful survey types: Product Ranking (tournament-style comparisons), Attribute Insights (detailed feedback on specific product features), and Preference Mapping (favorite product identification). Each method provides unique insights for different business questions."
                },
                {
                  q: "How quickly can I get results?",
                  a: "Results appear in real-time as participants complete surveys. Our dashboard updates automatically, so you can monitor progress and gather insights immediately. Most surveys collect meaningful data within 24-48 hours depending on your audience size."
                },
                {
                  q: "Can I upload my own customer database?",
                  a: "Yes! You can connect your customer data, with intelligent field mapping and demographic segmentation. You can target specific customer segments and analyze how different groups respond to your products."
                },
                {
                  q: "What kind of analytics do I get?",
                  a: "Panelo provides comprehensive analytics including product performance rankings, demographic breakdowns, statistical confidence intervals, AI-generated insights, and actionable recommendations for inventory and marketing decisions."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg text-left font-medium text-slate-900">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
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
