
export const starshipInstanceProperties = `
    {
      ?id a voc:Starship .
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/starship/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id rdfs:label ?temp_label .
      BIND(STR(?temp_label) AS ?label__prefLabel)
      BIND(STR(?temp_label) AS ?label__id)
    }
    UNION
    {
      ?id voc:cargoCapacity ?temp_cargoCapacity .
      BIND(STR(?temp_cargoCapacity) AS ?cargoCapacity__prefLabel)
      BIND(STR(?temp_cargoCapacity) AS ?cargoCapacity__id)
    }
    UNION
    {
      ?id voc:consumables ?temp_consumables .
      BIND(STR(?temp_consumables) AS ?consumables__prefLabel)
      BIND(STR(?temp_consumables) AS ?consumables__id)
    }
    UNION
    {
      ?id voc:costInCredits ?temp_costInCredits .
      BIND(STR(?temp_costInCredits) AS ?costInCredits__prefLabel)
      BIND(STR(?temp_costInCredits) AS ?costInCredits__id)
    }
    UNION
    {
      ?id voc:crew ?temp_crew .
      BIND(STR(?temp_crew) AS ?crew__prefLabel)
      BIND(STR(?temp_crew) AS ?crew__id)
    }
    UNION
    {
      ?id voc:desc ?temp_desc .
      BIND(STR(?temp_desc) AS ?desc__prefLabel)
      BIND(STR(?temp_desc) AS ?desc__id)
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
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
      ?id voc:hyperdriveRating ?temp_hyperdriveRating .
      BIND(STR(?temp_hyperdriveRating) AS ?hyperdriveRating__prefLabel)
      BIND(STR(?temp_hyperdriveRating) AS ?hyperdriveRating__id)
    }
    UNION
    {
      ?id voc:length ?temp_length .
      BIND(STR(?temp_length) AS ?length__prefLabel)
      BIND(STR(?temp_length) AS ?length__id)
    }
    UNION
    {
      ?id voc:manufacturer ?temp_manufacturer .
      BIND(STR(?temp_manufacturer) AS ?manufacturer__prefLabel)
      BIND(STR(?temp_manufacturer) AS ?manufacturer__id)
    }
    UNION
    {
      ?id voc:maxAtmospheringSpeed ?temp_maxAtmospheringSpeed .
      BIND(STR(?temp_maxAtmospheringSpeed) AS ?maxAtmospheringSpeed__prefLabel)
      BIND(STR(?temp_maxAtmospheringSpeed) AS ?maxAtmospheringSpeed__id)
    }
    UNION
    {
      ?id voc:mglt ?temp_mglt .
      BIND(STR(?temp_mglt) AS ?mglt__prefLabel)
      BIND(STR(?temp_mgit) AS ?mglt__id)
    }
    UNION
    {
      ?id voc:model ?temp_model .
      BIND(STR(?temp_model) AS ?model__prefLabel)
      BIND(STR(?temp_model) AS ?model__id)
    }
    UNION
    {
      ?id voc:passengers ?temp_passengers .
      BIND(STR(?temp_passengers) AS ?passengers__prefLabel)
      BIND(STR(?temp_passengers) AS ?passengers__id)
    }
    UNION
    {
      ?id voc:pilot ?pilot__id .
      OPTIONAL {
        ?pilot__id rdfs:label ?pilotLabel .
        FILTER(LANG(?pilotLabel) = 'en' || DATATYPE(?pilotLabel) = xsd:string)
      }
      BIND(COALESCE(?pilotLabel, REPLACE(STR(?pilot__id), "^.*[/#]([^/#]+)$", "$1")) AS ?pilot__prefLabel)
    }
    UNION
    {
      ?id voc:starshipClass ?temp_starshipClass .
      BIND(STR(?temp_starshipClass) AS ?starshipClass__prefLabel)
      BIND(STR(?temp_starshipClass) AS ?starshipClass__id)
    }
`