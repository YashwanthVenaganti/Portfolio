// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Experience = () => {
    const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.2 })

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section
            id="experience"
            className="section-container bg-gray-50 dark:bg-dark-800 min-h-screen flex justify-center items-center"
        >
            <div ref={ref} className="w-full max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark-900 dark:text-white">
                    Experience
                </h2>

                {isVisible && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="relative border-l-2 border-primary-500 pl-8 space-y-12"
                    >
                        {portfolioData.experience.map((exp) => (
                            <motion.div
                                key={exp.id}
                                variants={item}
                                className="relative bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[34px] top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800"></span>

                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400">
                                        {exp.role}
                                    </h3>
                                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        {exp.duration}
                                    </span>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg font-medium text-dark-800 dark:text-gray-200">
                                    {exp.company} • {exp.location}
                                </p>

                                <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                                    {exp.description}
                                </p>

                                <ul className="mt-4 space-y-2">
                                    {exp.highlights.map((h, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300"
                                        >
                                            <span className="text-primary-500 mt-1">▹</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
