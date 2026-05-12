export const HIGHLIGHT_MARKER = '{highlight}';
export const BOLD_MARKER = '{bold}';

export type HighlightParts = {
  before: string;
  word: string;
  after: string;
};

function splitOnMarker(template: string, word: string, marker: string): HighlightParts {
  const idx = template.indexOf(marker);
  if (idx === -1) {
    throw new Error(`Template is missing "${marker}" marker: ${template}`);
  }
  return {
    before: template.slice(0, idx),
    word,
    after: template.slice(idx + marker.length),
  };
}

export function splitOnHighlight(template: string, word: string): HighlightParts {
  return splitOnMarker(template, word, HIGHLIGHT_MARKER);
}

export function splitOnBold(template: string, word: string): HighlightParts {
  return splitOnMarker(template, word, BOLD_MARKER);
}
