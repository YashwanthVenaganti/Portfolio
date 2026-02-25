// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Education = () => {
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
      id="education"
      className="bg-gray-50 dark:bg-dark-900 py-24 px-6 flex justify-center"
    >
      <div ref={ref} className="w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark-900 dark:text-white">
          Education
        </h2>

        {isVisible && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={item}
                className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg space-y-3 text-left"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400">
                  {edu.institution}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {edu.degree} in {edu.field} | {edu.duration}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
                  Location: {edu.location} | CGPA: {edu.cgpa}
                </p>

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-4 text-left pt-4 border-t border-gray-300 dark:border-dark-600">
                    <p className="font-medium text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 mb-2">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 dark:bg-dark-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}