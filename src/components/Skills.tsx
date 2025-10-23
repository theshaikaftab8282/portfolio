import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, BarChart3, Brain, Briefcase } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Analytics",
    icon: Code2,
    skills: ["Python", "SQL", "R", "Jupyter Notebook"],
    color: "text-blue-600",
  },
  {
    title: "Visualization Tools",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Excel", "Data Visualization"],
    color: "text-green-600",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Regression", "Classification", "Predictive Analytics", "Scikit-learn"],
    color: "text-purple-600",
  },
  {
    title: "Core Business Skills",
    icon: Briefcase,
    skills: ["Business Analysis", "HR Analytics", "Project Coordination", "Stakeholder Management"],
    color: "text-orange-600",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical and business competencies for data-driven decision making
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-secondary/10 ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="border-secondary/30 text-foreground hover:bg-secondary/10 hover:border-secondary transition-colors text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 animate-fade-in">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-white">
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Soft Skills</h4>
                <p className="text-sm text-white/80">Communication, Leadership, Problem-solving</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical</h4>
                <p className="text-sm text-white/80">Git, APIs, Data Cleaning, ETL Processes</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Methodologies</h4>
                <p className="text-sm text-white/80">Agile, CRISP-DM, Data Storytelling</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
