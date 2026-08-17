import chaiImg from '../assets/chai.png';
import coffeeImg from '../assets/coffee.png';
import sandwichImg from '../assets/sandwich.png';
import burgerImg from '../assets/burger.png';
import mocktailImg from '../assets/mocktail.png';
import fingerChipsImg from '../assets/finger_chips.png';

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All 6 Dishes', icon: 'Utensils' },
  { id: 'tea', name: 'Kulhad Tea', icon: 'Coffee' },
  { id: 'coffee', name: 'Coffee', icon: 'Coffee' },
  { id: 'sandwich', name: 'Sandwich', icon: 'Utensils' },
  { id: 'burger', name: 'Burger', icon: 'Flame' },
  { id: 'mocktails', name: 'Mocktails', icon: 'Wine' },
  { id: 'chips', name: 'Finger Chips', icon: 'Cookie' }
];

export const MENU_ITEMS = [
  {
    id: 'd1',
    name: 'Special Kulhad Masala Chai',
    category: 'tea',
    price: 30,
    rating: 4.95,
    reviewsCount: 420,
    description: 'Freshly brewed thick milk tea infused with crushed ginger, cardamom, and secret spices served piping hot in an earthen Kulhad.',
    image: chaiImg,
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      sugar: ['Normal Sugar', 'Less Sugar', 'Sugar-Free'],
      milk: ['Full Cream Milk', 'Double Toned Milk']
    }
  },
  {
    id: 'd2',
    name: 'Cold Coffee with Vanilla Scoop',
    category: 'coffee',
    price: 80,
    rating: 4.9,
    reviewsCount: 310,
    description: 'Thick espresso blended cold coffee crowned with a creamy scoop of vanilla ice cream and chocolate syrup drizzle.',
    image: coffeeImg,
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: true,
    options: {
      ice: ['Normal Ice', 'Less Ice', 'No Ice']
    }
  },
  {
    id: 'd3',
    name: 'Grilled Cheese Club Sandwich',
    category: 'sandwich',
    price: 110,
    rating: 4.88,
    reviewsCount: 290,
    description: 'Toasted triple-layer sandwich stuffed with melting mozzarella cheese, fresh lettuce, tomatoes, cucumbers, and special green chutney.',
    image: sandwichImg,
    bestseller: true,
    veg: true,
    spiceLevel: 1,
    customizable: true,
    options: {
      cheese: ['Extra Cheese (+₹25)', 'Normal Cheese']
    }
  },
  {
    id: 'd4',
    name: 'Crispy Veg Tandoori Burger',
    category: 'burger',
    price: 90,
    rating: 4.92,
    reviewsCount: 380,
    description: 'Golden crispy veg patty topped with liquid cheese slice, fresh onions, tomatoes, and smoky tandoori mayo in a toasted brioche bun.',
    image: burgerImg,
    bestseller: true,
    veg: true,
    spiceLevel: 2,
    customizable: true,
    options: {
      patty: ['Extra Cheese Slice (+₹20)', 'Normal Patty']
    }
  },
  {
    id: 'd5',
    name: 'Fresh Mint Lime Mojito Mocktail',
    category: 'mocktails',
    price: 70,
    rating: 4.9,
    reviewsCount: 240,
    description: 'Chilled sparkling mocktail muddled with garden fresh mint leaves, lemon juice, crushed ice, and sweet soda.',
    image: mocktailImg,
    bestseller: true,
    veg: true,
    spiceLevel: 0,
    customizable: false
  },
  {
    id: 'd6',
    name: 'Crispy Salted Finger Chips (Fries)',
    category: 'chips',
    price: 80,
    rating: 4.85,
    reviewsCount: 350,
    description: 'Deep-fried golden potato finger chips tossed in peri peri salt masala and served with tangy tomato ketchup.',
    image: fingerChipsImg,
    bestseller: true,
    veg: true,
    spiceLevel: 1,
    customizable: true,
    options: {
      seasoning: ['Peri Peri Masala', 'Classic Salted']
    }
  }
];

export const RESTAURANT_INFO = {
  name: 'Tandoor Chowk',
  tagline: 'Fresh Kulhad Chai, Coffee, Sandwiches, Burgers & Finger Chips',
  phone: '7266911274',
  whatsappNumber: '917266911274',
  address: 'Main Market Road, Near Chowk, Chandauli, Uttar Pradesh - 232104',
  city: 'Chandauli',
  state: 'Uttar Pradesh',
  openingHours: 'Daily 7:00 AM - 10:30 PM',
  deliveryMinOrder: 100,
  deliveryTime: '20-35 Mins',
  features: [
    'Fresh Kulhad Masala Chai & Cold Coffee',
    'Crispy Sandwiches & Tandoori Burgers',
    'Direct 1-Click WhatsApp Ordering',
    'Fresh Hygienic Preparation'
  ]
};

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: 'Rahul Verma',
    location: 'Chandauli, UP',
    rating: 5,
    comment: 'The Kulhad Chai and Grilled Cheese Sandwich at Tandoor Chowk are incredible! Ordered via WhatsApp and got hot delivery in 20 minutes!',
    date: 'Yesterday'
  },
  {
    id: 2,
    name: 'Anjali Sharma',
    location: 'Chandauli Market',
    rating: 5,
    comment: 'Best Cold Coffee & Veg Burger in Chandauli! Super fast 7266911274 WhatsApp ordering.',
    date: '3 days ago'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    location: 'Chandauli Town',
    rating: 5,
    comment: 'Crispy Finger Chips and Mint Lime Mojito are top tier! Love the black and yellow vibe.',
    date: '1 week ago'
  }
];
