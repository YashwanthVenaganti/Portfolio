// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Projects = () => {
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section
      id="projects"
      className="section-container bg-white dark:bg-dark-900 min-h-screen flex items-center"
    >
      <div ref={ref} className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark-900 dark:text-white text-center">
          Projects
        </h2>

        {isVisible && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {portfolioData.projects.map((proj) => (
              <motion.div
                key={proj.id}
                variants={item}
                className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400">
                  {proj.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mt-2">
                  {proj.description}
                </p>

                {/* Project Duration */}
                {proj.duration && (
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {proj.duration}
                  </p>
                )}

                {/* Technologies */}
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-xs md:text-sm lg:text-base px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-200 dark:bg-dark-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Highlights */}
                {proj.highlights && proj.highlights.length > 0 && (
                  <ul className="mt-4 list-disc list-inside text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-1">
                    {proj.highlights.map((point, idx) => (
                      <li key={idx}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="mt-4 flex gap-2 sm:gap-4 text-xs sm:text-sm md:text-base">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-600 dark:text-primary-400 underline"
                    >
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-600 dark:text-primary-400 underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}