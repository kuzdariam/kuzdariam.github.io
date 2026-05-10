export const HIGHLIGHT_MARKER = '{highlight}';

export type HighlightParts = {
  before: string;
  word: string;
  after: string;
};

export function splitOnHighlight(template: string, word: string): HighlightParts {
  const idx = template.indexOf(HIGHLIGHT_MARKER);
  if (idx === -1) {
    throw new Error(`Template is missing "${HIGHLIGHT_MARKER}" marker: ${template}`);
  }
  return {
    before: template.slice(0, idx),
    word,
    after: template.slice(idx + HIGHLIGHT_MARKER.length),
  };
}
