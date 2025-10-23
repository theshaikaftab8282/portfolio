import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      school: "Sacred Heart University",
      degree: "Master of Science in Business Analytics",
      location: "Fairfield, CT",
      period: "Expected 2026",
      gpa: "3.81/4.0",
      highlights: [
        "Advanced Data Analytics",
        "Machine Learning Applications",
        "Business Intelligence Systems",
        "Statistical Modeling",
      ],
    },
    {
      school: "Osmania University",
      degree: "Bachelor of Business Administration",
      location: "Hyderabad, India",
      period: "2020 - 2023",
      gpa: "8.46/10",
      highlights: [
        "Business Operations",
        "Financial Analysis",
        "Marketing Research",
        "Organizational Behavior",
      ],
    },
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in business analytics and business administration
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-secondary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{edu.school}</h3>
                    <p className="text-lg font-semibold text-muted-foreground">{edu.degree}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span>{edu.period}</span>
                    </div>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-2 bg-secondary/10 inline-block px-4 py-2 rounded-full">
                    <Award className="h-5 w-5 text-secondary" />
                    <span className="font-semibold text-secondary">GPA: {edu.gpa}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
