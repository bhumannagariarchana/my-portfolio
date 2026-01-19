export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python']
    },
    {
      title: 'Web Technologies',
      skills: ['JavaScript', 'React', 'Spring Boot']
    },
    {
      title: 'Databases',
      skills: ['MySQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'REST APIs', 'Machine Learning & NLP']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}