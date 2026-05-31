export const defaultMenuData = {
  burger: {
    label: 'Burger & Sandwiches',
    items: [
      { name: 'Classic Smash Burger', desc: 'Double Smash Patty, Cheddar, Pickles, Mama\'s Secret Sauce', price: '11,90', tag: 'beliebt' },
      { name: 'Pulled Pork Burger', desc: '12h geschmortes Pulled Pork, Coleslaw, BBQ-Sauce', price: '13,90', tag: null },
      { name: 'Crispy Chicken Burger', desc: 'Knuspriges Hühnchen, Jalapeño-Mayo, Salat, Tomate', price: '12,50', tag: null },
      { name: 'Veggie Deluxe Burger', desc: 'Hausgemachter Gemüse-Patty, Avocado, Hummus, Rucola', price: '11,50', tag: 'vegan' },
      { name: 'Mama\'s Spezial', desc: 'Wagyu-Style Patty, Trüffel-Mayo, karamellisierte Zwiebeln, Brioche-Bun', price: '15,90', tag: 'neu' },
    ],
  },
  fries: {
    label: 'Loaded Fries & Sides',
    items: [
      { name: 'Classic Loaded Fries', desc: 'Pommes mit Cheddar-Sauce, Bacon Bits, Frühlingszwiebeln', price: '8,90', tag: 'beliebt' },
      { name: 'Truffle Parmesan Fries', desc: 'Trüffelöl, Parmesan, frische Kräuter', price: '9,50', tag: null },
      { name: 'Sweet Potato Fries', desc: 'Knusprige Süßkartoffel-Pommes mit Sriracha-Mayo', price: '7,90', tag: 'vegan' },
      { name: 'Nachos Supreme', desc: 'Tortilla-Chips, Käse, Guacamole, Jalapeños, Sour Cream', price: '9,90', tag: null },
      { name: 'Onion Rings', desc: 'Knusprig panierte Zwiebelringe mit Dip', price: '6,50', tag: null },
    ],
  },
  bowls: {
    label: 'Bowls & Salate',
    items: [
      { name: 'Poké Bowl', desc: 'Sushi-Reis, Lachs, Avocado, Edamame, Mango, Sesam-Dressing', price: '13,90', tag: 'beliebt' },
      { name: 'Buddha Bowl', desc: 'Quinoa, Süßkartoffel, Kichererbsen, Hummus, Tahini', price: '12,50', tag: 'vegan' },
      { name: 'Chicken Teriyaki Bowl', desc: 'Jasmin-Reis, Teriyaki-Hühnchen, Gemüse, Sesam', price: '12,90', tag: null },
      { name: 'Caesar Salad', desc: 'Romana, Parmesan, Croutons, Caesar-Dressing, Hühnchen', price: '11,50', tag: null },
    ],
  },
  specials: {
    label: 'Streetfood Specials',
    items: [
      { name: 'Gyoza (6 Stk.)', desc: 'Japanische Teigtaschen, gedämpft mit Soja-Dip', price: '7,90', tag: null },
      { name: 'Fish Tacos (3 Stk.)', desc: 'Crispy Fish, Krautsalat, Limetten-Crema, Koriander', price: '10,90', tag: null },
      { name: 'Mama\'s Currywurst', desc: 'Hausgemeachte Currysauce, knusprige Pommes', price: '8,90', tag: 'hausgemacht' },
      { name: 'Falafel Wrap', desc: 'Knusprige Falafel, Hummus, Salat, Tahini-Sauce', price: '9,50', tag: 'vegan' },
      { name: 'Korean BBQ Bao Buns (2 Stk.)', desc: 'Pulled Beef, Kimchi, Sriracha-Mayo, Sesam', price: '10,50', tag: 'neu' },
    ],
  },
  desserts: {
    label: 'Süßes & Desserts',
    items: [
      { name: 'Churros (5 Stk.)', desc: 'Zimtzucker, Schokoladen-Dip', price: '6,90', tag: null },
      { name: 'Mama\'s Brownie', desc: 'Warmer Schokoladen-Brownie mit Vanilleeis', price: '7,50', tag: 'beliebt' },
      { name: 'Banana Split', desc: 'Banane, 3 Sorten Eis, Sahne, Toppings', price: '8,50', tag: null },
      { name: 'Açaí Bowl', desc: 'Açaí, Granola, frische Früchte, Kokos, Honig', price: '9,50', tag: 'vegan' },
    ],
  },
  drinks: {
    label: 'Getränke',
    items: [
      { name: 'Hausgemachte Limonade', desc: 'Zitrone-Minze oder Mango-Maracuja', price: '4,50', tag: 'hausgemacht' },
      { name: 'Fresh Smoothie', desc: 'Beere, Banane, Mango oder Grün', price: '5,90', tag: null },
      { name: 'Craft Beer (0,33l)', desc: 'Wechselnde Sorten, fragt nach der Auswahl!', price: '4,50', tag: null },
      { name: 'Aperol Spritz', desc: 'Der Klassiker', price: '7,50', tag: 'beliebt' },
      { name: 'Mama\'s Signature Cocktail', desc: 'Wechselnde Kreation — lasst euch überraschen!', price: '9,50', tag: 'neu' },
      { name: 'Softdrinks', desc: 'Cola, Fanta, Sprite, Wasser (0,33l)', price: '3,00', tag: null },
    ],
  },
};
