import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <Link to="/" className="group inline-flex items-center gap-3 sm:gap-4 text-zinc-500 hover:text-white transition-colors mb-16 sm:mb-24 uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] font-black">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </div>
          Back to Home
        </Link>

        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 sm:mb-8 uppercase leading-[0.8]">
            PRIVACY<br/>
            <span className="text-red-600">POLICY.</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl">Last updated: February 1, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">Information We Collect</h2>
              <p className="text-zinc-300 leading-relaxed mb-4 text-sm sm:text-base">
                We collect information you provide directly to us, such as when you contact us through our website, 
                use our AI assistant, or engage with our services.
              </p>
              <ul className="text-zinc-300 space-y-2 ml-4 sm:ml-6 text-sm sm:text-base">
                <li>• Contact information (name, email address)</li>
                <li>• Messages and communications</li>
                <li>• Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">How We Use Information</h2>
              <p className="text-zinc-300 leading-relaxed mb-4 text-sm sm:text-base">
                We use the information we collect to:
              </p>
              <ul className="text-zinc-300 space-y-2 ml-4 sm:ml-6 text-sm sm:text-base">
                <li>• Provide and improve our services</li>
                <li>• Respond to your inquiries</li>
                <li>• Send you updates about our work</li>
                <li>• Analyze usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">AI Assistant</h2>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Our AI assistant uses Google's Gemini API to provide responses. Conversations are processed 
                to generate relevant responses about our work and services. We do not store conversation 
                history permanently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">Contact</h2>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:shubhxwork@gmail.com" className="text-red-600 hover:text-red-400 transition-colors">
                  shubhxwork@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;