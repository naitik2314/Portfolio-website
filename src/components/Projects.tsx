import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ExternalLinkIcon,
  GithubIcon,
  BarChart2Icon,
  BrainIcon,
  DatabaseIcon,
} from 'lucide-react'

// Project data - ensure demoUrl is only present for projects that have a live demo
const projects = [
  {
    title: 'Sequential Recommender using Reinforcement Learning',
    description:
      'Built a modular RL-based recommender in PyTorch + Gym (dueling Double-DQN with LSTM state encoder, cosine-similarity retrieval, prioritized replay, Noisy Nets and adaptive ε-decay), boosting simulated session rewards 7.8x, cutting discovery-fatigue exits by 65%, and serving 10-item slate recommendations via a Dockerized API in < 15 ms',
    tags: ['Deep Learning', 'Gym', 'PyTorch', 'RL'],
    icon: <BrainIcon size={24} className="text-purple-400" />,
    githubUrl: 'https://github.com/naitik2314/SequentialRecommender-RL',
    // No demoUrl for this project
  },
  {
    title: 'Notique', // This project has a demoUrl and should display the "Live Demo" link
    description:
      'Developed a GenAI assistant app with Next.js, FastAPI and a fine-tuned Llama-3 model to automate note-taking and scheduling (boosting user efficiency by 25%), integrated LangChain for personalized workflows, driving 50+ daily active users and enabling scalable customization.',
    tags: ['Generative AI', 'Python', 'Full Stack', 'Llama 3', 'Hugging Face'],
    icon: <DatabaseIcon size={24} className="text-green-400" />,
    githubUrl: 'https://github.com/naitik2314/Notique',
    demoUrl: 'https://notique.vercel.app/', // Demo URL is present
  },
  {
    title: 'ML Dataset Explorer',
    description:
      'Built ML Dataset Explorer, a Vercel-deployed Next.js app with a minimalist UI and dynamic visualizations, enabling users to interactively compare classification and regression model performance across multiple prefilled datasets and intuitively understand dataset-model relationships.',
    tags: ['Machine Learning', 'TypeScript', 'Next.js', 'Vercel'],
    icon: <BarChart2Icon size={24} className="text-blue-400" />,
    githubUrl: 'https://github.com/naitik2314/ML-Dataset-Explorer',
    demoUrl: 'https://ml-dataset-explorer.vercel.app/', // This project has a demo URL
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false, // Animation triggers every time it comes into view
    amount: 0.2, // Trigger animation when 20% of the element is visible
  })

  const GITHUB_PROFILE_URL = 'https://github.com/naitik2314'; // Your GitHub profile URL

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.5,
          }}
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 50, 
                      }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.2, 
                }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500/70 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Project content container */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links container - pushed to the bottom */}
                <div className="border-t border-gray-700 mt-auto p-4 flex justify-between items-center bg-gray-900/50">
                  {/* GitHub Link - rendered if githubUrl exists */}
                  {project.githubUrl && (
                     <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 flex items-center gap-1.5 text-sm font-medium transition-colors duration-300"
                        aria-label={`View code for ${project.title} on GitHub`}
                     >
                        <GithubIcon size={18} />
                        <span>View Code</span>
                     </a>
                  )}

                  {/* Live Demo Link - conditionally rendered if demoUrl exists */}
                  {project.demoUrl && ( 
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5 text-sm font-medium transition-colors duration-300"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLinkIcon size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {/* If only githubUrl is present, it will be on the left.
                    If only demoUrl is present (hypothetically), it would be on the left.
                    If both are present, justify-between will space them out.
                    If neither is present, this div will still render but be empty.
                  */}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16"> 
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(128, 90, 213, 0.5)", 
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3.5 px-10 rounded-lg font-semibold shadow-xl hover:from-purple-500 hover:to-blue-400 transition-all duration-300 cursor-pointer text-base"
              >
                View All Projects on GitHub
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Projects
