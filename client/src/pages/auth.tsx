import { useState } from "react";
import { motion } from "framer-motion";
import { Check, User, BarChart3, Shield, Zap, Star } from "lucide-react";
import { Link } from "wouter";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#ffaa4c] selection:text-white overflow-hidden relative font-sans">
       {/* Reuse Aurora Background from Home */}
      <div className="absolute top-0 left-0 right-0 h-full min-h-[150vh] z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] -left-[10%] w-[90%] h-[40%] rounded-full bg-[#ea580c] blur-[130px] opacity-50 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[10%] -right-[10%] w-[80%] h-[40%] rounded-full bg-[#f97316] blur-[110px] opacity-40 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[20%] w-[70%] h-[40%] rounded-full bg-[#60a5fa] blur-[130px] opacity-30 mix-blend-multiply animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[40%] rounded-full bg-[#94a3b8] blur-[150px] opacity-40 mix-blend-multiply"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-12 pb-8 text-center px-4">
        <Link href="/">
            <h1 className="text-4xl font-display font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity inline-block">Panelo</h1>
        </Link>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
            <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-xs font-medium text-slate-600 flex items-center gap-1"><Zap className="w-3 h-3 text-green-500"/> AI-Powered</span>
            <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-xs font-medium text-slate-600 flex items-center gap-1"><BarChart3 className="w-3 h-3 text-blue-500"/> Advanced Analytics</span>
            <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-xs font-medium text-slate-600 flex items-center gap-1"><Shield className="w-3 h-3 text-purple-500"/> Enterprise Grade</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN - Auth Form */}
        <div className="lg:col-span-5 space-y-6 lg:mt-24">
            {/* Auth Card */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/60"
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-display font-medium text-slate-800">Welcome</h2>
                    <p className="text-slate-500 text-sm">Access your premium analytics platform</p>
                </div>

                <div className="bg-slate-100/50 p-1 rounded-xl flex mb-8 relative">
                    <div className="w-1/2 h-full absolute top-0 bottom-0 rounded-lg bg-white shadow-sm transition-all duration-300" style={{ left: isSignUp ? '50%' : '0%' }}></div>
                    <button onClick={() => setIsSignUp(false)} className={`flex-1 py-2.5 text-sm font-medium rounded-lg relative z-10 transition-colors ${!isSignUp ? 'text-slate-900' : 'text-slate-500'}`}>Sign In</button>
                    <button onClick={() => setIsSignUp(true)} className={`flex-1 py-2.5 text-sm font-medium rounded-lg relative z-10 transition-colors ${isSignUp ? 'text-slate-900' : 'text-slate-500'}`}>Sign Up</button>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <input type="email" placeholder="demo@panelo.app" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Password</label>
                        <input type="password" placeholder="•••••••" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                    </div>

                    {!isSignUp && (
                         <div className="flex justify-end">
                            <button className="text-xs text-blue-600 font-medium hover:underline">Forgot your password?</button>
                        </div>
                    )}

                    <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-blue-500/25 hover:opacity-95 transition-all active:scale-[0.98] mt-4">
                        {isSignUp ? 'Create Account' : 'Access Platform'}
                    </button>
                </form>
            </motion.div>
        </div>

        {/* RIGHT COLUMN - Plans */}
        <div className="lg:col-span-7">
             <div className="text-center lg:text-left mb-6 lg:mb-8 lg:pl-4">
                <h2 className="text-2xl font-display font-medium text-slate-800">Enterprise Plans</h2>
                <p className="text-slate-500 text-sm">Choose the perfect plan for your organization</p>
             </div>

             <div className="space-y-4">
                {/* Freemium */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-md transition-all cursor-pointer group ${!isSignUp ? 'opacity-60 grayscale' : ''}`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                                <User className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className="font-medium text-slate-900">Freemium</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">$0</span>
                                    <span className="text-xs text-slate-500">/forever</span>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-4 pl-14">
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Product Ranking surveys only</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> 1 survey per month</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> 10 products max</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> 20 participants max</div>
                    </div>
                </motion.div>

                {/* Starter */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`bg-white/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-indigo-500 shadow-lg cursor-pointer relative ${!isSignUp ? 'opacity-80' : ''}`}
                >
                    <div className="absolute -top-3 left-6 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> Recommended
                    </div>
                     <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                                <BarChart3 className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className="font-medium text-slate-900">Starter</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">$299</span>
                                    <span className="text-xs text-slate-500">/month</span>
                                </div>
                             </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-4 pl-14">
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> All survey types</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> 5 surveys per month</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> 40 products max</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> 100 participants max</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> AI-powered product insights</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> Full analytics dashboard</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-indigo-500"/> Cohort segmentation</div>
                    </div>
                </motion.div>

                {/* Professional */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-md transition-all cursor-pointer ${!isSignUp ? 'opacity-60 grayscale' : ''}`}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                                <Shield className="w-5 h-5" />
                             </div>
                             <div>
                                <h3 className="font-medium text-slate-900">Professional</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-900">$999</span>
                                    <span className="text-xs text-slate-500">/month</span>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-4 pl-14">
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Everything in Starter</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Unlimited surveys</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Unlimited products</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Unlimited participants</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Advanced AI tournament analysis</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Bootstrap statistical modeling</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><Check className="w-3 h-3 text-slate-400"/> Priority support</div>
                    </div>
                </motion.div>
             </div>
        </div>

      </div>
    </div>
  );
}
