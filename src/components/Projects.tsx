import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ExternalLinkIcon,
  GithubIcon,
  BarChart2Icon,
  BrainIcon,
  DatabaseIcon,
} from 'lucide-react'

const projects = [
  {
    title: 'Sequential Recommender using Reinforcement Learning',
    description:
      'Built a modular RL-based recommender in PyTorch + Gym (dueling Double-DQN with LSTM state encoder, cosine-similarity retrieval, prioritized replay, Noisy Nets and adaptive ε-decay), boosting simulated session rewards 7.8x, cutting discovery-fatigue exits by 65%, and serving 10-item slate recommendations via a Dockerized API in < 15 ms',
    tags: ['Deep Learning', 'Gym', 'PyTorch'],
    icon: <BrainIcon size={24} className="text-purple-400" />,
    githubUrl: 'https://github.com/naitik2314/SequentialRecommender-RL', // Replace with actual project GitHub URL
  },
  {
    title: 'Notique',
    description:
      'CDeveloped a GenAI assistant app with Next.js, FastAPI and a fine-tuned Llama-3 model to automate note-taking and scheduling (boosting user efficiency by 25%), integrated LangChain for personalized workflows, driving 50+ daily active users and enabling scalable customization',
    tags: ['Generative AI', 'Python', 'Full Stack', 'Llama 3 fine tuned', 'Hugging Face'],
    icon: <DatabaseIcon size={24} className="text-green-400" />,
    githubUrl: 'https://github.com/naitik2314/Notique', // Replace with actual project GitHub URL
  },
  {
    title: 'ML Dataset Explorer',
    description:
      'Built ML Dataset Explorer, a Vercel-deployed Next.js app with a minimalist UI and dynamic visualizations, enabling users to interactively compare classification and regression model performance across multiple prefilled datasets and intuitively understand dataset-model relationships',
    tags: ['Machine Learning', 'TypeScript', 'Python', 'Education'],
    icon: <BarChart2Icon size={24} className="text-blue-400" />,
    githubUrl: 'https://github.com/naitik2314/ML-Dataset-Explorer', // Replace with actual project GitHub URL
    demoUrl: 'https://ml-dataset-explorer.vercel.app/', // Replace with actual project demo URL
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
  })

  const GITHUB_PROFILE_URL = 'https://github.com/naitik2314'; // Your GitHub profile URL

  return (
    <section id="projects" className="py-20 bg-gray-800">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white"> {/* Ensured text is visible */}
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
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
              >
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
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-700 p-4 flex justify-between mt-auto"> {/* Added mt-auto to push links to the bottom */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
                  >
                    <GithubIcon size={16} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    <ExternalLinkIcon size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              // The button itself doesn't need to be an interactive element if wrapped by an anchor
              // but Framer Motion works well with 'a' tags directly too if you prefer.
              // For simplicity here, the anchor wraps the styled button-like div or motion.div.
            >
              <motion.div // Changed button to motion.div to be a styled block inside the anchor
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
              >
                View All Projects
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Projects
