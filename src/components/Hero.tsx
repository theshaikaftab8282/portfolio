import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 31, 59, 0.95), rgba(11, 31, 59, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-max section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl"></div>
              <img
                src={profileImg}
                alt="Mohammed Aftab Hussain"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-secondary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Mohammed Aftab Hussain
              </h1>
              <div className="h-1 w-24 bg-secondary mx-auto md:mx-0"></div>
            </div>

            <p className="text-lg md:text-xl text-white/90 font-light">
              MS Business Analytics | Data Analyst | Business Intelligence
            </p>

            <p className="text-base md:text-lg text-white/80">
              SQL | Python | Power BI | Tableau
            </p>

            <p className="text-xl md:text-2xl text-secondary font-semibold italic">
              "Transforming data into meaningful business insights."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                onClick={() => window.open("https://drive.google.com/file/d/1X0u-zFvjUDUILtK7-N-EGpiWob46uvWu/view?usp=drive_link", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold"
                onClick={() => window.open("https://linkedin.com/in/mohammed-aftab-hussain-m8a5h7", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-white/70 text-sm justify-center md:justify-start">
              <a href="mailto:shaikaftab2082@gmail.com" className="flex items-center hover:text-secondary transition-colors">
                <Mail className="mr-2 h-4 w-4" />
                shaikaftab2082@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <span>+1 (917) 243-8282</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
