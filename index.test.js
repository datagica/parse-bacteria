const parse = require('./index')
const testData = [{
  input: "In this paper we study the interaction of pseudoxanthobacter with..",
  expected: [{
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
  }]
}, {
  input: "I wonder where does the name paraperlucidibaca come from",
  expected: [{
    "ngram": "paraperlucidibaca",
    "value": {
      "id": "paraperlucidibaca",
      "label": {
        "en": "Paraperlucidibaca"
      },
      "description": {
        "en": "Paraperlucidibaca"
      },
      "category": "genus",
      "aliases": {
        "en": [
          "Paraperlucidibaca",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 6,
      "begin": 29,
      "end": 46
    }
  }]
}]

test('extract bacteria', () => Promise.all(
  testData.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))