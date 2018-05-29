# Parse Bacteria

If a bacteria, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-bacteria

## Usage

Example:

```javascript
await parse('In this paper we study the interaction of pseudoxanthobacter with..')
```

Output:

```json
[
  {
    "ngram": "pseudoxanthobacter",
    "value": {
      "id": "pseudoxanthobacter",
      "label": {
        "en": "Pseudoxanthobacter"
      },
      "description": {
        "en": "Pseudoxanthobacter"
      },
      "category": "genus",
      "aliases": {
        "en": [
          "Pseudoxanthobacter",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 8,
      "begin": 42,
      "end": 60
    }
  }
]
```

## TODO

- continue on https://en.wikipedia.org/wiki/Category:Bacteria_genera --> acetohalobium
- do species and not just genera