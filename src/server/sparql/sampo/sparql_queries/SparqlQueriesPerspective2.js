const perspectiveID = 'perspective2'

export const personPropertiesFacetResults =
`   {
      ?id a voc:Person .
      BIND(?id AS ?uri__id)
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
        ?id rdfs:label ?label_text .
        BIND(STR(?label_text) AS ?label__prefLabel)
        BIND(LANG(?label_text) AS ?label__lang)
        BIND(CONCAT(STR(?id), "/label/", LANG(?label_text)) AS ?label__id)
        FILTER(LANG(?label_text) = 'en')
        BIND(LANG(?label_text) AS ?labelLanguage)
    }
    UNION
    {
      ?id voc:birthDate ?birthDate__id .
      BIND(?birthDate__id AS ?birthDate__prefLabel)
    }
    UNION
    {
        ?id voc:birthPlace ?birthPlace__id .
        OPTIONAL {
          ?birthPlace__id rdfs:label ?birthPlaceLabel .
          FILTER(LANG(?birthPlaceLabel) = "en")
        }
        BIND(COALESCE(?birthPlaceLabel, REPLACE(STR(?birthPlace__id), "^.*[/#]([^/#]+)$", "$1")) AS ?birthPlace__prefLabel)
    }
    UNION
    {
      ?id voc:citizenOf ?citizenOf__id .
      OPTIONAL {
        ?citizenOf__id rdfs:label ?citizenLabel .
        FILTER(LANG(?citizenLabel) = "en")
      }
      BIND(COALESCE(?citizenLabel, REPLACE(STR(?citizenOf__id), "^.*[/#]([^/#]+)$", "$1")) AS ?citizenOf__prefLabel)
    }
    UNION
    {
      ?id voc:desc ?desc__id .
      BIND(STR(?desc__id) AS ?desc__prefLabel)
      FILTER(LANG(?desc__id) = 'en')
    }
    UNION
    {
      ?id voc:gender ?temp_gender .
      BIND(STR(?temp_gender) AS ?gender__prefLabel)
      BIND(STR(?temp_gender) AS ?gender__id)
    }
    UNION
    {
      ?id voc:image ?imageURL .
      BIND(?imageURL AS ?image__id)
      BIND(?imageURL AS ?image__url)
      BIND("IMAGE" AS ?image__type)
      BIND(?imageURL AS ?image__prefLabel)
      BIND(?imageURL AS ?image__dataProviderUrl)
    }
    UNION
    {
      ?id voc:wikidataLink ?wikidataLink__id .
      BIND(REPLACE(STR(?wikidataLink__id), "^.*[/#]([^/#]+)$", "$1") AS ?wikidataLink__prefLabel)
      BIND(STR(?wikidataLink__id) AS ?wikidataLink__prefLabel)
      BIND(?wikidataLink__id AS ?wikidataLink__dataProviderUrl)
    }
`
