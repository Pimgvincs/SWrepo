
export const filmInstanceProperties = `
    {
      ?id a voc:Film .
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/film/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id rdfs:label ?temp_label .
      FILTER(LANG(?temp_label) = "en")
      BIND(STR(?temp_label) AS ?label__prefLabel)
      BIND(STR(?temp_label) AS ?label__id)
    }
    UNION
    {
      ?id voc:boxOffice ?boxOffice__id .
      OPTIONAL {
        ?boxOffice__id rdfs:label ?boxOfficeLabel .
        FILTER(LANG(?boxOfficeLabel) = 'en')
      }
      BIND(COALESCE(?boxOfficeLabel, REPLACE(STR(?boxOffice__id), "^.*[/#]([^/#]+)$", "$1")) AS ?boxOffice__prefLabel)
    }
    UNION
    {
      ?id voc:character ?character__id .
      OPTIONAL {
        ?character__id rdfs:label ?characterLabel .
        FILTER(LANG(?characterLabel) = 'en' || DATATYPE(?characterLabel) = xsd:string)
      }
      BIND(COALESCE(?characterLabel,  REPLACE(STR(?character__id), "^.*[/#]([^/#]+)$", "$1")) AS ?character__prefLabel)
    }
    UNION
    {
      ?id voc:cost ?cost__id .
      OPTIONAL {
        ?cost__id rdfs:label ?costLabel .
        FILTER(LANG(?costLabel) = 'en')
      }
      BIND(COALESCE(?costLabel, REPLACE(STR(?cost__id), "^.*[/#]([^/#]+)$", "$1")) AS ?cost__prefLabel)
    }
    UNION
    {
      ?id voc:desc ?temp_desc .
      FILTER(LANG(?temp_desc) = "en")
      BIND(STR(?temp_desc) AS ?desc__prefLabel)
      BIND(STR(?temp_desc) AS ?desc__id)
      BIND("" AS ?desc__dataProviderUrl)
    }
    UNION
    {
      ?id voc:episodeId ?temp_episodeId .
      BIND(STR(?temp_episodeId) AS ?episodeId__prefLabel)
      BIND(STR(?temp_episodeId) AS ?episodeId__id)
      BIND("" AS ?episodeId__dataProviderUrl)
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
      ?id voc:location ?location__id .
      OPTIONAL {
        ?location__id rdfs:label ?locationLabel .
        FILTER(LANG(?locationLabel) = 'en')
      }
      BIND(COALESCE(?locationLabel, REPLACE(STR(?location__id), "^.*[/#]([^/#]+)$", "$1")) AS ?location__prefLabel)
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id voc:openingCrawl ?temp_openingCrawl .
      BIND(STR(?temp_openingCrawl) AS ?openingCrawl__prefLabel)
      BIND(STR(?temp_openingCrawl) AS ?openingCrawl__id)
      BIND("" AS ?openingCrawl__dataProviderUrl)
    }
    UNION
    {
      ?id voc:planet ?planet__id .
      OPTIONAL {
        ?planet__id rdfs:label ?planetLabel .
        FILTER(LANG(?planetLabel) = 'en' || DATATYPE(?planetLabel) = xsd:string)
      }
      BIND(COALESCE(?planetLabel, REPLACE(STR(?planet__id), "^.*[/#]([^/#]+)$", "$1")) AS ?planet__prefLabel)
      BIND(CONCAT("/planet/page/", REPLACE(STR(?planet__id), "^.*[/#]([^/#]+)$", "$1")) AS ?planet__dataProviderUrl)
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id voc:releaseDate ?temp_releaseDate .
      BIND(STR(?temp_releaseDate) AS ?releaseDate__prefLabel)
      BIND(STR(?temp_releaseDate) AS ?releaseDate__id)
      BIND("" AS ?releaseDate__dataProviderUrl)
    }
    UNION
    {
      ?id voc:returnOnInvestment ?temp_returnOnInvestment .
      BIND(STR(?temp_returnOnInvestment) AS ?returnOnInvestment__prefLabel)
      BIND(STR(?temp_returnOnInvestment) AS ?returnOnInvestment__id)
      BIND("" AS ?returnOnInvestment__dataProviderUrl)
    }
    UNION
    {
      ?id voc:starship ?starship__id .
      OPTIONAL {
        ?starship__id rdfs:label ?starshipLabel .
        FILTER(LANG(?starshipLabel) = 'en' || DATATYPE(?starshipLabel) = xsd:string)
      }
      BIND(COALESCE(?starshipLabel, REPLACE(STR(?starship__id), "^.*[/#]([^/#]+)$", "$1")) AS ?starship__prefLabel)
      BIND(CONCAT("/starship/page/", REPLACE(STR(?starship__id), "^.*[/#]([^/#]+)$", "$1")) AS ?starship__dataProviderUrl)
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id voc:vehicle ?vehicle__id .
      OPTIONAL {
        ?vehicle__id rdfs:label ?vehicleLabel .
        FILTER(LANG(?vehicleLabel) = 'en' || DATATYPE(?vehicleLabel) = xsd:string)
      }
      BIND(COALESCE(?vehicleLabel, REPLACE(STR(?vehicle__id), "^.*[/#]([^/#]+)$", "$1")) AS ?vehicle__prefLabel)
      BIND(CONCAT("/vehicle/page/", REPLACE(STR(?vehicle__id), "^.*[/#]([^/#]+)$", "$1")) AS ?vehicle__dataProviderUrl)
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id voc:wikidataLink ?wikidataLink__id .
      BIND(REPLACE(STR(?wikidataLink__id), "^.*[/#]([^/#]+)$", "$1") AS ?wikidataLink__prefLabel)
      BIND(STR(?wikidataLink__id) AS ?wikidataLink__prefLabel)
      BIND(?wikidataLink__id AS ?wikidataLink__dataProviderUrl)
  }
`