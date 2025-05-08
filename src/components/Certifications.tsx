import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AwardIcon, CheckCircleIcon, ExternalLinkIcon } from 'lucide-react';
const certifications = [{
  title: 'Azure Data Scientist Associate (Azure, Machine Learning)',
  issuer: 'Microsoft',
  date: '2024',
  description: 'Professional certification validating expertise in designing, training, and deploying machine learning models on Azure'
}, {
  title: 'Data Science Professional Certificate (Python, Data Science, AI)',
  issuer: 'IBM',
  date: '2024',
  description: 'Professional certification validating proficiency in Python-driven data science and AI workflows'
}, {
  title: 'AWS Cloud Fundamentals (AWS, Cloud, Data Engineering)',
  issuer: 'AWS',
  date: '2021',
  description: 'Professional certification validating foundational expertise in AWS cloud and data engineering'
}, {
  title: 'Google Data Analytics',
  issuer: 'Google',
  date: '2021',
  description: 'Professional certification validating expertise in end-to-end data analytics'
}];
const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  return <section id="certifications" className="py-20 bg-gray-800">
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
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={isInView ? {
            opacity: 1,
            scale: 1
          } : {
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.4,
            delay: index * 0.15
          }} className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <AwardIcon size={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {cert.title}
                      </h3>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-yellow-400 text-sm mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircleIcon size={16} />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Certifications;
