export const HOTEL_INFO = {
  location: "789 Modern Blvd, Cityscape",
  name: "Hodel d'Ottawa",
  phone: "(555) 123-4567",
  initials: "HO",
  email: "hodel@gmail.com",
  avatar_url:'./hotel.jpg',
  location_url:'https://maps.app.goo.gl/4AGz2jwQSajEB8fz6',
  description: "A modern hotel located in the heart of the city, offering a variety of rooms equipped with all the amenities you need for a comfortable stay. Conveniently located near major attractions, restaurants, and shopping centers.",
  description_fr: "Un hôtel moderne situé au cœur de la ville, offrant une variété de chambres équipées de toutes les commodités nécessaires pour un séjour confortable. Idéalement situé à proximité des principales attractions, des restaurants et des centres commerciaux.",
} as const;


export const ROOM_DATA = {
  rooms: [
    {
      id: 0,
      name: "Bright and Spacious Room",
      imageUrl: "/hotel_0.jpg",
      description: "A bright and spacious motel room with a cheerful atmosphere. The room features a double bed with a white wooden headboard, colorful floral linens, and matching curtains. There's a small dining area with a table and two chairs, and a dresser with a mirror. The walls are painted in a light yellow color, and the floor has light wood laminate. A large window allows plenty of natural light into the room.",
      description_fr: "Une chambre de motel lumineuse et spacieuse avec une atmosphère joyeuse. La chambre dispose d'un lit double avec une tête de lit en bois blanc, de draps fleuris colorés et de rideaux assortis. Il y a un petit coin repas avec une table et deux chaises, ainsi qu'une commode avec un miroir. Les murs sont peints en jaune clair et le sol est en stratifié de bois clair. Une grande fenêtre laisse entrer beaucoup de lumière naturelle dans la chambre.",
      amenities: [
        { english: "Free Wi-Fi", french: "Wi-Fi gratuit" },
        { english: "Flat-screen TV", french: "Télévision à écran plat" },
        { english: "Air conditioning", french: "Climatisation" },
        { english: "Complimentary breakfast", french: "Petit-déjeuner offert" },
        { english: "24-hour room service", french: "Service en chambre 24h/24" }
      ],
      price: 95,
      available: true,
    },
    {
      id: 1,
      name: "Cozy Cabin Style Room",
      imageUrl: "/hotel_1.jpg",
      description: "A small but cozy motel room with rustic decor. The room has a full-sized bed with a wooden headboard, plaid bedspread, and matching curtains. There's a small wooden table with two chairs, and a dresser with an old-style TV. The walls are paneled with wood, giving a cabin-like feel, and the floor is covered with a warm-toned carpet.",
      description_fr: "Une petite chambre de motel mais confortable avec une décoration rustique. La chambre dispose d'un lit double avec une tête de lit en bois, d'une couverture à carreaux et de rideaux assortis. Il y a une petite table en bois avec deux chaises et une commode avec une télévision de style ancien. Les murs sont lambrissés de bois, donnant une ambiance de cabine, et le sol est recouvert d'une moquette aux tons chauds.",
      amenities: [
        { english: "Free Wi-Fi", french: "Wi-Fi gratuit" },
        { english: "Flat-screen TV", french: "Télévision à écran plat" },
        { english: "Air conditioning", french: "Climatisation" },
        { english: "Complimentary toiletries", french: "Articles de toilette offerts" },
        { english: "24-hour front desk service", french: "Réception 24h/24" }
      ],
      price: 76,
      available: true,
    },
    {
      id: 2,
      name: "Modern Sleek Room",
      imageUrl: "/hotel_2.jpg",
      description: "A modern motel room with a sleek design. The room includes a queen-sized bed with a minimalist black headboard, gray linens, and matching curtains. There’s a glass-topped desk with a stylish chair, and a wall-mounted flat-screen TV. The walls are painted in a light gray color, and there’s a hardwood floor with a small area rug. A floor-to-ceiling window provides a view outside.",
      description_fr: "Une chambre de motel moderne avec un design épuré. La chambre comprend un lit queen-size avec une tête de lit noire minimaliste, des draps gris et des rideaux assortis. Il y a un bureau en verre avec une chaise élégante et une télévision à écran plat murale. Les murs sont peints en gris clair et le sol est en bois franc avec un petit tapis. Une fenêtre du sol au plafond offre une vue sur l'extérieur.",
      amenities: [
        { english: "High-speed Internet", french: "Internet haut débit" },
        { english: "Smart TV", french: "Télévision intelligente" },
        { english: "Mini-bar", french: "Mini-bar" },
        { english: "Climate control", french: "Contrôle de climat" },
        { english: "Daily housekeeping", french: "Service de ménage quotidien" }
      ],
      price: 120,
      available: true,
    },
  ],
} as const;

