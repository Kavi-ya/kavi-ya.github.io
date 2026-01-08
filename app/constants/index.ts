export interface WorkExperience {
  id: number;
  name: string;
  pos: string;
  duration: string;
  title: string;
  icon: string;
  animation: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    name: 'Tech Company',
    pos: 'Senior Frontend Developer',
    duration: '2022 - Present',
    title: 'Led the development of multiple web applications using React and Next.js, improving performance by 40% and user engagement by 60%.',
    icon: '/assets/company1.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Startup Inc',
    pos: 'Full Stack Developer',
    duration: '2020 - 2022',
    title: 'Built and maintained full-stack applications using MERN stack, integrated third-party APIs, and optimized database queries.',
    icon: '/assets/company2.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Freelance',
    pos: 'Web Developer',
    duration: '2018 - 2020',
    title: 'Developed custom websites and web applications for clients across various industries, focusing on responsive design and performance.',
    icon: '/assets/company3.svg',
    animation: 'salute',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: '/assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear',
    img: '/assets/review2.png',
    review:
      'Adrian expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our sales have significantly increased since the launch. He’s a true professional.',
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'Project Manager at UrbanTech',
    img: '/assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex requirements and turn them into a seamless, functional website. His problem-solving skills are top-notch.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar',
    img: '/assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our vision perfectly and executed it with precision. His ability to create dynamic and interactive websites is truly unique.',
  },
];