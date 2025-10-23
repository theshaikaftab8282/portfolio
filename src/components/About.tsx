import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Main About Text */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a results-driven Master's student in Business Analytics at Sacred Heart University 
              with over four years of professional experience in HR, event management, and public relations. 
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My passion lies in transforming raw data into actionable insights using Python, SQL, Power BI, 
              and Tableau. I aim to bridge business operations and analytics to support data-driven decision-making.
            </p>
            
            <Card className="p-6 border-l-4 border-secondary bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Sacred Heart University</p>
                      <p>MS in Business Analytics</p>
                      <p className="text-secondary font-semibold">GPA: 3.81/4.0</p>
                      <p className="text-xs">Expected 2026 | Fairfield, CT</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Osmania University</p>
                      <p>Bachelor of Business Administration</p>
                      <p className="text-secondary font-semibold">CGPA: 8.46/10</p>
                      <p className="text-xs">2020-2023 | Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Briefcase className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professional Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    4+ years of experience in HR analytics, event management, and public relations. 
                    Proven track record in data-driven project coordination and stakeholder management.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Core Competencies</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Data Analysis & Visualization</li>
                    <li>• Machine Learning & Predictive Modeling</li>
                    <li>• Business Intelligence & Reporting</li>
                    <li>• Statistical Analysis & Insights</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary to-primary/90 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-3">Career Goals</h3>
              <p className="text-sm text-white/90">
                Seeking internships and full-time opportunities in Business Analytics, Data Analytics, 
                and Business Intelligence to leverage my technical skills and business acumen in 
                solving complex organizational challenges.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
