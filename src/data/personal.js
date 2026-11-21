// Centralized Personal Information
// Strictly accurate to Irfan Hossain's specifications.
// No fabricated phone numbers, WhatsApp, or fake experience.

export const personalData = {
  name: 'Irfan Hossain',
  designation: 'Full-Stack Developer',
  tagline: 'Turning Ideas into Digital Solutions',
  subheading: 'I am a dedicated developer focused on building modern, performant web applications and solving real-world problems through clean code, structured APIs, and intuitive user experiences.',
  status: 'Full-Stack Developer',
  location: 'Bangladesh',
  avatar: '/images/profile.jpg',
  about: {
    journey: [
      'I started learning web development in 2026, driven by my curiosity about technology and my passion for building things with code. I began by exploring frontend development and gradually expanded my skills into backend development.',
      'Today, I focus on building full-stack web applications and turning ideas into practical digital solutions. My journey is driven by continuous learning, problem-solving, and creating meaningful experiences through technology.'
    ],
    interest: 'I enjoy sitting alone and thinking, exploring ideas, and reflecting on different possibilities.'
  },
  socials: {
    github: 'https://github.com/irfanhossaintanjid',
    linkedin: 'https://www.linkedin.com/in/irfan-hossain-tanjid',
    email: 'irfanhossaintanjid018@gmail.com'
  },
  // Configurable Contact Service:
  // If an external service endpoint (such as Formspree, Web3Forms, or custom API) is provided in 'endpoint',
  // the form submits via fetch POST. Otherwise, it functions via client mailto with prefilled details.
  contactService: {
    provider: 'mailto', // 'mailto' | 'formspree' | 'custom'
    endpoint: '' // e.g. 'https://formspree.io/f/your_form_id'
  },
  resumeUrl: '/resume/IRFAN-HOSSAIN-Resume.pdf',
  resumeFileName: 'IRFAN-HOSSAIN-Resume.pdf'
};
