import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  B.Tech in Computer Science (AI & Machine Learning)
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  B V Raju Institute of Technology
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Expected Graduation: 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Telangana, India</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600">
                    <span className="font-semibold">Relevant Coursework:</span> Data Structures, Algorithms, Database Management Systems, Web Development, Operating Systems, Computer Networks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}