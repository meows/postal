/**
   # Taiwan (TW / TWN)

   Where `N₁ ∈ { 1...9 }`:
   - `NNN`
   - `NNN-NN`
   - `NNN-NNN`

   https://en.wikipedia.org/wiki/Postal_codes_in_Taiwan
*/

export default /^[1-9][0-9]{2}(?:-[0-9]{2,3})?$/

export const test = [
   "100",
   "100-44",
   "100-444",
]
