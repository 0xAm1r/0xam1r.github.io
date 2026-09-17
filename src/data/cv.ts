/* ============================================================
   YOUR CV LIVES HERE.
   This is the only file you need to edit to change the site's
   content. Sourced from amirhossein_naeimi_cv.pdf.
   ============================================================ */

export interface Contact  { label: string; href: string }
export interface Job      { title: string; company: string; companyUrl?: string; dates: string; location: string; bullets: string[] }
export interface Project  { title: string; dates: string; url?: string; urlLabel?: string; bullets: string[] }
export interface SkillSet { label: string; items: string[] }
export interface Degree   { school: string; dates: string; location: string; degree: string; detail?: string }
export interface Cert     { name: string; issuer: string; date: string; detail?: string; url?: string }
export interface Language { name: string; level: string }
export interface Quote    { text: string; name: string; role: string }

export const cv = {
  name: 'Amirhossein Naeimi',

  /* Credential first, direction second. Deliberately not a job title you
     have not held — the summary and projects carry the ML positioning. */
  role: 'Computer Engineer · Machine Learning',

  /* Drafted from your CV. Rewrite in your own words. */
  summary:
    'Computer engineer working in machine learning — transformer models for ' +
    'entity recognition, CNNs for image segmentation. Earlier, three years ' +
    'building and securing production web applications.',

  contacts: [
    { label: 'Naeimii.amirhossein@gmail.com', href: 'mailto:Naeimii.amirhossein@gmail.com' },
    { label: 'github.com/0xAm1r',             href: 'https://github.com/0xAm1r' },
    { label: 'am1r.net',                      href: '/blog' },
  ] satisfies Contact[],

  experience: [
    {
      title: 'English Instructor (Military Service)',
      company: 'IRI Navy',
      dates: 'January 2022 – January 2024',
      location: 'Rasht, Iran',
      bullets: [
        'Taught English to new Navy recruits, designing the curriculum and materials myself.',
        'Ran large classes in a high-discipline environment and tracked progress through regular assessment.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      dates: 'April 2019 – December 2021',
      location: 'Rasht, Iran',
      bullets: [
        'Built and maintained responsive web applications at 99.9% uptime.',
        'Cut average page load times by reworking site architecture and caching.',
        'Handled site security: SSL, firewall configuration, and vulnerability patching.',
      ],
    },
  ] satisfies Job[],

  projects: [
    {
      title: 'Named-Entity Recognition Model',
      dates: 'November – December 2025',
      url: 'https://github.com/0xAm1r/Transformer_NER',
      urlLabel: 'github.com/0xAm1r/Transformer_NER',
      bullets: [
        'Transformer-based model in TensorFlow and Keras that extracts and classifies entities from unstructured text.',
        'Implemented custom attention mechanisms, with NumPy and Pandas handling preprocessing.',
        'Reached a 0.92 F1 score.',
      ],
    },
    {
      title: 'Image Segmentation with CNNs',
      dates: 'June 2025',
      bullets: [
        'Convolutional network in TensorFlow performing semantic segmentation on self-driving car datasets.',
        'Implemented a U-Net architecture.',
        'Applied dropout and batch normalisation to reduce overfitting and improve generalisation.',
      ],
    },
  ] satisfies Project[],

  /* Deliberately short. The CV PDF carries the exhaustive list for keyword
     screening; this one is curated for a human who already clicked through. */
  skills: [
    { label: 'Machine learning', items: ['TensorFlow / Keras', 'PyTorch', 'Scikit-learn'] },
    { label: 'Programming',      items: ['Python', 'JavaScript', 'SQL'] },
    { label: 'Engineering',      items: ['Docker', 'Linux', 'PostgreSQL', 'Django / Flask'] },
  ] satisfies SkillSet[],

  education: [
    {
      school: 'University of Verona',
      dates: 'Admitted · October 2026 start',
      location: 'Verona, Italy',
      degree: 'M.Sc. Computer Engineering for Intelligent Systems',
    },
    {
      school: 'Academic Center for Education, Culture and Research (ACECR)',
      dates: 'September 2014 – February 2019',
      location: 'Rasht, Iran',
      degree: "Bachelor's Degree in Computer Engineering — Information Technology",
      detail:
        'GPA (final two years) 16.92/20. Coursework: Mathematics I & II, Linear Algebra, ' +
        'Probability & Statistics, Data Structures, Algorithms, Discrete Mathematics.',
    },
  ] satisfies Degree[],

  /* Pulled from the two letters. Referee emails and the institution's postal
     address are deliberately NOT here — those stay in the private PDF. */
  recommendations: [
    {
      text:
        'He attacked assignments with a degree of precision and organisation ' +
        'that is rare in an undergraduate student.',
      name: 'Elham Mirzakazemi',
      role: 'Database course — ACECR Rasht',
    },
    {
      text:
        'I recommend him without any hesitation, and I am confident that he will ' +
        'prove himself to be a talented individual and an excellent student.',
      name: 'Mohammad Ghamgosar Naseri, PhD',
      role: 'Computer Programming course — ACECR Rasht',
    },
  ] satisfies Quote[],

  certifications: [
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: 'December 2025',
      detail:
        'Five-course series: Neural Networks, Hyperparameter Tuning, Structuring ML ' +
        'Projects, CNNs, and Sequence Models (RNNs, LSTMs, Transformers).',
      url: 'https://coursera.org/share/4ef3f49a798f7180a0a612c64165cdaa',
    },
  ] satisfies Cert[],

  languages: [
    { name: 'Persian', level: 'Mother tongue' },
    { name: 'English', level: 'C1 · TOEFL 95' },
  ] satisfies Language[],

  footerCta:  'Contact me',
  footerHref: 'mailto:Naeimii.amirhossein@gmail.com',
};
