const perspectiveID = 'perspective4'

export const AwardRecognitionProperties = `
  {
    ?id a voc:AwardRecognition .
    BIND(?id AS ?uri__id)
    BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
    BIND(CONCAT("/AwardRecognition/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
  }
  UNION
  {
    ?id voc:award ?award__id .
    OPTIONAL {
      ?award__id rdfs:label ?awardLabel .
      FILTER(LANG(?awardLabel) = 'en')
    }
    BIND(COALESCE(?awardLabel, REPLACE(STR(?award__id), "^.*[/#]([^/#]+)$", "$1")) AS ?award__prefLabel)
  }
  UNION
  {
    ?id voc:awardDate ?awardDate__id .
    OPTIONAL {
      ?awardDate__id rdfs:label ?awardDateLabel .
    }
    BIND(COALESCE(?awardDateLabel, REPLACE(STR(?awardDate__id), "^.*[/#]([^/#]+)$", "$1")) AS ?awardDate__prefLabel)
  }
  UNION
  {
    ?id voc:awardStatus ?awardStatus__id .
    OPTIONAL {
      ?awardStatus__id rdfs:label ?awardStatusLabel .
    }
    BIND(COALESCE(?awardStatusLabel, REPLACE(STR(?awardStatus__id), "^.*[/#]([^/#]+)$", "$1")) AS ?awardStatus__prefLabel)
  }
  UNION
  {
      ?id voc:forWork ?temp_forWork .
      BIND(STR(?temp_forWork) AS ?forWork__prefLabel)
      BIND(STR(?temp_forWork) AS ?forWork__id)
      FILTER(LANG(?temp_forWork) = 'en')
  }
  UNION
  {
    ?id voc:person ?person__id .
    OPTIONAL {
      ?person__id rdfs:label ?personLabel .
      FILTER(LANG(?personLabel) = 'en')
    }
    BIND(COALESCE(?personLabel, REPLACE(STR(?person__id), "^.*[/#]([^/#]+)$", "$1")) AS ?person__prefLabel)
  }
  UNION
  {
    ?id voc:wikidataLink ?wikidataLink__id .
    BIND(REPLACE(STR(?wikidataLink__id), "^.*[/#]([^/#]+)$", "$1") AS ?wikidataLink__prefLabel)
    BIND(STR(?wikidataLink__id) AS ?wikidataLink__prefLabel)
    BIND(?wikidataLink__id AS ?wikidataLink__dataProviderUrl)
}
`
