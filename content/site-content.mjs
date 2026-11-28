export const site = {
  name: "HMART Building Solutions",
  phone: "+91 79944 40164",
  phoneHref: "+917994440164",
  whatsapp: "917994440164",
  email: "hmartbuildingsolutions@gmail.com",
  address: "Mangalapuram, Thonnakkal, Thiruvananthapuram, Kerala 695317",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Mangalapuram%2C%20Thonnakkal%2C%20Thiruvananthapuram%2C%20Kerala%20695317",
  sourceUrl: "https://www.hmartbs.com"
};

export const navigation = [
  ["Home", "/"],
  ["Roofing", "/roofing-materials"],
  ["Construction", "/construction-materials"],
  ["Services", "/services"],
  ["About", "/about-us"],
  ["Blog", "/blog"],
  ["Contact", "/contact-us"]
];

export const roofingProducts = [
  {
    id: "shingles", name: "Roofing Shingles", group: "Roofing", image: "/assets/products/roofing-shingles.jpg", width: 1080, height: 675,
    description: "A layered roofing option presented by HMART for homes, villas, resorts and commercial buildings, combining architectural character with weather protection.",
    source: "/roofing-materials"
  },
  {
    id: "stone-coated", name: "Stone-coated Roofing", group: "Roofing", image: "/assets/products/roofing-stone-coated.jpg", width: 500, height: 500,
    description: "A galvanised-steel roofing format finished with stone chips to achieve the appearance of traditional roof tiles.",
    source: "/roofing-materials"
  },
  {
    id: "tile-profile", name: "Tile-profile Sheets", group: "Roofing", image: "/assets/products/roofing-tile-profile.jpg", width: 1080, height: 1796,
    description: "Profiled metal roofing designed to echo traditional tiles for homes, villas, commercial buildings and renovation work.",
    source: "/roofing-materials"
  },
  {
    id: "puf", name: "PUF Roofing Sheets", group: "Roofing", image: "/assets/products/roofing-puf.jpg", width: 2000, height: 2000,
    description: "Insulated roofing panels listed for industrial buildings, warehouses, factories, commercial spaces and contemporary projects.",
    source: "/roofing-materials"
  },
  {
    id: "upvc", name: "UPVC Roofing Sheets", group: "Roofing", image: "/assets/products/roofing-upvc.jpg", width: 822, height: 822,
    description: "An unplasticised PVC roofing option listed for residential, commercial, industrial and agricultural applications.",
    source: "/roofing-materials"
  },
  {
    id: "trafford", name: "Trafford-profile Sheets", group: "Roofing", image: "/assets/products/roofing-trafford.jpg", width: 500, height: 500,
    description: "Profiled metal and aluminium roofing presented for residential, commercial and industrial applications.",
    source: "/roofing-materials"
  },
  {
    id: "gi", name: "GI Roofing Sheets", group: "Roofing", image: null,
    description: "Listed on HMART’s source Home page as part of its roofing range. Confirm available profiles, gauges and finishes directly with HMART.",
    source: "/"
  },
  {
    id: "polycarbonate", name: "Polycarbonate Roofing Sheets", group: "Roofing", image: null,
    description: "Listed on HMART’s source Home page as part of its roofing range. Confirm sheet formats, colours and current availability directly with HMART.",
    source: "/"
  },
  {
    id: "cladding", name: "Cladding Sheets", group: "Cladding & Panels", image: "/assets/products/roofing-cladding.jpg", width: 1000, height: 667,
    description: "Exterior and interior wall-covering sheets used to shape a building’s appearance and add a protective outer layer.",
    source: "/roofing-materials"
  },
  {
    id: "decking", name: "Decking Sheets", group: "Cladding & Panels", image: "/assets/products/roofing-decking.png", width: 235, height: 216,
    description: "Steel deck sheets used as a structural base for concrete floors, roofs and mezzanine systems.",
    source: "/roofing-materials"
  },
  {
    id: "cement-panels", name: "Cement Panels", group: "Cladding & Panels", image: "/assets/products/roofing-cement-panel.jpg", width: 800, height: 800,
    description: "Cement-based panels listed for walls, ceilings, partitions, facades and flooring applications.",
    source: "/roofing-materials"
  },
  {
    id: "cement-boards", name: "Cement Boards", group: "Cladding & Panels", image: "/assets/products/roofing-cement-board.jpg", width: 500, height: 500,
    description: "Building boards presented for walls, ceilings, partitions, flooring and exterior applications.",
    source: "/roofing-materials"
  }
];

