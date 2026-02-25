import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const About = () => {
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.2 })

  // Container variant: stagger children animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  // Item variant: fade in from bottom
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section
      id="about"
      className="bg-white dark:bg-dark-900 py-24 px-6"
    >
      <div ref={ref} className="w-full max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark-900 dark:text-white">
          About Me
        </h2>

        {isVisible && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="bg-gray-50 dark:bg-dark-800 p-8 md:p-12 rounded-2xl shadow-lg space-y-10"
          >
            {/* Intro paragraph */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {portfolioData.about.intro}
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              variants={item}
              className="grid sm:grid-cols-2 gap-6 text-left"
            >
              {portfolioData.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex gap-3 items-start bg-white dark:bg-dark-700 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                >
                  <span className="text-primary-500 text-lg mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
