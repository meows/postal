# Postal Code Verification

My lazy Google search reveals that the top postal code library is also a little
lazy with how they do regex. There ought to be a community go-to place for
contributing precise rules.

Let's try here.

## About Postal Codes
- Country codes are defined by [ISO 3166-1 alpha-3][alpha3].

## DSL

| code | about            |
| ---- | :--------------- |
| `@`  | letter           |
| `#`  | number           |
| `*`  | letter or number |
| ` `  | space            |
| `-`  | dash             |

[wiki_postal]: https://en.wikipedia.org/wiki/List_of_postal_codes
[alpha3]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3