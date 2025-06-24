import logo from "../asset/razaakLogo.png"
import leetcode from "../asset/leetcode.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-1 " width={70} height={33}/> 
            </a>
        </div>
        <div className="m-4 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/abdul-razaak-h/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <FaLinkedin />
                </a>
                <div className="ml-4">

             <a href="https://github.com/AbdulRazaak2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                 <FaGithub />
                </a>
                </div>
             <a href="https://leetcode.com/u/Abdul-Razaak/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                  
                     <img src={leetcode} className=" px-6"  width={70} height={33}/> 
                </a>
             
        </div>
    </nav>
  )
}

export default Navbar