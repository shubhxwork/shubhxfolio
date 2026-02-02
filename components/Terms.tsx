import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
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
            TERMS OF<br/>
            <span className="text-red-600">WORK.</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl">Last updated: February 1, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Services</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We provide high-end visual design services including:
              </p>
              <ul className="text-zinc-300 space-y-2 ml-6">
                <li>• UI/UX Design & Research</li>
                <li>• Full-stack Engineering</li>
                <li>• Video Editing & Post-Production</li>
                <li>• Thumbnail Design & Strategy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Project Process</h2>
              <div className="text-zinc-300 space-y-4">
                <p><strong className="text-white">Discovery:</strong> We start with a comprehensive brief to understand your vision and requirements.</p>
                <p><strong className="text-white">Design:</strong> We create initial concepts and iterate based on your feedback.</p>
                <p><strong className="text-white">Delivery:</strong> Final assets are delivered in agreed formats with full documentation.</p>
                <p><strong className="text-white">Support:</strong> We provide post-delivery support for implementation and minor revisions.</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Payment Terms</h2>
              <ul className="text-zinc-300 space-y-2 ml-6">
                <li>• 50% deposit required to begin work</li>
                <li>• Final 50% due upon project completion</li>
                <li>• Payment terms: Net 15 days</li>
                <li>• Late payments subject to 1.5% monthly fee</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Intellectual Property</h2>
              <p className="text-zinc-300 leading-relaxed">
                Upon full payment, you receive full rights to the final deliverables. We retain the right 
                to showcase the work in our portfolio and case studies. All source files and working 
                documents remain our property unless specifically agreed otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Contact</h2>
              <p className="text-zinc-300 leading-relaxed">
                Ready to start your project? Get in touch at{' '}
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

export default Terms;