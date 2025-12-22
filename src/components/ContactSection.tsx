import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/FahadFarooq40/',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/fahad-farooq-178b4821b/',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=100045367780324',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/fahadfarooq10/',
    gradient: 'from-pink-500 via-purple-500 to-orange-500',
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fahadkhannn40@gmail.com',
    href: 'mailto:fahadkhannn40@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 310 2566871',
    href: 'tel:+923102566871',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karachi, Pakistan',
    href: null,
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: '✨ Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">// Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Build <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's collaborate and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* CTA Card */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <Sparkles className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Ready to start a project?</h3>
              <p className="text-muted-foreground mb-6">
                I'm available for freelance work and full-time positions. Let's discuss your next big idea!
              </p>
              <a href="mailto:fahadkhannn40@gmail.com">
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl group">
                  Send an Email
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Contact Details */}
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 flex items-center gap-4 group hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-lg hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-lg">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 font-mono">// Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Send size={18} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Send a Message</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block font-mono">
                    name:
                  </label>
                  <Input
                    id="name"
                    placeholder="Fahad Faooq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block font-mono">
                    email:
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="fahad@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block font-mono">
                  message:
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-secondary/30 border-border/50 focus:border-primary resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 h-14 rounded-xl text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};