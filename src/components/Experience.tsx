import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
const experiences = [{
  title: 'Founder & Machine Learning Engineer',
  company: 'CuraNote (Healthcare SaaS Startup - Succesfully Acquired)',
  duration: 'Aug 2023 - Apr 2025',
  location: 'Detroit, MI',
  description: ['Developed an offline, HIPAA-compliant AI voice agent that generates clinical notes at 95% accuracy, reducing manual transcription by 30 hrs/user month ', 'Fine-tuned LLM (Llama-2) via Hugging Face and implemented a RAG architecture to securely integrate EHR data', 'Engineered a multimodal NLP pipeline (Vosk + Llama-2) to process over 1TB of clinical data monthly across 10 labs', 'Built a full-stack solution using Python (FastAPI), React, PostgreSQL, and Docker, streamlining deployment and continuous delivery within an MLOps framework']
}, {
  title: 'Data Scientist (Co-op)',
  company: 'DTE Energy',
  duration: 'Jan 2024 - Dec 2024',
  location: 'Detroit, MI',
  description: ['Engineered a real-time Transformer based call-assist model, slashing average handle time by 25% (120 s to 90 s)', 'Built a predictive model on Azure to classify new customers’ low-income status (77% accuracy, 0.85 AUC), assign FPL levels, and assess risk for 2.3M+ accounts saving $750K, and integrated MLFlow and Grafana for monitoring', 'Implemented automated hyperparameter tuning with Bayesian optimization and cross-validation, boosting predictive performance by 10% and reducing overfitting across heterogeneous big data sources', 'Reduced program evaluation time by 35% using advanced data mining and multivariate analysis with Pandas and SQL', 'Designed and automated robust Databricks ETL pipelines integrating 50+ SAP workflows, achieving 99.9% reliability', 'Processed 100GB/hr speech data with PySpark, cutting support calls by 10K+ and visualizing insights in Power BI']
}, {
  title: 'Associate Machine Learning Engineer',
  company: 'Nylex Group',
  duration: 'Jan 2021 - Oct 2022',
  location: 'Mumbai, MH',
  description: ['Deployed a TensorFlow LSTM delivery-forecast model on AWS, achieving 93% accuracy and improving supply chain', 'Engineered a real-time computer vision system using PyTorch on AWS that cut workplace injuries by 43%', 'Managed the deployment of 15+ production ML models on AWS using Kubernetes, achieving 99.8% uptime through robust lifecycle management and Git-based version control']
}, {
  title: 'Data Analyst',
  company: 'Nylex Group',
  duration: 'Nov 2019 - Dec 2020',
  location: 'Mumbai, MH',
  description: ['Conducted statistical analysis - including regression, ANOVA, and hypothesis testing - on 1 M+ records, boosting forecast accuracy by 18% and reducing planning errors by 22%', 'Developed predictive models (linear regression, decision trees) to forecast KPIs, improving accuracy by 15% and cutting inventory overhead by INR 20M', 'Optimized SQL queries; redesigned database schemas for a multi-source data warehouse, reducing query times by 50%']
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