export const constructionProducts = [
  {
    id: "hollow-bricks", name: "Hollow Bricks", image: "/assets/products/construction-hollow-bricks.jpg", width: 500, height: 500,
    description: "Hollow masonry units listed by HMART for wall and partition work. Confirm sizes and intended application before specification.", source: "/construction-materials"
  },
  {
    id: "aac-bricks", name: "AAC Bricks", image: "/assets/products/construction-aac-bricks.jpg", width: 800, height: 800,
    description: "Autoclaved Aerated Concrete bricks presented by HMART as a modern masonry option. Confirm available sizes and project requirements directly.", source: "/construction-materials"
  },
  {
    id: "country-bricks", name: "Country Bricks", image: "/assets/products/construction-country-bricks.jpg", width: 233, height: 217,
    description: "Traditional clay bricks listed for residential, commercial and heritage-oriented construction.", source: "/construction-materials"
  },
  {
    id: "tmt-bars", name: "TMT Bars", image: "/assets/products/construction-tmt-bars.jpg", width: 800, height: 534,
    description: "Thermo-mechanically treated reinforcement steel for residential, commercial, industrial and infrastructure construction.", source: "/construction-materials"
  },
  {
    id: "casuarina-poles", name: "Casuarina Poles", image: "/assets/products/construction-casuarina-poles.jpg", width: 212, height: 238,
    description: "Wooden poles listed for scaffolding, fencing, agricultural use and temporary support work.", source: "/construction-materials"
  },
  {
    id: "aggregates-sand", name: "Construction Aggregates & Sand", image: "/assets/products/construction-sand.jpg", width: 312, height: 162,
    description: "Sand and aggregate materials for concrete, plastering, masonry and other general construction work.", source: "/construction-materials"
  },
  {
    id: "cement", name: "Cement", image: "/assets/products/construction-cement.jpg", width: 398, height: 500,
    description: "General cement products listed for homes, commercial buildings and industrial construction.", source: "/construction-materials"
  }
];

export const additionalHomeCategories = [
  "Flooring materials",
  "Plywood & boards",
  "Doors & windows",
  "Waterproofing products",
  "Tiles & sanitary ware"
];

export const services = [
  {
    id: "roofing", name: "Roofing Services",
    description: "Site inspection, material selection, supply, installation, maintenance, renovation and replacement support for residential, commercial and industrial roofing."
  },
  {
    id: "construction", name: "Construction Support",
    description: "Planning, material supply, execution coordination and project support for residential, commercial and industrial requirements."
  },
  {
    id: "waterproofing", name: "Waterproofing",
    description: "Waterproofing solutions for roofs, terraces, walls, bathrooms, basements and water tanks, subject to site assessment and confirmed scope."
  },
  {
    id: "planning", name: "Planning & Documentation",
    description: "Project planning, drawings, approvals and documentation support as described by the source site; exact deliverables are confirmed for each enquiry."
  }
];

export const videos = [
  { id: "eXbYDgi_2Ao", title: "Premium cladding profile sheets", context: "Roofing Materials source page" },
  { id: "1gbiUysyBx0", title: "Stone-coated metal roofing sheets", context: "Roofing Materials source page" },
  { id: "Xhk8XPYO1So", title: "AAC bricks", context: "Construction Materials source page" }
];

export const company = {
  intro: "HMART Building Solutions is a sister concern of Kooraveettil Agencies, Kooraveettil Builders and Kooraveettil Paints. It brings roofing, construction materials, product guidance and project support together for residential, commercial and industrial requirements.",
  mission: "To provide dependable roofing and construction materials with informed service, customer-focused guidance and practical support for strong, safe and considered buildings.",
  vision: "To become a trusted provider of roofing and construction solutions, recognised for quality, innovation and customer care while supporting more durable and thoughtfully built places.",
  sisters: ["Kooraveettil Agencies", "Kooraveettil Builders", "Kooraveettil Paints"]
};
