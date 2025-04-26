import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
const experiences = [{
  title: 'Senior Data Scientist',
  company: 'Tech Innovations Inc.',
  duration: '2021 - Present',
  location: 'San Francisco, CA',
  description: ['Led a team of 5 data scientists in developing predictive models that increased customer retention by 35%', 'Implemented advanced NLP algorithms for sentiment analysis on 10M+ customer reviews', 'Developed a real-time anomaly detection system that reduced fraud by 28%']
}, {
  title: 'Machine Learning Engineer',
  company: 'DataDrive Solutions',
  duration: '2018 - 2021',
  location: 'Boston, MA',
  description: ['Designed and deployed recommendation systems that increased user engagement by 42%', 'Built computer vision models for automated quality control, reducing defects by 18%', 'Optimized ML pipelines, reducing training time by 60% and infrastructure costs by 30%']
}, {
  title: 'Data Analyst',
  company: 'Analytics Advantage',
  duration: '2016 - 2018',
  location: 'Chicago, IL',
  description: ['Created interactive dashboards to visualize KPIs for executive leadership', 'Performed statistical analysis to identify market trends and opportunities', 'Automated reporting processes, saving 15 hours of manual work per week']
}];
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  return <section id="experience" className="py-20 bg-gray-900">
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((job, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 50
          }} transition={{
            duration: 0.5,
            delay: index * 0.2
          }} className="mb-12 relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start pt-1">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500 z-10">
                      <BriefcaseIcon size={24} className="text-blue-400" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {job.title}
                      </h3>
                      <h4 className="text-lg text-blue-400 mb-4">
                        {job.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <CalendarIcon size={16} />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.description.map((item, i) => <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                            <span className="text-gray-300">{item}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Experience;