/**

| code | about        |
| ---- | :----------- |
| `@`  | alphabetical |
| `#`  | numerical    |
| `*`  | alphabetical or numerical |

*/
export default function codeToRegex(code: string): RegExp {
   return new RegExp(
      code
         .split("")
         .map((char) => {
            switch (char) {
               case "@":
                  return "[a-zA-Z]"
               case "#":
                  return "[0-9]"
               case "*":
                  return "."
               default:
                  return char
            }
         })
         .join("")
   )
}
