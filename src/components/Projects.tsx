import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, BarChart2Icon, BrainIcon, DatabaseIcon } from 'lucide-react';
const projects = [{
  title: 'Neural Network Forecasting System',
  description: 'Developed a deep learning model for time-series forecasting that outperformed traditional statistical methods by 43%. Implemented using TensorFlow and deployed on AWS SageMaker.',
  tags: ['Deep Learning', 'TensorFlow', 'Time Series', 'AWS'],
  icon: <BrainIcon size={24} className="text-purple-400" />
}, {
  title: 'Customer Segmentation Engine',
  description: 'Created an unsupervised learning system that identified 7 distinct customer segments, enabling targeted marketing campaigns that increased conversion rates by 28%.',
  tags: ['Clustering', 'Python', 'scikit-learn', 'Marketing Analytics'],
  icon: <DatabaseIcon size={24} className="text-green-400" />
}, {
  title: 'Predictive Maintenance Dashboard',
  description: 'Built an interactive dashboard using predictive models to forecast equipment failures before they occur, reducing downtime by 35% and maintenance costs by 22%.',
  tags: ['Predictive Analytics', 'React', 'Python', 'IoT'],
  icon: <BarChart2Icon size={24} className="text-blue-400" />
}];
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  return <section id="projects" className="py-20 bg-gray-800">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <motion.div key={index} initial={{
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
          }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                        {tag}
                      </span>)}
                  </div>
                </div>
                <div className="border-t border-gray-700 p-4 flex justify-between">
                  <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                    <GithubIcon size={16} />
                    <span>View Code</span>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm">
                    <ExternalLinkIcon size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>)}
          </div>
          <div className="text-center mt-12">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Projects;