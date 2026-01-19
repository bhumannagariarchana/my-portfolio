import { ArrowDown, Download, FolderGit2 } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-6 pt-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold mx-auto shadow-lg">
            BA
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Bhumannagari Archana
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
          Software Engineering Student
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate about building innovative web solutions and solving complex problems through code
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FolderGit2 className="w-5 h-5" />
            View Projects
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
        >
          <ArrowDown className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </section>
  );
}