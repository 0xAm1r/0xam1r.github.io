/* ============================================================
   ABOUT PAGE CONTENT.

   Written from Amir's own answers, kept close to his wording.
   Short sentences, no hedging, no tidy endings — matching how he
   writes on the blog. Edit freely; this is his page.
   ============================================================ */

export interface AboutBlock { title: string; paragraphs: string[] }
export interface AboutLink  { label: string; href: string }

export const about = {
  /* Optional portrait for the left rail.
     Drop an image in public/ and set this to e.g. '/portrait.jpg'. */
  photo: '',
  photoAlt: '',

  blurb: 'Computer engineer in Rasht, Iran. Interested in where machine learning meets neuroscience.',

  blocks: [
    {
      title: 'Background',
      paragraphs: [
        'I studied computer engineering at ACECR in Rasht and finished in 2019. ' +
          'Then three years of freelance web development. Building applications, ' +
          'keeping them running, handling the SSL and the security patches.',
        'From 2022 to 2024 I taught English to Navy recruits during military ' +
          'service. I wrote the curriculum and the materials.',
        "I moved out of web development because it's boring and not impactful.",
      ],
    },
    {
      title: 'What I want',
      paragraphs: [
        'I want to work in the fields that bring machine learning and neuroscience ' +
          'together. The connection between biology and AI is what attracts me most.',
        "I'm admitted to the M.Sc. in Computer Engineering for Intelligent Systems " +
          "at the University of Verona, starting October 2026.",
      ],
    },
    {
      title: 'Obsession',
      paragraphs: [
        "More than anything, I'm obsessed with how to advance AI to reach what " +
          'seems impossible.',
      ],
    },
  ] satisfies AboutBlock[],

  elsewhere: [
    { label: 'GitHub',  href: 'https://github.com/0xAm1r' },
    { label: 'Twitter', href: 'https://twitter.com/realamirnaeimi' },
    { label: 'Writing', href: '/blog' },
  ] satisfies AboutLink[],
};
