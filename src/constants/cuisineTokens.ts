/**
 * Raju Garu Hotel - Authentic Andhra Culinary Tokens & Glossary
 * Traditional woodfire recipes, spice levels, cooking techniques, and dietary metadata.
 */

export interface CulinaryTradition {
  id: string;
  name: string;
  nameTelugu: string;
  significance: string;
  nativeIngredients: string[];
  cookingMethod: 'Woodfire Earthen Pot' | 'Dum Slow Cook' | 'Tawa Roast' | 'Ghee Tempering';
}

export const ANDHRA_CULINARY_TRADITIONS: CulinaryTradition[] = [
  {
    id: 'trad-01',
    name: 'Natu Kodi Woodfire Simmering',
    nameTelugu: 'కట్టెల పొయ్యి నాటు కోడి ఇగురు',
    significance: 'Free-range village country chicken cooked slowly over mango and tamarind wood logs in red clay handis.',
    nativeIngredients: [
      'Desi Country Chicken',
      'Stone Ground Guntur Red Chilli',
      'Cold Pressed Groundnut Oil',
      'Roasted Coriander & Cumin',
      'Shallots (Chinna Vullipayalu)',
      'Fresh Curry Leaves'
    ],
    cookingMethod: 'Woodfire Earthen Pot'
  },
  {
    id: 'trad-02',
    name: 'Godavari Gongura Mutton / Chicken Blend',
    nameTelugu: 'గోదావరి గోంగూర ఘుమఘుమలు',
    significance: 'Hand-plucked tart red-stemmed Gongura leaves sauteed in pure groundnut oil and fused with spiced meat.',
    nativeIngredients: [
      'Red Stemmed Gongura (Punti Kura)',
      'Roasted Fenugreek Powder',
      'Crushed Garlic Pods',
      'Dried Red Chillies',
      'Ginger-Garlic Paste'
    ],
    cookingMethod: 'Woodfire Earthen Pot'
  },
  {
    id: 'trad-03',
    name: 'Guntur Karam Ghee Dosa Roasting',
    nameTelugu: 'గుంటూరు కారం నెయ్యి రోస్ట్',
    significance: 'Fermented stone-ground batter spread on seasoned cast-iron tawas and roasted with hot desi ghee.',
    nativeIngredients: [
      'Urad Dal (Minapappu)',
      'Aged Sona Masoori Rice',
      'Pure Buffalo Ghee',
      'Guntur Chilli Garlic Podi',
      'Roasted Chana Dal (Pappula Podi)'
    ],
    cookingMethod: 'Tawa Roast'
  },
  {
    id: 'trad-04',
    name: 'Authentic Andhra Dum Biryani',
    nameTelugu: 'సాంప్రదాయ ఆంధ్ర దమ్ బిర్యానీ',
    significance: 'Long grain basmati layered with marinated meat, fried shallots, saffron, mint, and sealed with dough for slow steam infusion.',
    nativeIngredients: [
      'Extra Long Grain Aged Basmati',
      'Yogurt (Perugu)',
      'Saffron (Kunkuma Puvvu)',
      'Mace & Nutmeg (Japatri & Jajikaya)',
      'Shahi Jeera',
      'Clarified Butter (Neyyi)'
    ],
    cookingMethod: 'Dum Slow Cook'
  }
];

export const SPICE_LEVEL_METADATA = {
  Mild: {
    label: 'Mild (తక్కువ కారం)',
    scovilleEstimate: '500 - 1,500 SHU',
    description: 'Gentle aromatic spice blend suitable for children and sensitive palates.'
  },
  Medium: {
    label: 'Medium (మితమైన కారం)',
    scovilleEstimate: '2,500 - 5,000 SHU',
    description: 'Balanced authentic home style spice level with fragrant aroma.'
  },
  'Andhra Spicy': {
    label: 'Andhra Spicy (గాటైన గుంటూరు కారం 🔥)',
    scovilleEstimate: '10,000 - 25,000 SHU',
    description: 'Fiery authentic Andhra style spiced with pure sun-dried Guntur red chillies.'
  }
};
