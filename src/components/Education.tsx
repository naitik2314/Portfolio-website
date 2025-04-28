import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpenIcon, GraduationCapIcon, CalendarIcon } from 'lucide-react';
const educationData = [{
  degree: 'M.S. in Computer Science',
  institution: 'Wayne State University',
  description: 'Deans list, Specialized in statistical modeling, machine learning algorithms, and large-scale data processing systems.'
}, {
  degree: 'B.E in Computer Engineering',
  institution: 'University of Mumbai',
  description: 'Graduated with honors. Focused on computational mathematics, statistics, and early machine learning concepts.'
}];
const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  return <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.5
      }} ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Academic Background
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className="mb-12">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex mt-1">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500">
                        <GraduationCapIcon size={20} className="text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-green-400 mb-4">
                        {edu.specialization}
                      </h4>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <BookOpenIcon size={16} />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Education;