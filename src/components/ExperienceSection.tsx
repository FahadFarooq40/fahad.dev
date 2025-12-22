import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const education = [
   {
    year: '2025',
    title: 'BS Computer Science',
    institution: 'Virtual University',
description: 'Focused on software engineering fundamentals with hands-on experience in Flutter, Dart, data structures, and modern application development.',
  },
  {
    year: '2023',
    title: 'Flutter Mobile App Development',
    institution: 'Saylani Mass IT Training',
    description: 'Comprehensive training in Flutter and Dart development',
  },
  {
    year: '2022',
    title: 'Intermediate (Pre-Engineering)',
    institution: 'Jinnah Government College, Karachi',
    description: 'Completed pre-engineering studies with focus on mathematics and physics',
  },
  {
    year: '2021',
    title: 'ACCP Certification',
    institution: 'Aptech North Nazimabad, Karachi',
    description: 'Aptech Certified Computer Professional - Full stack development program',
  },
];

const experience = [
  {
    year: '2024 - Present',
    title: 'Flutter Developer',
    company: 'Codebase Technology',
    location: 'Karachi',
    type: 'On-Site',
    description: 'Integrated banking APIs and authentication systems to enable secure and seamless financial transactions within the app. Collaborated in the end-to-end development of a mobile banking application, ensuring efficient and reliable money transfer processes. Implemented and maintained user transaction, account management, and payment gateway modules using robust API integrations. Assisted in optimizing UI/UX to enhance user engagement, improve performance, and ensure a smooth experience across iOS and Android platforms.',
      link: 'https://www.codebtech.com/',
  },
  {
    year: '2023 - 2024',
    title: 'Junior Flutter Developer',
    company: 'InnovatechStar',
    location: 'Remote',
    type: 'Remote',
    description: 'Assisted in integrating Google APIs for maps, location tracking, and user authentication. Contributed to the development and testing of mobile app features, ensuring smooth performance and a user-friendly experience. Improved UI/UX layouts and fixed minor bugs to enhance overall app usability on both Android and iOS platforms',
    link: 'https://innovatechstar.com/',
  },
  {
    year: '2023',
    title: 'Graphic Designer',
    company: 'Honda Site',
    location: 'Karachi',
    type: 'On-Site',
    description: 'Created visual designs for marketing materials, social media content, and brand assets.',
    link: 'https://www.hondasite.com.pk/',
  },
];

const TimelineItem = ({ 
  item, 
  index, 
  isExperience = false 
}: { 
  item: typeof education[0] | typeof experience[0]; 
  index: number; 
  isExperience?: boolean;
}) => {
  const expItem = item as typeof experience[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary to-primary/20" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary glow-primary" />
      
      {/* Content */}
      <div className="glass-card p-5 hover-lift">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-mono text-sm text-primary">{item.year}</span>
          {isExperience && expItem.type && (
            <span className="px-2 py-0.5 text-xs bg-secondary rounded-full text-secondary-foreground">
              {expItem.type}
            </span>
          )}
        </div>
        
        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
          {isExperience ? (
            <>
              <span className="flex items-center gap-1">
                <Briefcase size={14} />
                {expItem.company}
              </span>
              {expItem.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {expItem.location}
                </span>
              )}
            </>
          ) : (
            <span className="flex items-center gap-1">
              <GraduationCap size={14} />
              {(item as typeof education[0]).institution}
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
        
        {isExperience && expItem.link && (
          <a
            href={expItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
          >
            Visit Website
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// My Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and educational background in software development.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>
            
            <div className="space-y-0">
              {experience.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isExperience />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>
            
            <div className="space-y-0">
              {education.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Flutter', 'Dart', 'Firebase', 'REST APIs', 'Provider', 'GetX',
              'Google Maps', 'Stripe', 'Git', 'Figma', 'SQLite', "Localization"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 glass-card font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};