const perspectiveID = 'perspective1'

export const filmRoleInstanceProperties = `
    {
      ?id a voc:FilmRole .
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id voc:character ?character__id .
      OPTIONAL {
        ?character__id rdfs:label ?characterLabel .
        FILTER(LANG(?characterLabel) = 'en')
      }
      BIND(COALESCE(?characterLabel, REPLACE(STR(?character__id), "^.*[/#]([^/#]+)$", "$1")) AS ?character__prefLabel)
    }
    UNION
    {
      ?id voc:film ?film__id .
      OPTIONAL {
        ?film__id rdfs:label ?filmLabel .
        FILTER(LANG(?filmLabel) = 'en')
      }
      BIND(COALESCE(?filmLabel, REPLACE(STR(?film__id), "^.*[/#]([^/#]+)$", "$1")) AS ?film__prefLabel)
      BIND(CONCAT("/film/page/", REPLACE(STR(?film__id), "^.*[/#]([^/#]+)$", "$1")) AS ?film__dataProviderUrl)

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
      ?id voc:role ?role__id .
      OPTIONAL {
        ?role__id rdfs:label ?roleLabel .
        FILTER(LANG(?roleLabel) = 'en')
      }
      BIND(COALESCE(?roleLabel, REPLACE(STR(?role__id), "^.*[/#]([^/#]+)$", "$1")) AS ?role__prefLabel)
    }
    UNION
    {
      ?id voc:wikidataLink ?wikidataLink__id .
      OPTIONAL {
        ?wikidataLink__id rdfs:label ?wikidataLinkLabel .
      }
      BIND(COALESCE(?wikidataLinkLabel, REPLACE(STR(?wikidataLink__id), "^.*[/#]([^/#]+)$", "$1")) AS ?wikidataLink__prefLabel)
      BIND(?wikidataLink__id AS ?wikidataLink__dataProviderUrl)
  }
`