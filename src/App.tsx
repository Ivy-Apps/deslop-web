import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Code2, 
  Trash2, 
  Copy, 
  Globe, 
  Terminal, 
  ChevronRight, 
  Check, 
  AlertCircle,
  ArrowRight,
  Menu,
  X,
  Github
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-black font-bold text-lg leading-none">δ</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Deslop</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-300 hover:text-white transition-colors">Features</a>
          <a href="#integrations" className="text-sm text-zinc-300 hover:text-white transition-colors">Integrations</a>
          <a href="#pricing" className="text-sm text-zinc-300 hover:text-white transition-colors">Pricing</a>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
            Get Personal License
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#features" className="text-lg text-zinc-400" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#rules" className="text-lg text-zinc-400" onClick={() => setIsMobileMenuOpen(false)}>Rulebook</a>
            <a href="#docs" className="text-lg text-zinc-400" onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
            <button className="bg-white text-black px-6 py-3 rounded-xl text-lg font-medium">
              Add Deslop to my CI
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CodeBlock = ({ code, language = 'typescript', filename, className = "" }: { code: string, language?: string, filename?: string, className?: string }) => {
  return (
    <div className={`bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden font-mono text-sm ${className}`}>
      {filename && (
        <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
          <span className="text-zinc-400 text-xs font-medium">{filename}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="text-zinc-200">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const BeforeAfter = ({ before, after, beforeFilename, afterFilename, title }: { before: string, after: string, beforeFilename: string, afterFilename: string, title?: string }) => {
  return (
    <div className="space-y-4">
      {title && <h4 className="text-zinc-400 text-sm font-medium uppercase tracking-wider">{title}</h4>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-medium text-zinc-500 uppercase">Before AI Slop</span>
          </div>
          <CodeBlock code={before} filename={beforeFilename} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-zinc-500 uppercase">After Deslop</span>
          </div>
          <CodeBlock code={after} filename={afterFilename} />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, children }: { icon: any, title: string, description: string, children?: React.ReactNode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all group"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-300 leading-relaxed mb-8">{description}</p>
      {children}
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]"></div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Your AI writes code.<br />Deslop makes it <span className="text-white">Senior-grade.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The architectural guardrail for the Agentic era. Reordering logic, fixing imports, and enforcing boundaries via MCP for Cursor and Claude Code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                Get Personal License — $10.99/mo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Request Team Access
              </button>
            </div>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Deslop acts as the "Senior Overlord" that reviews your AI’s work in real-time. Zero-config aesthetics for fragmented AI output.
            </p>
          </motion.div>

          {/* Hero Image/Code Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-24 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-white/5">
              <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                    <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  </div>
                  <span className="text-zinc-500 text-sm font-mono">deslop.config.yaml</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-xs">
                  <Terminal className="w-4 h-4" />
                  <span>CI/CD Pipeline</span>
                </div>
              </div>
              <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed text-zinc-400">
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">1</span>
                  <span><span className="text-white">name:</span> Demo Rulebook</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">2</span>
                  <span><span className="text-white">rules:</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">3</span>
                  <span className="pl-4 text-zinc-600"># P0</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">4</span>
                  <span className="pl-4">- <span className="text-white">id:</span> no-react-in-core</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">5</span>
                  <span className="pl-8"><span className="text-white">description:</span> "The core must not have React dependencies"</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">6</span>
                  <span className="pl-8"><span className="text-white">target:</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">7</span>
                  <span className="pl-12">- @/client/core/**/*</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">8</span>
                  <span className="pl-12">- @/server/**/*</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">9</span>
                  <span className="pl-8"><span className="text-white">forbidden:</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">10</span>
                  <span className="pl-12">- <span className="text-white">import:</span> react</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none">11</span>
                  <span className="pl-16"><span className="text-white">transitive:</span> true</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Big Three (Black Background) */}
      <section id="features" className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">The Big Three</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Deslop bridges the gap between high-speed AI code generation and senior-level architectural standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Relative Import Fixer"
              description="Eliminates brittle ../../ paths instantly using AST-based resolution. Keeps your imports clean and refactor-safe."
            >
              <div className="mt-4">
                <BeforeAfter 
                  before={`import { User } from '../../../../types';`}
                  after={`import { User } from '@/types';`}
                  beforeFilename="Profile.tsx"
                  afterFilename="Profile.tsx"
                />
              </div>
            </FeatureCard>

            <FeatureCard 
              icon={Code2}
              title="Step-Down Ordering"
              description="Reorders functions so the 'story' reads top-to-bottom. Turns fragmented AI output into clean, narrative code instantly."
            >
              <div className="mt-4 space-y-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">1. Main Function</span>
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">2. Helper A</span>
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">3. Helper B</span>
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </FeatureCard>

            <FeatureCard 
              icon={Shield}
              title="Architectural RuleBook"
              description="Enforces dependency boundaries and bans 'bad' imports. High-speed Haskell engine ensures your rules are never ignored."
            >
              <div className="mt-4">
                <CodeBlock 
                  code={`rules:\n  - id: no-react-in-core\n    forbidden:\n      - import: react\n        transitive: true`}
                  filename="deslop.config.yaml"
                />
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Section 3: Integration Ecosystem (Gray Background) */}
      <section id="integrations" className="py-24 md:py-32 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Integration Ecosystem</h2>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Deslop lives where you code. Whether it's real-time feedback in your editor or automated gatekeeping in your CI.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <Terminal className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Local MCP Server</h4>
                  <p className="text-sm text-zinc-400">Native integration with Cursor and Claude Code for real-time sanitization.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                    <Github className="w-5 h-5 text-green-500" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">CI Mode</h4>
                  <p className="text-sm text-zinc-400">Deslop GitHub Action for automated PR gatekeeping and slop detection.</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-30" />
              <div className="relative bg-black border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-zinc-500 ml-2">Cursor / Claude Code Console</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-zinc-500">{">"} deslop --fix</p>
                  <p className="text-green-400">✔ Analyzing project structure...</p>
                  <p className="text-green-400">✔ Reordering functions in AuthProvider.tsx</p>
                  <p className="text-green-400">✔ Resolving 12 relative imports</p>
                  <p className="text-purple-400">ℹ RuleBook: 0 violations found.</p>
                  <p className="text-white">Done. Your code is now Senior-grade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing (Black Background) */}
      <section id="pricing" className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Simple, Transparent Pricing</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Choose the plan that fits your workflow. From solo power-users to engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Personal License */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Personal License</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$10.99</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <p className="text-zinc-400 mb-8">Perfect for solo developers using AI agents to build faster.</p>
              <ul className="space-y-4 mb-10">
                {[
                  "Local CLI + MCP Server",
                  "Unlimited local refactors",
                  "Personal RuleBook config",
                  "Step-Down Ordering engine",
                  "Relative Import Fixer"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all">
                Get Personal License
              </button>
            </div>

            {/* CI / Team License */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 group">
              <h3 className="text-2xl font-bold text-white mb-2">CI / Team License</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$12.99</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <p className="text-zinc-400 mb-8">For teams that want to adopt AI without sacrificing integrity.</p>
              <ul className="space-y-4 mb-10">
                {[
                  "Includes all Personal features",
                  "GitHub Action integration",
                  "Per-Repository enforcement",
                  "Team-wide RuleBook sync",
                  "Priority Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <Check className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                Request Team Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Error Reporting (Black Background) */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Optimized for AI and MCP</h2>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Deslop reports errors in a LLM-friendly Markdown format with clear instructions on how to fix them. Perfect for integration with Cursor, Windsurf, or your custom MCP server.
              </p>
              <ul className="space-y-4">
                {[
                  "Machine-readable Markdown output",
                  "Clear 'FIX' instructions for agents",
                  "Context-aware error reporting",
                  "Seamless CI/CD integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-200">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-50" />
              <CodeBlock 
                code={`# /src/app/[locale]/login/page.tsx: no-relative-imports\nRelative imports are not allowed. Use absolute path aliased ones.\n\n\`\`\`ts\nimport { validateUsername } from '../../../features/login/login-form';\n\`\`\`\n\nFIX: Use \`import { validateUsername } from '@/features/login/login-form';\` instead.\n---------`}
                filename="deslop-report.md"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Intl (Gray Background) */}
      <section className="py-24 md:py-32 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <CodeBlock 
                    code={`export const fetchUser = async (id: string) => {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n};\n\nexport const UserProfile = () => {\n  // ... component logic\n};`}
                    filename="user-profile.tsx"
                    className="opacity-90"
                  />
                  <div className="flex justify-center">
                    <motion.div 
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90" />
                    </motion.div>
                  </div>
                  <CodeBlock 
                    code={`export const UserProfile = () => {\n  // ... component logic\n};\n\nexport const fetchUser = async (id: string) => {\n  const res = await fetch(\`/api/users/\${id}\`);\n  return res.json();\n};`}
                    filename="user-profile.tsx"
                    className="border-green-500/30"
                  />
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Step-Down Ordering</h2>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Deslop reorders your functions so the "story" reads top-to-bottom. High-level logic first, implementation details last. Clean Code compliant, automatically.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Haskell Engine</p>
                    <p className="text-xs text-zinc-400">Purely Functional | AST-Safe</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-300">Our high-speed Haskell engine performs deep AST analysis to ensure reordering never breaks your logic.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section (Black Background) */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">Your AI writes code.<br />Deslop makes it Senior-grade.</h2>
          <p className="text-xl text-zinc-400 mb-12">
            Join 500+ developers turning fragmented AI output into clean, maintainable, and architectural code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-2xl text-xl font-bold hover:bg-zinc-200 transition-all">
              Get Personal License — $10.99/mo
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-white/5 transition-all">
              Request Team Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">δ</span>
            </div>
            <span className="text-lg font-bold">Deslop</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <p className="text-sm text-zinc-500">© 2026 Deslop Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
