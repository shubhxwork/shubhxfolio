import React, { useState, useEffect } from 'react';
import { WORK_CATEGORIES, PROJECTS } from '../constants';
import { Category } from '../types';
import ProjectCard from './ProjectCard';

const WorkSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('Video Editing');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('video-editing');

  // Listen for reset filters event from navbar
  useEffect(() => {
    const handleResetFilters = () => {
      setActiveCategory('Video Editing');
      setActiveSubcategory(null);
      setExpandedCategory('video-editing');
    };

    window.addEventListener('resetWorkFilters', handleResetFilters);
    return () => window.removeEventListener('resetWorkFilters', handleResetFilters);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        const categoryMatch = p.category === activeCategory;
        if (!activeSubcategory) return categoryMatch;
        return categoryMatch && p.subcategory === activeSubcategory;
      });

  const selectedCategory = WORK_CATEGORIES.find(cat => cat.name === activeCategory);
  const hasSubcategories = selectedCategory?.subcategories && selectedCategory.subcategories.length > 0;

  const handleCategoryClick = (categoryName: Category | 'All', categoryId?: string) => {
    if (categoryName === 'All') {
      setActiveCategory('All');
      setActiveSubcategory(null);
      setExpandedCategory(null);
    } else {
      // If clicking the same category, toggle expansion
      if (activeCategory === categoryName) {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
      } else {
        // If clicking a different category, set it as active and expand if it has subcategories
        setActiveCategory(categoryName);
        setActiveSubcategory(null);
        const category = WORK_CATEGORIES.find(cat => cat.name === categoryName);
        setExpandedCategory(category?.subcategories && category.subcategories.length > 0 ? category.id : null);
      }
    }
  };

  const handleSubcategoryClick = (subcategory: string, categoryName: Category) => {
    setActiveCategory(categoryName);
    setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory);
    
    // Scroll to projects section after subcategory selection
    setTimeout(() => {
      const projectsSection = document.getElementById('filtered-projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  return (
    <div className="max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className="w-8 sm:w-12 h-1 bg-red-600 rounded-full"></span>
          <span className="text-red-600 font-black text-[8px] sm:text-[10px] uppercase tracking-[0.6em] sm:tracking-[0.8em]">Creative Portfolio</span>
          <span className="w-8 sm:w-12 h-1 bg-red-600 rounded-full"></span>
        </div>
        <h2 className="text-6xl sm:text-8xl md:text-[11rem] font-black text-white tracking-[-0.07em] uppercase leading-[0.75] mb-6 sm:mb-8">
          WORK<br/>
          <span className="text-zinc-900 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]">CATEGORIES</span>
        </h2>
        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Explore our specialized domains of creative excellence, each engineered for maximum impact and conversion.
        </p>
      </div>

      {/* Category Cards Grid - Applied Miller's Law (7±2 items) and Law of Proximity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
        {/* Category Cards */}
        {WORK_CATEGORIES.map((category) => (
          <div key={category.id} className="flex flex-col">
            <button
              onClick={() => handleCategoryClick(category.name as Category, category.id)}
              className={`group p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 text-left relative overflow-hidden
                ${activeCategory === category.name 
                  ? 'bg-red-600 border-red-600 shadow-[0_0_40px_rgba(255,51,51,0.3)] transform scale-105' 
                  : 'bg-zinc-900/50 border-white/10 hover:border-red-600/50 hover:bg-zinc-900/80 hover:scale-102'}`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className={`transform transition-all duration-300 ${expandedCategory === category.id ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                      <svg className="w-5 h-5 text-white/60 group-hover:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 uppercase tracking-tight">
                  {category.name}
                </h3>
                <p className="text-sm sm:text-base font-bold text-white/80 mb-4 sm:mb-6 uppercase tracking-wider">
                  {category.coolName}
                </p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            </button>

            {/* Expandable Subcategories */}
            {category.subcategories && category.subcategories.length > 0 && (
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCategory === category.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-white/60 font-black uppercase text-[8px] tracking-[0.4em] mb-3">
                    Projects ({category.subcategories.length})
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {category.subcategories.map((sub, index) => (
                      <button
                        key={sub}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubcategoryClick(sub, category.name as Category);
                        }}
                        className={`px-4 py-2 rounded-lg text-left transition-all duration-300 text-sm font-bold uppercase tracking-wide transform hover:scale-105
                          ${activeSubcategory === sub 
                            ? 'bg-red-600 text-white shadow-lg scale-105' 
                            : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'}`}
                        style={{ 
                          animationDelay: `${index * 50}ms`,
                          animation: expandedCategory === category.id ? 'slideInUp 0.3s ease-out forwards' : 'none'
                        }}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Category Info */}
      {activeCategory !== 'All' && (
        <div className="flex flex-col items-center mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-red-600"></span>
            <span className="text-red-600 font-black text-[8px] sm:text-[9px] uppercase tracking-[0.4em]">
              {selectedCategory?.coolName}
            </span>
            <span className="w-6 h-[1px] bg-red-600"></span>
          </div>
          
          {activeSubcategory && (
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                {activeSubcategory}
              </h3>
              <p className="text-zinc-500 text-sm">
                Specialized projects in {activeSubcategory.toLowerCase()}
              </p>
              <div className="mt-4 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full inline-block">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
                  {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Projects Grid - Applied Fitts's Law with larger click targets and Law of Common Region */}
      <div id="filtered-projects" className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            // Check if it's a reel for special layout
            const isReel = project.subcategory === 'Reels';
            
            // Dynamic Bento Logic - Mobile first approach
            let colSpan;
            if (isReel) {
              // Reels get smaller, vertical columns
              colSpan = 'md:col-span-3';
            } else {
              // Regular projects use dynamic layout
              const layouts = ['md:col-span-12', 'md:col-span-5', 'md:col-span-7', 'md:col-span-8', 'md:col-span-4'];
              colSpan = layouts[index % layouts.length];
            }
            
            return (
              <div key={project.id} className={`col-span-1 ${colSpan} reveal`}>
                <ProjectCard project={project} />
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-24">
            <div className="text-6xl mb-6">🎨</div>
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
              No Projects Found
            </h3>
            <p className="text-zinc-500 text-lg">
              No projects available for the selected category and subcategory.
            </p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-24 sm:mt-32 pt-16 sm:pt-24 border-t border-white/5">
        <div className="text-center">
          <h4 className="text-4xl sm:text-6xl font-black text-red-600 mb-2">{PROJECTS.length}+</h4>
          <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Total Projects</p>
        </div>
        <div className="text-center">
          <h4 className="text-4xl sm:text-6xl font-black text-white mb-2">{WORK_CATEGORIES.length}</h4>
          <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Categories</p>
        </div>
        <div className="text-center">
          <h4 className="text-4xl sm:text-6xl font-black text-white mb-2">50+</h4>
          <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Happy Clients</p>
        </div>
        <div className="text-center">
          <h4 className="text-4xl sm:text-6xl font-black text-red-600 mb-2">99%</h4>
          <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;