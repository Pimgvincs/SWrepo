
export const planetInstanceProperties = `
    {
      ?id a voc:Planet .
      BIND(?id AS ?uri__id)
      BIND(?id as ?uri__dataProviderUrl)
      BIND(?id as ?uri__prefLabel)
      BIND(REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1") AS ?uri__prefLabel)
      BIND(CONCAT("/planet/page/", REPLACE(STR(?id), "^.*[/#]([^/#]+)$", "$1")) AS ?uri__dataProviderUrl)
    }
    UNION
    {
      ?id rdfs:label ?temp_label .
      BIND(STR(?temp_label) AS ?label__prefLabel)
      BIND(STR(?temp_label) AS ?label__id)
    }
    UNION
    {
      ?id voc:climate ?temp_climate .
      BIND(STR(?temp_climate) AS ?climate__prefLabel)
      BIND(STR(?temp_climate) AS ?climate__id)
    }
    UNION
    {
      ?id voc:desc ?temp_desc .
      BIND(STR(?temp_desc) AS ?desc__prefLabel)
      BIND(STR(?temp_desc) AS ?desc__id)
    }
    UNION
    {
      ?id voc:diameter ?temp_diameter .
      BIND(STR(?temp_diameter) AS ?diameter__prefLabel)
      BIND(STR(?temp_diameter) AS ?diameter__id)
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
      ?id voc:gravity ?temp_gravity .
      BIND(STR(?temp_gravity) AS ?gravity__prefLabel)
      BIND(STR(?temp_gravity) AS ?gravity__id)
    }
    UNION
    {
      ?id voc:orbitalPeriod ?temp_orbitalPeriod .
      BIND(STR(?temp_orbitalPeriod) AS ?orbitalPeriod__prefLabel)
      BIND(STR(?temp_orbitalPeriod) AS ?orbitalPeriod__id)
    }
    UNION
    {
      ?id voc:population ?temp_population .
      BIND(STR(?temp_population) AS ?population__prefLabel)
      BIND(STR(?temp_population) AS ?population__id)
    }
    UNION
    {
      ?id voc:resident ?resident__id .
      OPTIONAL {
        ?resident__id rdfs:label ?residentLabel .
        FILTER(LANG(?residentLabel) = 'en' || DATATYPE(?residentLabel) = xsd:string)
      }
      BIND(COALESCE(?residentLabel, REPLACE(STR(?resident__id), "^.*[/#]([^/#]+)$", "$1")) AS ?resident__prefLabel)
    }
    UNION
    {
      ?id voc:rotationPeriod ?temp_rotationPeriod .
      BIND(STR(?temp_rotationPeriod) AS ?rotationPeriod__prefLabel)
      BIND(STR(?temp_rotationPeriod) AS ?rotationPeriod__id)
    }
    UNION
    {
      ?id voc:surfaceWater ?temp_surfaceWater .
      BIND(STR(?temp_surfaceWater) AS ?surfaceWater__prefLabel)
      BIND(STR(?temp_surfaceWater) AS ?surfaceWater__id)
    }
    UNION
    {
      ?id voc:terrain ?temp_terrain .
      BIND(STR(?temp_terrain) AS ?terrain__prefLabel)
      BIND(STR(?temp_terrain) AS ?terrain__id)
    }
`