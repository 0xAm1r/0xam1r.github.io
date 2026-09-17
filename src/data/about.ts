/* ============================================================
   ABOUT PAGE CONTENT.
   Drafted from the CV — rewrite the prose in your own voice.
   ============================================================ */

export interface AboutBlock { title: string; paragraphs: string[] }
export interface AboutLink  { label: string; href: string }

export const about = {
  /* Optional portrait for the left rail.
     Drop an image in public/ and set this to e.g. '/portrait.jpg'. */
  photo: '',
  photoAlt: '',

  blurb: 'Computer engineer in Rasht, Iran. Machine learning, and the writing that comes with it.',

  blocks: [
    {
      title: 'Background',
      paragraphs: [
        'I studied computer engineering at ACECR in Rasht, then spent three years ' +
          'freelancing as a web developer — building applications, keeping them up, ' +
          'and handling the unglamorous parts like SSL and vulnerability patching.',
        'Two years of military service followed, teaching English to Navy recruits. ' +
          'Not the obvious detour for an engineer, but explaining something clearly ' +
          'to people who have no reason to care yet turns out to be the same skill ' +
          'as writing good documentation.',
      ],
    },
    {
      title: 'How I work',
      paragraphs: [
        'I prefer building a thing to reading about it. The transformer I wrote for ' +
          'named-entity recognition has custom attention mechanisms not because a ' +
          'library was missing one, but because implementing it is how I understand it.',
      ],
    },
    {
      title: 'Now',
      paragraphs: [
        'Working through machine learning in public — transformers for NER, U-Nets ' +
          'for segmentation — and writing about whatever I am currently obsessed with.',
      ],
    },
  ] satisfies AboutBlock[],

  elsewhere: [
    { label: 'GitHub',  href: 'https://github.com/0xAm1r' },
    { label: 'Twitter', href: 'https://twitter.com/realamirnaeimi' },
    { label: 'Writing', href: '/blog' },
  ] satisfies AboutLink[],
};
