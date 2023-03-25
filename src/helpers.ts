import Uwuifier from "uwuifier";

const uwuifier = new Uwuifier();

export function uwuify(text: string): string {
  return uwuifier.uwuifySentence(text);
}
