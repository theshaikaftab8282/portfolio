import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container-max px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Mohammed Aftab Hussain</p>
            <p className="text-sm text-white/70">MS Business Analytics | Data Analyst</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/mohammed-aftab-hussain-m8a5h7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:shaikaftab2082@gmail.com"
              className="hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/theshaikaftab8282"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {currentYear} Mohammed Aftab Hussain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
