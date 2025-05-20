const perspectiveID = 'perspective3'

export const locationInstanceProperties = `
    {
      ?id a voc:Location .
      BIND(?id AS ?uri__id)
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/location/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id rdfs:label ?temp_label .
      BIND(STR(?temp_label) AS ?label__prefLabel)
      BIND(STR(?temp_label) AS ?label__id)
      FILTER(LANG(?temp_label) = 'en')
    }
    UNION
    {
      ?id voc:country ?country__id .
      OPTIONAL {
        ?country__id rdfs:label ?countryLabel .
        FILTER(LANG(?countryLabel) = "en")
      }
      BIND(COALESCE(?countryLabel, REPLACE(STR(?country__id), "^.*[/#]([^/#]+)$", "$1")) AS ?country__prefLabel)
    }
    UNION
    {
      ?id voc:wikidataLink ?wikidataLink__id .
      BIND(REPLACE(STR(?wikidataLink__id), "^.*[/#]([^/#]+)$", "$1") AS ?wikidataLink__prefLabel)
      BIND(STR(?wikidataLink__id) AS ?wikidataLink__prefLabel)
      BIND(?wikidataLink__id AS ?wikidataLink__dataProviderUrl)
    }
`