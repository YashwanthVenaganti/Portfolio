import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Hi! 👋 I\'m Yashwanth — a  Full-Stack Developer from Hyderabad.\nHow can I assist you today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');

    const quickReplies = [
        'Hello!',
        'Tell me about your skills',
        'Tell me about your experience',
        'What projects have you worked on?',
        'Education & certifications',
        'Let\'s collaborate',
        'Contact you later',
    ];

    const botResponses = {
        hello: 'Hey there! 👋 Glad you reached out. I\'m Yashwanth Venaganti, passionate about building scalable full-stack applications with React & Spring Boot. Ask me anything!',

        skills: `My core technical skills include:

Frontend → React.js, JavaScript (ES6+), HTML5, CSS3, Material UI (MUI)
Backend → Java, Spring Boot, Spring Cloud, Spring Security, RESTful APIs, JPA/Hibernate, JWT
Databases → MySQL (with indexing & query optimization)
DevOps & Cloud → AWS (EC2, RDS, S3), Docker, Jenkins, CI/CD pipelines, Kubernetes (basics)

Anything you'd like to dive deeper into?`,

        experience: `Current → Software Engineer @ ADPCX, Bangalore (Oct 2025 – Present)
• RESTful APIs with Spring Boot
• Responsive React UIs + Axios integration
• State management improvements (reduced API issues ~30%)

Previous → Software Developer @ GVCC Solutions, Bangalore (Dec 2024 – Oct 2025)
• Microservices (Spring Boot + Spring Cloud)
• Spring Security + JWT
• MySQL + Hibernate/JPA
• AWS deployment (EC2, S3, RDS) + Docker & Jenkins CI/CD

Internship → Software Engineer Intern @ Cognizant, Chennai (Dec 2023 – May 2024)
• Full-stack development (Java, Spring Boot, React)`,

        projects: `Key projects I've built:

1. GVCC.IN – Company Website (Aug 2025)
   • React + MUI + REST APIs + Docker + AWS
   • Responsive UI with optimized state & API handling

2. TheCockpit.In (Sept 2024)
   • React + MUI frontend
   • Spring Boot + Java backend (RESTful services)
   • Docker, Kubernetes, AWS DevOps practices
   • Secure APIs + CRUD + business logic

Both are responsive, containerized, and cloud-deployed.`,

        education: `Education:
Bachelor of Engineering in Computer Science
Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad
Aug 2019 – July 2023 | CGPA: 8.1/10

Relevant coursework: Data Structures, Algorithms, DBMS, OS, Software Engineering, ML, AI, Deep Learning, DevOps, AR/VR.`,

        certifications: `Certifications & Achievements:
• AWS Certified Cloud Foundations
• Java Full Stack Training – Level Up
• DevOps Training (Ongoing – Sept 2025)
• INNOVATE INDIA CODING CHAMPIONSHIP Participant (AICTE)
• LeetCode – 100+ problems solved`,

        collaborate: `I’m open to collaboration! 🚀

Interested in:
• Full-stack apps (React + Spring Boot)
• Microservices & cloud projects
• API integrations & DevOps
• Freelance / contract opportunities

Tell me about your idea!`,

        contact: `You can reach me anytime:

📧 Email: venagantiyashwanth@gmail.com
📞 Phone: +91 8688813480
📍 Hyderabad, Telangana, India

Looking forward to connecting!`,

        default: 'Sounds interesting! 😊 Feel free to ask about my skills, experience, projects, education, certifications, or how we can work together.',
    };

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg = {
            id: messages.length + 1,
            text,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');

        // Simulate typing delay + bot reply
        setTimeout(() => {
            const lowerText = text.toLowerCase().trim();
            let responseKey = 'default';

            if (/hello|hi|hey/.test(lowerText)) responseKey = 'hello';
            else if (/skill|tech|stack|know|expert/.test(lowerText)) responseKey = 'skills';
            else if (/experience|work|job|role|intern/.test(lowerText)) responseKey = 'experience';
            else if (/project|built|develop|thecockpit|gvcc/.test(lowerText)) responseKey = 'projects';
            else if (/education|degree|college|cgpa|course/.test(lowerText)) responseKey = 'education';
            else if (/certif|aws|leetcode|innovate|training/.test(lowerText)) responseKey = 'certifications';
            else if (/collaborate|work together|project idea|freelance|hire|team/.test(lowerText)) responseKey = 'collaborate';
            else if (/contact|email|phone|call|reach/.test(lowerText)) responseKey = 'contact';

            const botResponse = botResponses[responseKey];

            const botMsg = {
                id: messages.length + 2,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 600);
    };

    const handleWhatsAppRedirect = () => {
        const conversationText = messages
            .map((msg) => `${msg.sender === 'user' ? 'You' : 'Yashwanth'}: ${msg.text}`)
            .join('\n\n');
        const whatsappUrl = `https://wa.me/918688813480?text=${encodeURIComponent(conversationText)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Chat with Yashwanth"
            >
                <FaWhatsapp size={28} />
            </motion.button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-dark-900 rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-green-500 text-white p-3 sm:p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-sm sm:text-base md:text-lg">Chat with Yashwanth</h3>
                                <p className="text-xs sm:text-sm opacity-90">Usually replies quickly</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-green-600 p-2 rounded transition-colors"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80 bg-gray-50 dark:bg-dark-800">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-lg shadow-sm ${msg.sender === 'user'
                                                ? 'bg-green-500 text-white rounded-br-none'
                                                : 'bg-gray-200 dark:bg-dark-700 text-gray-900 dark:text-gray-100 rounded-bl-none'
                                            }`}
                                    >
                                        <p className="text-xs sm:text-sm whitespace-pre-wrap">{msg.text}</p>
                                        <span className="text-xs opacity-70 mt-1 block text-right">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Replies - show only at start */}
                        {messages.length <= 3 && (
                            <div className="p-3 space-y-2 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold">Quick options:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {quickReplies.map((reply, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSendMessage(reply)}
                                            className="text-xs sm:text-xs md:text-sm bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 px-2 sm:px-3 py-2 rounded transition-colors text-gray-800 dark:text-gray-200"
                                        >
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input & Send */}
                        <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-900 space-y-3">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    onClick={() => handleSendMessage(input)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded transition-colors font-semibold text-xs sm:text-sm"
                                >
                                    Send
                                </button>
                            </div>

                            <button
                                onClick={handleWhatsAppRedirect}
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm"
                            >
                                <FaWhatsapp size={16} />
                                Continue on WhatsApp
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};