export const personalInfo = {
  name: "Akshat Sharma",
  title: "PhD Student in Physics @ UMD",
  tagline: "Exploring the Intersection of Condensed Matter & Quantum Computing",
  email: "ak@akshatsharma.info",
  linkedin: "https://www.linkedin.com/in/akshat-sharma-physics/",
  github: "https://github.com/speedcoder107",
  location: "College Park, Maryland",
  shortBio: "I am a PhD student at the University of Maryland, focusing on Quantum Information Science. My passion lies in solving challenging problems—whether through physics, code, or logic puzzles.",
  about: [
    "Hi, my name is Akshat. I am currently a PhD student in physics at the University of Maryland, College Park. My research focuses on Quantum Information Science.",
    "During my time at the University of Minnesota, I discovered that I thrive from teaching. Whether it was tutoring at the SMART Learning Commons or lead mentoring through 'Rooted in STEM,' I've always been captivated by the 'aha!' moment when a complex concept suddenly clicks for a student.",
    "Now at UMD, I am leaning into Quantum Dimer Models and emergent phases of matter under Prof. Victor Galitski. I am fascinated by these new ideas realted to quantum materials and the potential they hold for future technologies. And I am excited to continue sharing my love of physics with others"
  ],
  interests: [],
  // interests: ["Logic Puzzles", "Cardistry", "Scientific Visualization", "Mentorship"],
  highlights: [
    // { title: "Mentorship", detail: "Rooted in STEM Lead Mentor" },
    // { title: "Inspiration", detail: "Research discussion with Bill Unruh" },
    // { title: "Leadership", detail: "SMART Commons Peer Tutor Lead" }
  ]
};

export const education = [
  {
    degree: "Doctor of Philosophy (PhD) in Physics",
    institution: "University of Maryland - College Park",
    period: "July 2025 - Present",
    details: "Focus: Quantum Information Science & Condensed Matter Physics. Advisor: Prof. Victor Galitski."
  },
  {
    degree: "Bachelor of Science in Physics (Honors)",
    institution: "University of Minnesota - Twin Cities",
    period: "Sept 2021 - May 2025",
    details: "Minors in Computer Science & Mathematics. Summa Cum Laude. GPA: 3.82/4.0."
  }
];

export const research = [
  {
    title: "Quantum Dimer Models & Emergent Phases",
    institution: "University of Maryland (JQI)",
    mentor: "Prof. Victor Galitski",
    period: "2025 - Present",
    description: "Investigating the Rokhsar-Kivelson (RK) point in 2D lattices to understand liquid-like ground states. Developing computational pipelines to simulate Hamiltonian constraints and analyze the emergence of topological phases in quantum materials."
  },
  {
    title: "Pattern Formation in 2D Nematics",
    institution: "University of Minnesota",
    mentor: "Prof. Jorge Viñals",
    period: "Jan 2024 - May 2025",
    description: "Studied topological defects in active matter systems using Monte Carlo simulations. Focused on how random fields influence defect motion and phase transitions in XY and Ising models. This work has potential applications in understanding biological systems like cell migration and cancer metastasis."
  },
  {
    title: "Amorphous Germanium Conductivity",
    institution: "University of Minnesota",
    mentor: "Prof. James Kakalios",
    period: "2023 - 2024",
    description: "Discovered a novel 'Berthelot-like' transport mechanism in amorphous Germanium at high temperatures (T > 440K). Characterized the stretched exponential relaxation of conductivity, providing new insights into thermal memory in disordered semiconductors."
  },
  {
    title: "Magic-Angle Graphene Exfoliation",
    institution: "University of Minnesota",
    mentor: "Prof. Ke Wang",
    period: "2021 - 2022",
    description: "Optimized the mechanical exfoliation of graphene to create high-quality mono-layer and bi-layer samples. Investigated the superconducting properties arising from Moiré lattices in twisted bilayer graphene."
  }
];

export const projects = [
  {
    name: "Quantum Image Sorting (VQC)",
    tech: "Qiskit, PyTorch, Quantum Machine Learning",
    description: "Developed a Variational Quantum Classifier (VQC) to sort images based on quantum feature maps. Explored the advantage of quantum kernels in handling high-dimensional image data compared to classical CNNs."
  },
  {
    name: "Leukemia Classification using CNNs",
    tech: "Python, TensorFlow, ResNet18",
    description: "Built a custom Convolutional Neural Network and fine-tuned a ResNet18 model to classify B-ALL leukemia cells from microscopic images, achieving 96% test accuracy. Implemented data augmentation and transfer learning techniques."
  },
  {
    name: "Decoding Shor's Algorithm",
    tech: "Qiskit, LaTeX, Educational Tech",
    description: "Created an interactive simulation and comprehensive guide to Shor's Algorithm. Demonstrated the quantum speedup in integer factorization and its implications for RSA encryption."
  },
  {
    name: "WeChat Clone",
    tech: "Flask, SQL, Socket.IO",
    description: "A full-stack real-time messaging application featuring secure user authentication, friend management, and instant message delivery using WebSockets."
  }
];
