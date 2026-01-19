import { Brain, Users, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'Problem-solving',
      description: 'Analytical approach to complex challenges'
    },
    {
      icon: Zap,
      title: 'Quick learner',
      description: 'Adaptable to new technologies'
    },
    {
      icon: Users,
      title: 'Team player',
      description: 'Collaborative and communicative'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            I'm a Computer Science student specializing in AI & ML, passionate about building real-world tech solutions. Strong in Java, DSA, and full-stack development, with a growing focus on intelligent systems. I love exploring new technologies and applying them to solve complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}