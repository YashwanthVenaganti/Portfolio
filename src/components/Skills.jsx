// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Skills = () => {
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
    const iconMap = {
        Java: "java",
        JavaScript: "javascript",
        "JavaScript (ES6+)": "javascript",
        SQL: "mysql",
        "React.js": "react",
        HTML5: "html5",
        CSS3: "css3",
        "Material UI": "mui",
        "Tailwind CSS": "tailwindcss",
        "Framer Motion": "framer",
        "Spring Boot": "springboot",
        "Spring Cloud": "spring",
        "Spring Security": "springsecurity",
        MySQL: "mysql",
        Docker: "docker",
        Jenkins: "jenkins",
        Kubernetes: "kubernetes",
        Git: "git",
        GitHub: "github",
        Linux: "linux",
        Jira: "jira",
        Postman: "postman",
        Swagger: "swagger",
        AWS: "amazonaws"
    }

    return (
        <section
            id="skills"
            className="bg-gray-50 dark:bg-dark-800 min-h-screen flex justify-center items-center px-6"
        >
            <div ref={ref} className="w-full max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-dark-900 dark:text-white">
                    Skills
                </h2>

                {isVisible && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {Object.entries(portfolioData.skills).map(([category, skills]) => (
                            <motion.div
                                key={category}
                                variants={item}
                                className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300"
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400 capitalize text-center">
                                    {category}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-2 bg-gray-100 dark:bg-dark-600 px-3 py-2 rounded-lg text-xs sm:text-sm md:text-base"
                                        >
                                            {iconMap[skill] && (
                                                <img
                                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconMap[skill]}.svg`}
                                                    alt={skill}
                                                    className="w-5 h-5"
                                                />
                                            )}
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    )
}
