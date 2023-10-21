export default function excludeLetter(letters: string[]): string {
   const mask = new RegExp(`[${letters.join("")}]`, "g")
   return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".replace(mask, "")
}
