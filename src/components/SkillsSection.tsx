import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Palette, Cloud, Wrench } from 'lucide-react';

const skills = [
  { name: 'Flutter/Dart', level: 90, icon: Smartphone, color: 'from-cyan-400 to-blue-500' },
  { name: 'Firebase', level: 85, icon: Cloud, color: 'from-amber-400 to-orange-500' },
  { name: 'REST APIs', level: 88, icon: Code2, color: 'from-green-400 to-emerald-500' },
  { name: 'UI/UX Design', level: 80, icon: Palette, color: 'from-pink-400 to-rose-500' },
  { name: 'State Management', level: 85, icon: Database, color: 'from-violet-400 to-purple-500' },
  { name: 'Git & DevOps', level: 75, icon: Wrench, color: 'from-slate-400 to-zinc-500' },
];

const tools = [
  // Core Flutter
  { name: 'Flutter', logo: '💙' },
  { name: 'Dart', logo: '🎯' },

  // State Management
  { name: 'Provider', logo: '📦' },
  { name: 'GetX', logo: '⚡' },
  { name: 'Bloc', logo: '🧱' },

  // Backend & Services
  { name: 'Firebase', logo: '🔥' },
  { name: 'REST APIs', logo: '🌐' },
  { name: 'Stripe', logo: '💳' },
  { name: 'Google Maps', logo: '🗺️' },

  // Localization & Internationalization
  { name: 'Flutter Intl (i18n)', logo: '🌍' },
  { name: 'Easy Localization', logo: '🈳' },

  // Advanced Flutter
  { name: 'Clean Architecture', logo: '🏗️' },
  { name: 'MVVM / MVC', logo: '🧠' },
  { name: 'Dependency Injection', logo: '🔌' },
  { name: 'Animations', logo: '🎞️' },


  // DevOps & Testing
  { name: 'Unit Testing', logo: '🧪' },
  { name: 'Integration Testing', logo: '🔍' },
  { name: 'Firebase Crashlytics', logo: '🐞' },

  // Design & Tools
  { name: 'Figma', logo: '🎨' },
  { name: 'VS Code', logo: '💻' },
  { name: 'Git & GitHub', logo: '📝' },
  { name: 'Postman', logo: '📮' },
];


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(175_80%_50%/0.05),transparent_70%)]" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// What I Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group hover-lift"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                  <skill.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card px-5 py-3 flex items-center gap-2 cursor-default group"
              >
                <span className="text-xl">{tool.logo}</span>
                <span className="font-mono text-sm group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
