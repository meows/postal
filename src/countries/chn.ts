/**
   ### China (CHN / CN)

   `NNNNNN`

   The postal services in Macau or Hong Kong Special Administrative Regions
   remain separate from Mainland China, with no post code system currently used.

   000000–009999 is reserved for Taiwan but unused.
*/

export default /^[0-9]{6}$/

export const test = [
   "010000", // Beijing
   "091000", // Chengdu
   "100000", // Tianjin
]
