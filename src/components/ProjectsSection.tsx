import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
const projects = [
  {
    title: 'ChefMaster Application',
    description: 'A beautiful food ordering app with real-time tracking, payment integration, and smooth animations.',
    image: project1,
    tags: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
    gradient: 'from-cyan-500 to-blue-600',
    stats: { stars: 48, views: '2.3k' },
  },
  {
    title: 'Academia-Central',
    description: 'An all-in-one platform to discover, apply for, and track scholarships with secure sign-ups and personalized alerts.',
    image: project2,
    tags: ['Flutter', 'REST API', 'Provider', 'Razorpay'],
    gradient: 'from-purple-500 to-pink-600',
    stats: { stars: 36, views: '1.8k' },
  },
  {
    title: 'Task Manager App',
    description: 'A simple and efficient task management app to organize, track, and complete daily tasks with ease.',
    image: project3,
    tags: ['Flutter', 'Health API', 'Charts', 'SQLite'],
    gradient: 'from-emerald-500 to-teal-600',
    stats: { stars: 52, views: '3.1k' },
  },
  {
    title: 'Organic Groceries',
    description: 'An organic groceries app offering fresh products, easy ordering, and a smooth, secure shopping experience.',
    image: project4,
    tags: ['Flutter', 'Firebase', 'WebSocket', 'FCM'],
    gradient: 'from-orange-500 to-red-600',
    stats: { stars: 41, views: '2.7k' },
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// My Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of mobile applications I've built with Flutter, 
            focusing on beautiful UI, smooth performance, and great user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative glass-card overflow-hidden hover-lift animated-border"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="relative p-6">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-[16/10] bg-secondary/30 flex items-center justify-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-auto h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Mobile icon overlay */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 glass-card p-2.5 backdrop-blur-xl"
                  >
                    <Smartphone size={20} className="text-primary" />
                  </motion.div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <span className="glass-card px-3 py-1.5 text-xs font-mono flex items-center gap-1.5">
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      {project.stats.stars}
                    </span>
                    <span className="glass-card px-3 py-1.5 text-xs font-mono flex items-center gap-1.5">
                      <Eye size={12} className="text-primary" />
                      {project.stats.views}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 text-xs font-mono bg-gradient-to-r ${project.gradient} bg-opacity-10 text-foreground rounded-full border border-white/5`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/30">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary flex-1 rounded-xl">
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary flex-1 rounded-xl">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/FahadFarooq40/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-xl px-8">
              <Github size={18} className="mr-2" />
              View All on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};