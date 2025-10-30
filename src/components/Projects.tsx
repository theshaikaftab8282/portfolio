import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import toyotaImg from "@/assets/project-toyota.jpg";
import sudokuImg from "@/assets/project-sudoku.jpg";
import openaiImg from "@/assets/project-openai.jpg";

const projects = [
  {
    title: "Toyota Price Predictor Web App",
    description:
      "Developed a machine learning model using Python and Streamlit to predict Toyota car prices with an R² score of 0.89. Features interactive data visualization and real-time price predictions based on multiple vehicle attributes.",
    image: toyotaImg,
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit", "ML"],
    link: "https://github.com/theshaikaftab8282/Toyota-Price--Predictor.git",
  },
  {
    title: "Sudoku Solver using AI",
    description:
      "Created an intelligent Sudoku Solver using Constraint Satisfaction Problem (CSP) and AC-3 algorithm, improving solving speed by 30%. Implements backtracking and arc consistency for efficient puzzle resolution.",
    image: sudokuImg,
    tags: ["Python", "Jupyter Notebook", "CSP", "AI Algorithms"],
    link: "https://github.com/theshaikaftab8282/Sudoku-CSP-Solver.git",
  },
  {
    title: "OpenAI API Accuracy Testing Model",
    description:
      "Designed a comprehensive API testing framework comparing GPT-4.1 and GPT-4-mini models, analyzing accuracy and latency metrics. Visualized performance insights using Power BI dashboards for decision-making.",
    image: openaiImg,
    tags: ["Python", "API Testing", "Power BI", "Data Analysis"],
    link: "https://github.com/theshaikaftab8282",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="h-1 w-20 bg-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of data analytics and machine learning projects demonstrating technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
