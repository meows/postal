/**

Given an array of letters will return an uppercase alphabet string for making
regexes that exclude those letters.

*/

export default function excludeLetter(letters: string[]): string {
   const mask = new RegExp(`[${letters.join("")}]`, "g")
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".replace(mask, "")
}