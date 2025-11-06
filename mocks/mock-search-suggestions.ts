import type { SearchSuggestion } from "~/types/search"
import { SearchSuggestionType } from "~/types/search"

export const mockSearchSuggestions: SearchSuggestion[] = [
  // Original Bali suggestions
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "Echo Beach",
    description: "Popular Canggu surf spot for intermediate surfers.",
    image: "/images/surf-spots/echo-beach.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "b2c3d4e5-f6g7-8901-bcde-f23456789012",
    title: "Canggu Surf Shop",
    description: "Surf gear, boards, and accessories in Canggu.",
    image: "/images/surf-shops/canggu-surf-shop.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
    title: "Uluwatu",
    description: "World-famous powerful reef break for experts.",
    image: "/images/surf-spots/uluwatu.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "d4e5f6g7-h8i9-0123-def0-456789012345",
    title: "Seminyak",
    description: "Vibrant beach town with multiple surf breaks.",
    image: "/images/places/seminyak.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "e5f6g7h8-i9j0-1234-ef01-567890123456",
    title: "Bali Surf Guide - Made",
    description: "Experienced local guide for Bali surf tours.",
    image: "/images/surf-guides/bali-surf-guide.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "f6g7h8i9-j0k1-2345-f012-678901234567",
    title: "Padang Padang",
    description: "Iconic left-hand reef break with perfect barrels.",
    image: "/images/surf-spots/padang-padang.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "g7h8i9j0-k1l2-3456-0123-789012345678",
    title: "Canggu",
    description: "Trendy coastal village with world-class surf breaks.",
    image: "/images/places/canggu.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "h8i9j0k1-l2m3-4567-1234-890123456789",
    title: "Bingin Beach",
    description: "Beautiful beach break for intermediate surfers.",
    image: "/images/surf-spots/bingin-beach.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "i9j0k1l2-m3n4-5678-2345-901234567890",
    title: "Bali Surf Coaching",
    description: "Professional surf coaching with video analysis.",
    image: "/images/surf-coaching/bali-surf-coaching.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "j0k1l2m3-n4o5-6789-3456-012345678901",
    title: "Sanur",
    description: "Calm beach town perfect for beginners.",
    image: "/images/places/sanur.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  // European Capitals
  {
    id: "eu-001-amsterdam",
    title: "Amsterdam",
    description: "Capital of the Netherlands. Gateway to European surf.",
    image: "/images/places/amsterdam.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-002-athens",
    title: "Athens",
    description: "Capital of Greece. Near Mediterranean surf spots.",
    image: "/images/places/athens.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-003-berlin",
    title: "Berlin",
    description: "Capital of Germany. Home to Eisbach standing wave.",
    image: "/images/places/berlin.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-004-bern",
    title: "Bern",
    description: "Capital of Switzerland. Alpine city with river surfing.",
    image: "/images/places/bern.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-005-bratislava",
    title: "Bratislava",
    description: "Capital of Slovakia. Danube city with river surfing.",
    image: "/images/places/bratislava.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-006-brussels",
    title: "Brussels",
    description: "Capital of Belgium. Access to Belgian coast surf.",
    image: "/images/places/brussels.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-007-bucharest",
    title: "Bucharest",
    description: "Capital of Romania. Access to Black Sea surf.",
    image: "/images/places/bucharest.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-008-budapest",
    title: "Budapest",
    description: "Capital of Hungary. Danube city with river surfing.",
    image: "/images/places/budapest.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-009-copenhagen",
    title: "Copenhagen",
    description: "Capital of Denmark. Coastal city with North Sea breaks.",
    image: "/images/places/copenhagen.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-010-dublin",
    title: "Dublin",
    description: "Capital of Ireland. Gateway to world-class Irish surf.",
    image: "/images/places/dublin.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-011-helsinki",
    title: "Helsinki",
    description: "Capital of Finland. Unique ice surfing and Baltic breaks.",
    image: "/images/places/helsinki.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-012-lisbon",
    title: "Lisbon",
    description: "Capital of Portugal. Surf capital of Europe.",
    image: "/images/places/lisbon.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-013-ljubljana",
    title: "Ljubljana",
    description: "Capital of Slovenia. Access to Adriatic surf spots.",
    image: "/images/places/ljubljana.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-014-london",
    title: "London",
    description: "Capital of the United Kingdom. Access to UK surf.",
    image: "/images/places/london.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-015-madrid",
    title: "Madrid",
    description: "Capital of Spain. Access to northern Spanish surf.",
    image: "/images/places/madrid.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-016-nicosia",
    title: "Nicosia",
    description: "Capital of Cyprus. Mediterranean surf culture and spots.",
    image: "/images/places/nicosia.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-017-oslo",
    title: "Oslo",
    description: "Capital of Norway. Cold water surfing and Norwegian breaks.",
    image: "/images/places/oslo.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-018-paris",
    title: "Paris",
    description: "Capital of France. Access to French Atlantic surf.",
    image: "/images/places/paris.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-019-podgorica",
    title: "Podgorica",
    description: "Capital of Montenegro. Gateway to Adriatic surf.",
    image: "/images/places/podgorica.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-020-prague",
    title: "Prague",
    description: "Capital of Czech Republic. Historic city with river surfing.",
    image: "/images/places/prague.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-021-reykjavik",
    title: "Reykjavik",
    description: "Capital of Iceland. Unique cold water surf destination.",
    image: "/images/places/reykjavik.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-022-riga",
    title: "Riga",
    description: "Capital of Latvia. Access to Baltic Sea surf.",
    image: "/images/places/riga.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-023-rome",
    title: "Rome",
    description: "Capital of Italy. Access to Italian surf spots.",
    image: "/images/places/rome.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-024-sarajevo",
    title: "Sarajevo",
    description: "Capital of Bosnia and Herzegovina. Adriatic surf access.",
    image: "/images/places/sarajevo.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-025-skopje",
    title: "Skopje",
    description: "Capital of North Macedonia. Gateway to nearby surf.",
    image: "/images/places/skopje.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-026-sofia",
    title: "Sofia",
    description: "Capital of Bulgaria. Access to Black Sea surf.",
    image: "/images/places/sofia.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-027-stockholm",
    title: "Stockholm",
    description: "Capital of Sweden. Unique cold water surfing culture.",
    image: "/images/places/stockholm.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-028-tallinn",
    title: "Tallinn",
    description: "Capital of Estonia. Access to Baltic Sea surf.",
    image: "/images/places/tallinn.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-029-tirana",
    title: "Tirana",
    description: "Capital of Albania. Gateway to Adriatic surf.",
    image: "/images/places/tirana.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-030-vaduz",
    title: "Vaduz",
    description: "Capital of Liechtenstein. Alpine city with river surfing.",
    image: "/images/places/vaduz.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-031-valletta",
    title: "Valletta",
    description: "Capital of Malta. Mediterranean surf culture and spots.",
    image: "/images/places/valletta.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-032-vienna",
    title: "Vienna",
    description: "Capital of Austria. City with river surfing.",
    image: "/images/places/vienna.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-033-warsaw",
    title: "Warsaw",
    description: "Capital of Poland. Access to Baltic Sea surf.",
    image: "/images/places/warsaw.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "eu-034-zagreb",
    title: "Zagreb",
    description: "Capital of Croatia. Gateway to world-class Adriatic surf.",
    image: "/images/places/zagreb.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  // Additional Surf Destinations
  {
    id: "dest-001-biarritz",
    title: "Biarritz",
    description: "Iconic French surf town, birthplace of European surfing.",
    image: "/images/places/biarritz.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-002-ericeira",
    title: "Ericeira",
    description: "World Surf Reserve in Portugal with world-class breaks.",
    image: "/images/places/ericeira.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-003-nazare",
    title: "Nazare",
    description: "Portuguese town with the biggest waves in the world.",
    image: "/images/places/nazare.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-004-peniche",
    title: "Peniche",
    description: "Portuguese surf mecca with WSL Supertubos break.",
    image: "/images/places/peniche.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-005-hossegor",
    title: "Hossegor",
    description: "French surf capital with powerful beach breaks.",
    image: "/images/places/hossegor.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-006-san-sebastian",
    title: "San Sebastian",
    description: "Beautiful Spanish coastal city with excellent surf breaks.",
    image: "/images/places/san-sebastian.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-007-mundaka",
    title: "Mundaka",
    description: "Legendary left-hand river mouth break in Spain.",
    image: "/images/places/mundaka.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-008-newquay",
    title: "Newquay",
    description: "UK's surf capital in Cornwall with Fistral Beach.",
    image: "/images/places/newquay.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-009-thurso",
    title: "Thurso",
    description: "Scottish surf town with powerful reef breaks.",
    image: "/images/places/thurso.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-010-bundoran",
    title: "Bundoran",
    description: "Irish surf town with world-class reef breaks.",
    image: "/images/places/bundoran.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-011-lahinch",
    title: "Lahinch",
    description: "Popular Irish surf destination for all skill levels.",
    image: "/images/places/lahinch.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-012-scheveningen",
    title: "Scheveningen",
    description: "Dutch beach resort with accessible beach breaks.",
    image: "/images/places/scheveningen.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-013-tavarua",
    title: "Tavarua",
    description: "Fijian island surf resort with world-class Cloudbreak.",
    image: "/images/places/tavarua.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-014-teahupoo",
    title: "Teahupoo",
    description: "Legendary Tahitian reef break with heaviest waves.",
    image: "/images/places/teahupoo.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-015-pipeline",
    title: "Pipeline",
    description: "World's most famous surf break in Hawaii.",
    image: "/images/places/pipeline.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-016-jaws",
    title: "Jaws",
    description: "Hawaiian big wave break for expert surfers only.",
    image: "/images/places/jaws.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-017-bells-beach",
    title: "Bells Beach",
    description: "Iconic Australian surf break in Victoria.",
    image: "/images/places/bells-beach.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-018-superbank",
    title: "Superbank",
    description: "World's longest sand-bottom point break in Australia.",
    image: "/images/places/superbank.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-019-jeffreys-bay",
    title: "Jeffreys Bay",
    description: "South African surf mecca with world's best point break.",
    image: "/images/places/jeffreys-bay.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-020-malibu",
    title: "Malibu",
    description: "Iconic California surf spot, birthplace of modern surfing.",
    image: "/images/places/malibu.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-021-trestles",
    title: "Trestles",
    description: "World-class California surf break with multiple peaks.",
    image: "/images/places/trestles.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-022-mexico-pipeline",
    title: "Puerto Escondido",
    description: "Mexican surf town with powerful beach breaks.",
    image: "/images/places/puerto-escondido.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-023-sayulita",
    title: "Sayulita",
    description: "Charming Mexican surf town for beginners and intermediates.",
    image: "/images/places/sayulita.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-024-tavarua-cloudbreak",
    title: "Cloudbreak",
    description: "Fijian reef break with perfect left-hand barrels.",
    image: "/images/places/cloudbreak.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-025-raglan",
    title: "Raglan",
    description: "New Zealand surf town with world-class point breaks.",
    image: "/images/places/raglan.jpg",
    entityType: SearchSuggestionType.PLACE
  },
  {
    id: "dest-026-mundaka-break",
    title: "Mundaka",
    description: "Legendary Spanish left-hand river mouth break.",
    image: "/images/places/mundaka-break.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-027-supertubos",
    title: "Supertubos",
    description: "Portuguese beach break known for powerful barrels.",
    image: "/images/places/supertubos.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-028-fistral",
    title: "Fistral Beach",
    description: "UK's most famous surf break in Newquay.",
    image: "/images/places/fistral.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-029-the-peak",
    title: "The Peak",
    description: "Irish reef break producing powerful right-handers.",
    image: "/images/places/the-peak.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  {
    id: "dest-030-eisbach",
    title: "Eisbach",
    description: "Famous standing wave in Munich, Germany.",
    image: "/images/places/eisbach.jpg",
    entityType: SearchSuggestionType.BREAK
  },
  // Additional Surf Businesses
  {
    id: "biz-001-surf-shop-lisbon",
    title: "Lisbon Surf Shop",
    description: "Premium surf shop in Portugal's capital.",
    image: "/images/surf-shops/lisbon-surf-shop.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-002-ericeira-surf-school",
    title: "Ericeira Surf School",
    description: "Professional surf school in Portugal's World Surf Reserve.",
    image: "/images/surf-coaching/ericeira-surf-school.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-003-biarritz-surf-coaching",
    title: "Biarritz Surf Coaching",
    description: "Elite surf coaching with video analysis.",
    image: "/images/surf-coaching/biarritz-surf-coaching.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-004-newquay-surf-guide",
    title: "Newquay Surf Guide",
    description: "Local surf guide in Cornwall, UK.",
    image: "/images/surf-guides/newquay-surf-guide.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-005-hossegor-surf-shop",
    title: "Hossegor Surf Shop",
    description: "Premium surf shop in France's surf capital.",
    image: "/images/surf-shops/hossegor-surf-shop.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-006-san-sebastian-photography",
    title: "San Sebastian Surf Photography",
    description: "Professional surf photography in northern Spain.",
    image: "/images/surf-photography/san-sebastian-photography.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-007-malibu-surf-guide",
    title: "Malibu Surf Guide",
    description: "Experienced local guide to California's iconic surf break.",
    image: "/images/surf-guides/malibu-surf-guide.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-008-jeffreys-bay-coaching",
    title: "Jeffreys Bay Surf Coaching",
    description: "Professional coaching at world's best point break.",
    image: "/images/surf-coaching/jeffreys-bay-coaching.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-009-pipeline-photography",
    title: "Pipeline Surf Photography",
    description: "Elite surf photography at Hawaii's most famous break.",
    image: "/images/surf-photography/pipeline-photography.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-010-bells-beach-surf-shop",
    title: "Bells Beach Surf Shop",
    description: "Iconic surf shop near Australia's most famous break.",
    image: "/images/surf-shops/bells-beach-surf-shop.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-011-raglan-surf-school",
    title: "Raglan Surf School",
    description: "New Zealand's premier surf school for all levels.",
    image: "/images/surf-coaching/raglan-surf-school.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-012-puerto-escondido-guide",
    title: "Puerto Escondido Surf Guide",
    description: "Local expert guide to Mexico's powerful beach breaks.",
    image: "/images/surf-guides/puerto-escondido-guide.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-013-tavarua-resort",
    title: "Tavarua Island Resort",
    description: "Exclusive Fijian surf resort with access to Cloudbreak.",
    image: "/images/surf-shops/tavarua-resort.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-014-trestles-coaching",
    title: "Trestles Surf Coaching",
    description: "Elite coaching at California's world-class break.",
    image: "/images/surf-coaching/trestles-coaching.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-015-bundoran-surf-shop",
    title: "Bundoran Surf Shop",
    description: "Irish surf shop near the famous Peak break.",
    image: "/images/surf-shops/bundoran-surf-shop.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-016-sayulita-photography",
    title: "Sayulita Surf Photography",
    description:
      "Professional surf photography in Mexico's charming surf town.",
    image: "/images/surf-photography/sayulita-photography.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-017-superbank-guide",
    title: "Superbank Surf Guide",
    description: "Expert guide to Australia's longest point break.",
    image: "/images/surf-guides/superbank-guide.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-018-peniche-surf-school",
    title: "Peniche Surf School",
    description: "Professional surf school at Portugal's surf mecca.",
    image: "/images/surf-coaching/peniche-surf-school.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-019-thurso-surf-shop",
    title: "Thurso Surf Shop",
    description: "Scottish surf shop specializing in cold water gear.",
    image: "/images/surf-shops/thurso-surf-shop.jpg",
    entityType: SearchSuggestionType.BUSINESS
  },
  {
    id: "biz-020-lahinch-photography",
    title: "Lahinch Surf Photography",
    description: "Irish surf photography of consistent beach breaks.",
    image: "/images/surf-photography/lahinch-photography.jpg",
    entityType: SearchSuggestionType.BUSINESS
  }
]
