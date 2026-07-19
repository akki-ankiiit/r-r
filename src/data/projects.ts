export type ProjectGalleryCategory = {
  name: string;
  images: string[];
};

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  scope: string;
  heroImage: string;
  concept: string;
  narrative: string[];
  materials: { name: string; image: string }[];
  quote: string;
  galleries: ProjectGalleryCategory[];
}

export const projects: ProjectData[] = [
  {
    "id": "zeqon",
    "title": "Zeqon — Luxury in Land",
    "category": "Commercial",
    "location": "Raipur",
    "year": "2023",
    "client": "Zeqon Group",
    "area": "12,000 sq.ft",
    "scope": "Interior Architecture, Styling",
    "heroImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    "concept": "Designing a real estate experience centre that feels less like a sales office and more like a luxury hospitality destination.",
    "narrative": [
      "The client approached us with a brief to create an experience centre for their upcoming luxury villa project. They wanted a space that would instantly communicate the premium nature of their offering, while remaining welcoming and comfortable for long discussions.",
      "Our spatial concept revolved around creating a sequence of distinct zones—from a grand arrival lobby to intimate lounge settings and private meeting suites. We used a restrained material palette of travertine, ribbed timber, and brushed brass to establish a quiet sense of luxury.",
      "One of the main challenges was managing the acoustic privacy between discussion areas in a predominantly open-plan layout. We resolved this through carefully positioned sculptural partitions and acoustic ceiling treatments that integrate seamlessly with the lighting design."
    ],
    "materials": [
      {
        "name": "Silver Travertine",
        "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
      },
      {
        "name": "Ribbed Walnut",
        "image": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
      },
      {
        "name": "Brushed Brass",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      },
      {
        "name": "Linen Bouclé",
        "image": "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "The space doesn't just display our project; it embodies the exact lifestyle we are offering.",
    "galleries": [
      {
        "name": "Main Facade",
        "images": [
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=-7420798220",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=-7420798219",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=-7420798218",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=-7420798217",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=-7420798216",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=-7420798215",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-7420798214"
        ]
      },
      {
        "name": "Lobby & Atrium",
        "images": [
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=5116905221",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=5116905222",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=5116905223",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=5116905224",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=5116905225",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=5116905226",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=5116905227"
        ]
      },
      {
        "name": "Office Workspaces",
        "images": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=-7583286829",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=-7583286828",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=-7583286827",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=-7583286826",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=-7583286825",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-7583286824",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=-7583286823"
        ]
      },
      {
        "name": "Conference Rooms",
        "images": [
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=-3333008553",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=-3333008552",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-3333008551",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-3333008550",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-3333008549",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=-3333008548",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-3333008547"
        ]
      },
      {
        "name": "Cafeteria & Breakouts",
        "images": [
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=4616773167",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=4616773168",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=4616773169",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=4616773170",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=4616773171",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=4616773172",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=4616773173"
        ]
      }
    ]
  },
  {
    "id": "clarks-inn",
    "title": "Clarks Inn Suites",
    "category": "Hospitality",
    "location": "Raipur",
    "year": "2022",
    "client": "Clarks Inn Group",
    "area": "45,000 sq.ft",
    "scope": "Interior Design, Custom Furniture",
    "heroImage": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    "concept": "A contemporary business hotel that integrates regional art deco elements with modern functionality.",
    "narrative": [
      "For the Clarks Inn Suites in Raipur, we envisioned a space that caters to the modern business traveler while providing a distinct sense of place.",
      "The design seamlessly weaves subtle brass accents, fluted glass panels, and deep jewel tones into a primarily neutral base. This creates an atmosphere that is both professional and luxuriously relaxing.",
      "We custom-designed the furniture in the public areas to ensure they met the rigorous demands of hospitality wear while maintaining an elegant, residential feel."
    ],
    "materials": [
      {
        "name": "Verde Guatemala Marble",
        "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80"
      },
      {
        "name": "Fluted Glass",
        "image": "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80"
      },
      {
        "name": "Brushed Brass",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      },
      {
        "name": "Sapphire Velvet",
        "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "A perfect balance of professional efficiency and luxurious comfort.",
    "galleries": [
      {
        "name": "Arrival & Reception",
        "images": [
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=-4242498976",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=-4242498975",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-4242498974",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=-4242498973",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=-4242498972",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=-4242498971",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-4242498970"
        ]
      },
      {
        "name": "Guest Suites",
        "images": [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=-3173712785",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=-3173712784",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=-3173712783",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=-3173712782",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-3173712781",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-3173712780",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-3173712779"
        ]
      },
      {
        "name": "Restaurant & Dining",
        "images": [
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=-2924828840",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=-2924828839",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=-2924828838",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=-2924828837",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=-2924828836",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=-2924828835",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-2924828834"
        ]
      },
      {
        "name": "Lounge Areas",
        "images": [
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=-601109262",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=-601109261",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-601109260",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-601109259",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-601109258",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=-601109257",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=-601109256"
        ]
      },
      {
        "name": "Spa & Wellness",
        "images": [
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=2091701207",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=2091701208",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=2091701209",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=2091701210",
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000&sig=2091701211",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000&sig=2091701212",
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=2091701213"
        ]
      }
    ]
  },
  {
    "id": "aggarwal-residence",
    "title": "Aggarwal Residence",
    "category": "Residential",
    "location": "Bilaspur",
    "year": "2024",
    "client": "Aggarwal Family",
    "area": "8,500 sq.ft",
    "scope": "Architecture, Interior Design, Landscape",
    "heroImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    "concept": "A multi-generational home that balances grand, open social spaces with quiet, private retreats.",
    "narrative": [
      "The Aggarwal Residence was designed for a large family that frequently hosts gatherings. The brief called for a home that felt expansive and connected to the outdoors.",
      "We utilized large expanses of glass and continuous floor planes to seamlessly merge the interior living spaces with the lush garden courtyard.",
      "The material palette is purposefully muted, allowing the rich textures of the curated art and the vibrant greenery of the landscape to take center stage."
    ],
    "materials": [
      {
        "name": "Beige Marble",
        "image": "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80"
      },
      {
        "name": "Teak Wood",
        "image": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
      },
      {
        "name": "Linen",
        "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
      },
      {
        "name": "Bronze Details",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "Our home finally feels like a reflection of our family's lifestyle—open, warm, and deeply connected.",
    "galleries": [
      {
        "name": "Facade & Exterior",
        "images": [
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=-16698400485",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-16698400484",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=-16698400483",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=-16698400482",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=-16698400481",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-16698400480",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-16698400479"
        ]
      },
      {
        "name": "Living Room",
        "images": [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-5674130649",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-5674130648",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=-5674130647",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=-5674130646",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=-5674130645",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=-5674130644",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=-5674130643"
        ]
      },
      {
        "name": "Dining & Kitchen",
        "images": [
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=15469739140",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=15469739141",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=15469739142",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=15469739143",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=15469739144",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=15469739145",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=15469739146"
        ]
      },
      {
        "name": "Master Bedroom",
        "images": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=9566243209",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=9566243210",
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000&sig=9566243211",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000&sig=9566243212",
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=9566243213",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000&sig=9566243214",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=9566243215"
        ]
      },
      {
        "name": "Garden & Landscapes",
        "images": [
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=-10551636452",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-10551636451",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-10551636450",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-10551636449",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=-10551636448",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-10551636447",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-10551636446"
        ]
      }
    ]
  },
  {
    "id": "hello-bastar",
    "title": "Hello Bastar",
    "category": "Retail",
    "location": "Jagdalpur",
    "year": "2021",
    "client": "Bastar Artisans",
    "area": "8,500 sq.ft",
    "scope": "Interior Architecture",
    "heroImage": "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80",
    "concept": "A retail space that celebrates indigenous craftsmanship while offering a contemporary shopping experience.",
    "narrative": [
      "Hello Bastar is a unique retail initiative designed to showcase the rich tribal crafts of the region in a modern context. We were tasked with creating an environment that feels authentic yet aspirational.",
      "The design language relies heavily on locally sourced materials like terracotta, bamboo, and raw timber, contrasted with clean architectural lines. Natural light plays a crucial role in highlighting the textures of the handmade products.",
      "Custom display units were designed in collaboration with local artisans, blurring the line between the merchandise and the interior architecture."
    ],
    "materials": [
      {
        "name": "Terracotta",
        "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
      },
      {
        "name": "Bamboo",
        "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80"
      },
      {
        "name": "Raw Timber",
        "image": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
      },
      {
        "name": "Wrought Iron",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "A beautiful intersection of traditional craft and contemporary retail design.",
    "galleries": [
      {
        "name": "Storefront",
        "images": [
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=3977700156",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=3977700157",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=3977700158",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=3977700159",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=3977700160",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=3977700161",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=3977700162"
        ]
      },
      {
        "name": "Main Display Area",
        "images": [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-4617942134",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=-4617942133",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=-4617942132",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=-4617942131",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-4617942130",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-4617942129",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-4617942128"
        ]
      },
      {
        "name": "Product Shelving",
        "images": [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=-1964035925",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=-1964035924",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=-1964035923",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=-1964035922",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-1964035921",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-1964035920",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-1964035919"
        ]
      },
      {
        "name": "Trial Rooms",
        "images": [
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-3573345490",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-3573345489",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-3573345488",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=-3573345487",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=-3573345486",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=-3573345485",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=-3573345484"
        ]
      },
      {
        "name": "Checkout Counters",
        "images": [
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=2330131499",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=2330131500",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=2330131501",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=2330131502",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=2330131503",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=2330131504",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=2330131505"
        ]
      }
    ]
  },
  {
    "id": "concept-retail",
    "title": "Concept Retail Space",
    "category": "Retail",
    "location": "Raipur",
    "year": "2023",
    "client": "Confidential",
    "area": "3,200 sq.ft",
    "scope": "Interior Design, Fixture Design",
    "heroImage": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80",
    "concept": "An immersive, minimalist boutique that uses dramatic lighting to elevate the product presentation.",
    "narrative": [
      "Designed for a high-end fashion label, this concept space intentionally strips away all visual clutter to focus entirely on the garments.",
      "The space is defined by monochromatic surfaces and monolithic display fixtures. We employed a highly sophisticated lighting control system to create distinct moods throughout the day.",
      "The result is a gallery-like atmosphere that encourages customers to slow down and appreciate the craftsmanship of the clothing."
    ],
    "materials": [
      {
        "name": "Polished Concrete",
        "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80"
      },
      {
        "name": "Matte Black Steel",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      },
      {
        "name": "Mirrored Glass",
        "image": "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80"
      },
      {
        "name": "Bleached Oak",
        "image": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "A masterclass in restraint and visual impact.",
    "galleries": [
      {
        "name": "Storefront",
        "images": [
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=-5495231968",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-5495231967",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-5495231966",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=-5495231965",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000&sig=-5495231964",
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=-5495231963",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000&sig=-5495231962"
        ]
      },
      {
        "name": "Main Display Area",
        "images": [
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=6940163110",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=6940163111",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=6940163112",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=6940163113",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=6940163114",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=6940163115",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=6940163116"
        ]
      },
      {
        "name": "Product Shelving",
        "images": [
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-2283930481",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-2283930480",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-2283930479",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=-2283930478",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-2283930477",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-2283930476",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=-2283930475"
        ]
      },
      {
        "name": "Trial Rooms",
        "images": [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=3413469386",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=3413469387",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=3413469388",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=3413469389",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=3413469390",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=3413469391",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=3413469392"
        ]
      },
      {
        "name": "Checkout Counters",
        "images": [
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=13888236743",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000&sig=13888236744",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=13888236745",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=13888236746",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=13888236747",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=13888236748",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=13888236749"
        ]
      }
    ]
  },
  {
    "id": "the-glass-house",
    "title": "The Glass House",
    "category": "Residential",
    "location": "Kondagaon",
    "year": "2024",
    "client": "Verma Family",
    "area": "6,000 sq.ft",
    "scope": "Architecture, Interior Design",
    "heroImage": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80",
    "concept": "A transparent pavilion nestled in a dense forest, blurring the lines between inside and outside.",
    "narrative": [
      "The Glass House was conceived as a weekend retreat for a nature-loving family. The primary goal was to maximize the panoramic views of the surrounding woodland while maintaining a sense of shelter.",
      "We utilized an extensive steel frame and floor-to-ceiling glazing to achieve the feeling of living among the trees. The interior palette is intentionally dark and moody to contrast with the bright natural light.",
      "The house is designed to be completely self-sustaining, integrating passive cooling techniques and solar energy generation into its striking architectural form."
    ],
    "materials": [
      {
        "name": "Exposed Steel",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      },
      {
        "name": "Black Slate",
        "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80"
      },
      {
        "name": "Smoked Oak",
        "image": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
      },
      {
        "name": "Leather",
        "image": "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "It feels like we are living in a sophisticated treehouse. The connection to nature is profound.",
    "galleries": [
      {
        "name": "Facade & Exterior",
        "images": [
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=6136320677",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=6136320678",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=6136320679",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=6136320680",
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000&sig=6136320681",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000&sig=6136320682",
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=6136320683"
        ]
      },
      {
        "name": "Living Room",
        "images": [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=2878882865",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=2878882866",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=2878882867",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=2878882868",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=2878882869",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=2878882870",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=2878882871"
        ]
      },
      {
        "name": "Dining & Kitchen",
        "images": [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-3605925446",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=-3605925445",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000&sig=-3605925444",
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=-3605925443",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000&sig=-3605925442",
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000&sig=-3605925441",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=-3605925440"
        ]
      },
      {
        "name": "Master Bedroom",
        "images": [
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=572101695",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=572101696",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=572101697",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=572101698",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000&sig=572101699",
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1000&sig=572101700",
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000&sig=572101701"
        ]
      },
      {
        "name": "Garden & Landscapes",
        "images": [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=12102321446",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=12102321447",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=12102321448",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=12102321449",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=12102321450",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=12102321451",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=12102321452"
        ]
      }
    ]
  },
  {
    "id": "aurora-spa",
    "title": "Aurora Wellness Spa",
    "category": "Hospitality",
    "location": "Bhilai",
    "year": "2023",
    "client": "Aurora Health",
    "area": "4,500 sq.ft",
    "scope": "Interior Design, Custom Lighting",
    "heroImage": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    "concept": "A serene, cavernous retreat that uses soft light and natural textures to induce deep relaxation.",
    "narrative": [
      "Aurora Wellness Spa was designed as an escape from the bustling city. We sought to create an environment that immediately lowers the heart rate upon entry.",
      "The design features curved, plastered walls that mimic natural grottos, eliminating harsh angles. Indirect, warm lighting highlights the tactile surfaces of the stone and clay finishes.",
      "Acoustics were meticulously managed to ensure complete silence in the treatment rooms, further enhancing the immersive wellness experience."
    ],
    "materials": [
      {
        "name": "Tadelakt Plaster",
        "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
      },
      {
        "name": "Limestone",
        "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80"
      },
      {
        "name": "Brass Accents",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      },
      {
        "name": "Linen",
        "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "A truly transformative space. You feel the stress melt away the moment you walk through the door.",
    "galleries": [
      {
        "name": "Arrival & Reception",
        "images": [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=3628559545",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=3628559546",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=3628559547",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=3628559548",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=3628559549",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=3628559550",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=3628559551"
        ]
      },
      {
        "name": "Guest Suites",
        "images": [
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=-2668286922",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=-2668286921",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-2668286920",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-2668286919",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-2668286918",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=-2668286917",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=-2668286916"
        ]
      },
      {
        "name": "Restaurant & Dining",
        "images": [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=651262385",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=651262386",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=651262387",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=651262388",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=651262389",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=651262390",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=651262391"
        ]
      },
      {
        "name": "Lounge Areas",
        "images": [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=-4390650695",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=-4390650694",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000&sig=-4390650693",
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=-4390650692",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-4390650691",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-4390650690",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-4390650689"
        ]
      },
      {
        "name": "Spa & Wellness",
        "images": [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=-1820316194",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=-1820316193",
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=-1820316192",
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000&sig=-1820316191",
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-1820316190",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-1820316189",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-1820316188"
        ]
      }
    ]
  },
  {
    "id": "the-monolith",
    "title": "The Monolith",
    "category": "Commercial",
    "location": "Raipur",
    "year": "2025",
    "client": "Apex Industries",
    "area": "25,000 sq.ft",
    "scope": "Architecture, Interior Design",
    "heroImage": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    "concept": "A brutalist-inspired corporate headquarters that projects strength and permanence.",
    "narrative": [
      "The Monolith is a bold architectural statement for a leading industrial conglomerate. The design embraces raw concrete and strict geometric forms to convey the company's robust identity.",
      "The massive exterior gives way to a surprisingly light-filled interior, centered around a soaring four-story atrium. This central void acts as the social heart of the building, connecting the various departments.",
      "Interior spaces balance the austere concrete with warm wood panelling and rich leather furnishings, creating a sophisticated corporate environment."
    ],
    "materials": [
      {
        "name": "Board-Formed Concrete",
        "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80"
      },
      {
        "name": "Black Steel",
        "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80"
      },
      {
        "name": "Walnut Paneling",
        "image": "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80"
      },
      {
        "name": "Tan Leather",
        "image": "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80"
      }
    ],
    "quote": "A building that commands respect and inspires our team every day.",
    "galleries": [
      {
        "name": "Main Facade",
        "images": [
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-4852796577",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-4852796576",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=-4852796575",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000&sig=-4852796574",
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=1000&sig=-4852796573",
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000&sig=-4852796572",
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000&sig=-4852796571"
        ]
      },
      {
        "name": "Lobby & Atrium",
        "images": [
          "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000&sig=6496375482",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000&sig=6496375483",
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000&sig=6496375484",
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000&sig=6496375485",
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1000&sig=6496375486",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000&sig=6496375487",
          "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=1000&sig=6496375488"
        ]
      },
      {
        "name": "Office Workspaces",
        "images": [
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-1736862210",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-1736862209",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=-1736862208",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-1736862207",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-1736862206",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000&sig=-1736862205",
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000&sig=-1736862204"
        ]
      },
      {
        "name": "Conference Rooms",
        "images": [
          "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=1000&sig=-512014900",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1000&sig=-512014899",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000&sig=-512014898",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=1000&sig=-512014897",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000&sig=-512014896",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000&sig=-512014895",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=-512014894"
        ]
      },
      {
        "name": "Cafeteria & Breakouts",
        "images": [
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000&sig=-1644712742",
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000&sig=-1644712741",
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1000&sig=-1644712740",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000&sig=-1644712739",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000&sig=-1644712738",
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1000&sig=-1644712737",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&sig=-1644712736"
        ]
      }
    ]
  }
];
