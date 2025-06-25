import ProfilePic from "../asset/razaakProfile.png"

// import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"

const containerVariants={
  hidden: {opacity:0,x :-100},
  visible:{
    opacity:1,
    x:0,
    trasition:{
      duration:0.5,
      staggerChildren:0.5
    }
  }
}

const childVariants={
  hidden:{
    opacity:0,x:-100
  },
  visible:{opacity:1, x:0 ,transition:{duration : 0.5} }
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
                <motion.img src={ProfilePic} alt="Abdul Razaak H" className="border border-stone-900 rounded-3xl"
                width={650}
                height={650}
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:0.5}} />
            </div>
            </div>

            <div className="w-full lg:w-1/2">
            
              <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 
                variants={childVariants}
                className="pb-2 text-4xl tracking-tighter
                lg:text-8xl">Abdul Razaak H</motion.h2>
                <motion.span
                variants={childVariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Web Developer</motion.span>
                <motion.p 
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                      A passionate 3rd-year B.Tech Information Technology student with skills in UI/UX design, React.js development, video editing, and poster designing. Proficient in modern web technologies such as HTML5, CSS3, JavaScript, and frameworks like React.js, along with tools like Figma, and Canva. Known for having a keen eye for design, attention to detail, and a user-centric approach to creating seamless and visually appealing digital experiences. Experienced in building responsive and accessible interfaces, working in team projects, and delivering results under deadlines. innovative projects in tech and design.
                </motion.p>
                <motion.a 
                variants={childVariants}
                href="/resume.pdf"
                download="Razaak-Resume.pdf"
                // rel="noopener noreferrer" 
                className="bg-white rounded-full p-4 text-sm
                text-stone-800 mb-10"> Download Resume </motion.a>
      
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero