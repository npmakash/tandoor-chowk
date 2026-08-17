export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes & Teas', icon: 'Utensils' },
  { id: 'tea', name: 'Kulhad Tea Special', icon: 'Coffee' },
  { id: 'tandoori', name: 'Tandoori Snacks', icon: 'Flame' },
  { id: 'chaat', name: 'Street Chaat & Bites', icon: 'Cookie' },
  { id: 'combos', name: 'Special Combos', icon: 'Gift' },
  { id: 'beverages', name: 'Cool Beverages & Shakes', icon: 'Wine' }
];

export const MENU_ITEMS = [
  // KULHAD TEA SPECIAL
  {
    id: 't1',
    name: 'Special Kulhad Masala Chai',
    category: 'tea',
    price: 30,
    rating: 4.9,
    reviewsCount: 340,
    description: 'Freshly brewed thick milk tea infused with cardamom, ginger, cloves, and secret spices served piping hot in an authentic earthen clay Kulhad.',
    image: '/hero.png',
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      sugar: ['Normal Sugar', 'Less Sugar', 'Sugar-Free'],
      milk: ['Full Cream Milk', 'Double Toned Light Milk']
    }
  },
  {
    id: 't2',
    name: 'Tandoori Smoked Kulhad Chai',
    category: 'tea',
    price: 40,
    rating: 4.95,
    reviewsCount: 420,
    description: 'Chai poured into red-hot kulhad roasted inside live charcoal tandoor, giving it a smoky earthen aroma and unforgettable rich taste.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      sugar: ['Normal Sugar', 'Less Sugar', 'Sugar-Free']
    }
  },
  {
    id: 't3',
    name: 'Kadak Adrak Elaichi Chai',
    category: 'tea',
    price: 25,
    rating: 4.8,
    reviewsCount: 190,
    description: 'Strong tea pounded with crushed fresh ginger root and green cardamoms for instant energy.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      sugar: ['Normal Sugar', 'Less Sugar', 'Sugar-Free']
    }
  },
  {
    id: 't4',
    name: 'Kashmiri Saffron Kahwa',
    category: 'tea',
    price: 60,
    rating: 4.9,
    reviewsCount: 110,
    description: 'Exotic green tea simmered with pure Kashmiri saffron strands, crushed almonds, cinnamon, and cardamom.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 0,
    customizable: false
  },
  {
    id: 't5',
    name: 'Desi Rose Kulhad Chai',
    category: 'tea',
    price: 35,
    rating: 4.7,
    reviewsCount: 95,
    description: 'Creamy chai delicately scented with organic dried rose petals and sweet rose essence.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      sugar: ['Normal Sugar', 'Less Sugar']
    }
  },

  // TANDOORI SNACKS
  {
    id: 's1',
    name: 'Tandoori Paneer Tikka (8 pcs)',
    category: 'tandoori',
    price: 190,
    rating: 4.95,
    reviewsCount: 510,
    description: 'Fresh Cottage Cheese cubes marinated in thick spiced hung curd, yellow mustard oil, and tandoori spices, char-grilled to perfection with bell peppers.',
    image: '/hero.png',
    bestseller: true,
    veg: true,
    spiceLevel: 2,
    customizable: true,
    options: {
      spice: ['Medium Spicy', 'Extra Spicy', 'Mild'],
      chutney: ['Extra Mint Chutney (+₹10)', 'Normal Chutney']
    }
  },
  {
    id: 's2',
    name: 'Tandoori Malai Soya Chaap',
    category: 'tandoori',
    price: 180,
    rating: 4.9,
    reviewsCount: 380,
    description: 'Tender Soya Chaap marinated in rich cashew paste, fresh cream, butter, and black pepper, grilled in charcoal oven with a velvety finish.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 1,
    customizable: true,
    options: {
      sauce: ['Extra Butter & Cream', 'Normal Cream']
    }
  },
  {
    id: 's3',
    name: 'Tandoori Stuffed Mushroom Tikka',
    category: 'tandoori',
    price: 210,
    rating: 4.85,
    reviewsCount: 160,
    description: 'Button mushrooms stuffed with spiced cheese & paneer mash, skewered and roasted over open flames with a smoky outer glaze.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 2,
    customizable: false
  },
  {
    id: 's4',
    name: 'Veg Seekh Kebab (6 pcs)',
    category: 'tandoori',
    price: 160,
    rating: 4.75,
    reviewsCount: 210,
    description: 'Minced fresh vegetables, potatoes, chana dal, and aromatic royal Indian herbs wrapped on skewers and tandoor grilled.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 2,
    customizable: false
  },
  {
    id: 's5',
    name: 'Tandoori Garlic Naan Roll (Paneer)',
    category: 'tandoori',
    price: 140,
    rating: 4.88,
    reviewsCount: 290,
    description: 'Fresh tandoori garlic naan stuffed with smoky paneer tikka, crunchy onions, and spicy mint mayo wrap.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 2,
    customizable: true,
    options: {
      cheese: ['Add Amul Cheese (+₹25)', 'No Extra Cheese']
    }
  },

  // STREET CHAAT & BITES
  {
    id: 'c1',
    name: 'Classic Amul Maska Bun',
    category: 'chaat',
    price: 45,
    rating: 4.8,
    reviewsCount: 620,
    description: 'Ultra soft bakery bun toasted with generous layer of yellow Amul butter, perfect dip companion for Kulhad Chai.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      topping: ['Add Tutti Frutti / Jam (+₹10)', 'Plain Amul Butter']
    }
  },
  {
    id: 'c2',
    name: 'Crispy Samosa with Spicy Chole (2 pcs)',
    category: 'chaat',
    price: 60,
    rating: 4.9,
    reviewsCount: 450,
    description: 'Golden crust potato samosas crushed and topped with tangy Amritsari chole, tamarind chutney, mint sauce, and chopped onions.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 2,
    customizable: true,
    options: {
      curd: ['Add Dahi / Curd (+₹15)', 'Without Curd']
    }
  },
  {
    id: 'c3',
    name: 'Kurkuri Veg Fried Momos (8 pcs)',
    category: 'chaat',
    price: 110,
    rating: 4.85,
    reviewsCount: 320,
    description: 'Extra crunchy cornflake coated vegetable dumpling snacks served with fiery red garlic sauce.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 3,
    customizable: false
  },
  {
    id: 'c4',
    name: 'Desi Paneer Pakora Platter (6 pcs)',
    category: 'chaat',
    price: 130,
    rating: 4.7,
    reviewsCount: 180,
    description: 'Thick paneer slabs layered with green chutney, dipped in spiced besan batter, fried crisp and sprinkled with chaat masala.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 1,
    customizable: false
  },
  {
    id: 'c5',
    name: 'Cheese Corn Balls (6 pcs)',
    category: 'chaat',
    price: 120,
    rating: 4.82,
    reviewsCount: 140,
    description: 'Melt-in-mouth mozzarella cheese and sweet corn crispy croquettes served with spicy dip.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 0,
    customizable: false
  },

  // SPECIAL COMBOS
  {
    id: 'cb1',
    name: 'Chowk Special Chai & Maska Bun Combo',
    category: 'combos',
    price: 70,
    rating: 4.98,
    reviewsCount: 780,
    description: '1x Special Kulhad Masala Chai + 1x Fresh Amul Maska Bun. The ultimate Chandauli evening refreshment combo!',
    image: '/hero.png',
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      sugar: ['Normal Sugar', 'Less Sugar']
    }
  },
  {
    id: 'cb2',
    name: 'Tandoori Feast Platter + 2 Kulhad Chais',
    category: 'combos',
    price: 340,
    rating: 4.95,
    reviewsCount: 410,
    description: '4 pcs Paneer Tikka + 4 pcs Malai Soya Chaap + 2 Seekh Kebabs + Mint Chutney + 2x Hot Kulhad Masala Chais.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 2,
    customizable: false
  },
  {
    id: 'cb3',
    name: 'Chandauli Evening Snack Basket',
    category: 'combos',
    price: 220,
    rating: 4.88,
    reviewsCount: 230,
    description: '2x Samosa Chole Chaat + 1x Paneer Naan Roll + 2x Kulhad Masala Chais. Perfect for friends & family.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 2,
    customizable: false
  },

  // BEVERAGES
  {
    id: 'b1',
    name: 'Royal Kesaria Thandai in Kulhad',
    category: 'beverages',
    price: 80,
    rating: 4.9,
    reviewsCount: 270,
    description: 'Traditional chilled milk drink blended with saffron, almonds, pistachios, watermelon seeds, and rose petals.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: false
  },
  {
    id: 'b2',
    name: 'Kulhad Meethi Malai Lassi',
    category: 'beverages',
    price: 70,
    rating: 4.92,
    reviewsCount: 390,
    description: 'Rich churned sweet yogurt drink topped with thick rabri, chopped dry fruits, and kewra water in earthen pot.',
    image: 'https://images.unsplash.com/photo-1571006682880-928646b9a89c?auto=format&fit=crop&w=800&q=80',
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: false
  },
  {
    id: 'b3',
    name: 'Cold Coffee with Vanilla Scoop',
    category: 'beverages',
    price: 90,
    rating: 4.8,
    reviewsCount: 210,
    description: 'Thick espresso blended cold coffee crowned with a rich scoop of vanilla ice cream and chocolate syrup.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    bestseller: false,
    veg: true,
    spiceLevel: 0,
    customizable: false
  }
];

export const RESTAURANT_INFO = {
  name: 'Tandoor Chowk',
  tagline: 'Authentic Earthen Kulhad Chai & Charcoal Tandoori Snacks',
  phone: '7266911274',
  whatsappNumber: '917266911274',
  address: 'Main Market Road, Near Chowk, Chandauli, Uttar Pradesh - 232104',
  city: 'Chandauli',
  state: 'Uttar Pradesh',
  openingHours: 'Daily 7:00 AM - 10:30 PM',
  deliveryMinOrder: 100,
  deliveryTime: '20-35 Mins',
  features: [
    'Authentic Earthen Clay Kulhad',
    'Live Charcoal Tandoor Grill',
    'Direct 1-Click WhatsApp Ordering',
    'Fresh Hygienic Ingredients'
  ]
};

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: 'Rahul Verma',
    location: 'Chandauli, UP',
    rating: 5,
    comment: 'The Kulhad Tandoori Chai at Tandoor Chowk is out of this world! Incredible smoky flavor, and their Paneer Tikka is so soft and juicy. Ordered via WhatsApp and got hot delivery in 20 minutes!',
    date: 'Yesterday'
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    location: 'Varanasi-Chandauli Highway',
    rating: 5,
    comment: 'Best spot for evening tea and snacks in Chandauli. The Maska Bun with Kulhad Chai combo is our daily routine now. Super polite staff & 7266911274 quick ordering!',
    date: '3 days ago'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    location: 'Chandauli Town',
    rating: 5,
    comment: 'Malai Soya Chaap is unmatched! Yellow & black aesthetic vibe of the place is fancy. Truly a gem restaurant in UP.',
    date: '1 week ago'
  }
];
