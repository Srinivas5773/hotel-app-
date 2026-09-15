/**
 * Raju Garu Hotel - Culinary Recipes & Traditional Woodfire Cooking Specifications [Batch 13]
 * Production Domain Module for Village Restaurant Operations
 */

export interface RecipeSpecification_B13 {
  id: string;
  code: string;
  name: string;
  teluguName: string;
  category: string;
  description: string;
  status: 'Active' | 'Pending' | 'Completed' | 'Archived';
  timestamp: string;
  numericScore: number;
  priceINR: number;
  parameters: {
    primaryFactor: string;
    secondaryFactor: string;
    qualityGrade: 'A+' | 'A' | 'Standard';
    isLocallySourced: boolean;
    safetyVerified: boolean;
    temperatureCelsius: number;
    weightGrams: number;
    auditTimestamp: string;
    certifiedBy: string;
  };
  attributesList: string[];
  operationalGuidelines: string[];
  notes: string;
}

export const DATASET_BATCH_RecipeSpecification_B13: RecipeSpecification_B13[] = [
  {
    id: 'recipe_catalog_13-1',
    code: 'RGH-13-001',
    name: 'Culinary Enterprise Entry 13-1',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-1',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 1 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-02T10:30:00.000Z',
    numericScore: 86,
    priceINR: 60,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 1',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 66,
      weightGrams: 265,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-2',
    code: 'RGH-13-002',
    name: 'Culinary Enterprise Entry 13-2',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-2',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 2 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-03T10:30:00.000Z',
    numericScore: 87,
    priceINR: 70,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 2',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 67,
      weightGrams: 280,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-3',
    code: 'RGH-13-003',
    name: 'Culinary Enterprise Entry 13-3',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-3',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 3 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-04T10:30:00.000Z',
    numericScore: 88,
    priceINR: 80,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 3',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 68,
      weightGrams: 295,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-4',
    code: 'RGH-13-004',
    name: 'Culinary Enterprise Entry 13-4',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-4',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 4 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-05T10:30:00.000Z',
    numericScore: 89,
    priceINR: 90,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 4',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 69,
      weightGrams: 310,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-5',
    code: 'RGH-13-005',
    name: 'Culinary Enterprise Entry 13-5',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-5',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 5 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-06T10:30:00.000Z',
    numericScore: 90,
    priceINR: 100,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 5',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 70,
      weightGrams: 325,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-6',
    code: 'RGH-13-006',
    name: 'Culinary Enterprise Entry 13-6',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-6',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 6 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-07T10:30:00.000Z',
    numericScore: 91,
    priceINR: 110,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 6',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 71,
      weightGrams: 340,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-7',
    code: 'RGH-13-007',
    name: 'Culinary Enterprise Entry 13-7',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-7',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 7 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-08T10:30:00.000Z',
    numericScore: 92,
    priceINR: 120,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 7',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 72,
      weightGrams: 355,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-8',
    code: 'RGH-13-008',
    name: 'Culinary Enterprise Entry 13-8',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-8',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 8 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-09T10:30:00.000Z',
    numericScore: 93,
    priceINR: 130,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 8',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 73,
      weightGrams: 370,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-9',
    code: 'RGH-13-009',
    name: 'Culinary Enterprise Entry 13-9',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-9',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 9 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-10T10:30:00.000Z',
    numericScore: 94,
    priceINR: 140,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 9',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 74,
      weightGrams: 385,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-10',
    code: 'RGH-13-010',
    name: 'Culinary Enterprise Entry 13-10',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-10',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 10 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-11T10:30:00.000Z',
    numericScore: 95,
    priceINR: 150,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 10',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 75,
      weightGrams: 400,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-11',
    code: 'RGH-13-011',
    name: 'Culinary Enterprise Entry 13-11',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-11',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 11 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-12T10:30:00.000Z',
    numericScore: 96,
    priceINR: 160,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 11',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 76,
      weightGrams: 415,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-12',
    code: 'RGH-13-012',
    name: 'Culinary Enterprise Entry 13-12',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-12',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 12 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-13T10:30:00.000Z',
    numericScore: 97,
    priceINR: 170,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 12',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 77,
      weightGrams: 430,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-13',
    code: 'RGH-13-013',
    name: 'Culinary Enterprise Entry 13-13',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-13',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 13 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-14T10:30:00.000Z',
    numericScore: 98,
    priceINR: 180,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 13',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 78,
      weightGrams: 445,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-14',
    code: 'RGH-13-014',
    name: 'Culinary Enterprise Entry 13-14',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-14',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 14 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-15T10:30:00.000Z',
    numericScore: 99,
    priceINR: 190,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 14',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 79,
      weightGrams: 460,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-15',
    code: 'RGH-13-015',
    name: 'Culinary Enterprise Entry 13-15',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-15',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 15 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-16T10:30:00.000Z',
    numericScore: 85,
    priceINR: 200,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 15',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 80,
      weightGrams: 475,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-16',
    code: 'RGH-13-016',
    name: 'Culinary Enterprise Entry 13-16',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-16',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 16 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-17T10:30:00.000Z',
    numericScore: 86,
    priceINR: 210,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 16',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 81,
      weightGrams: 490,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-17',
    code: 'RGH-13-017',
    name: 'Culinary Enterprise Entry 13-17',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-17',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 17 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-18T10:30:00.000Z',
    numericScore: 87,
    priceINR: 220,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 17',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 82,
      weightGrams: 505,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-18',
    code: 'RGH-13-018',
    name: 'Culinary Enterprise Entry 13-18',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-18',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 18 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-19T10:30:00.000Z',
    numericScore: 88,
    priceINR: 230,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 18',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 83,
      weightGrams: 520,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-19',
    code: 'RGH-13-019',
    name: 'Culinary Enterprise Entry 13-19',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-19',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 19 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-20T10:30:00.000Z',
    numericScore: 89,
    priceINR: 240,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 19',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 84,
      weightGrams: 535,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-20',
    code: 'RGH-13-020',
    name: 'Culinary Enterprise Entry 13-20',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-20',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 20 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-21T10:30:00.000Z',
    numericScore: 90,
    priceINR: 250,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 20',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 85,
      weightGrams: 550,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-21',
    code: 'RGH-13-021',
    name: 'Culinary Enterprise Entry 13-21',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-21',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 21 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-22T10:30:00.000Z',
    numericScore: 91,
    priceINR: 260,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 21',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 86,
      weightGrams: 565,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-22',
    code: 'RGH-13-022',
    name: 'Culinary Enterprise Entry 13-22',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-22',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 22 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-23T10:30:00.000Z',
    numericScore: 92,
    priceINR: 270,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 22',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 87,
      weightGrams: 580,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-23',
    code: 'RGH-13-023',
    name: 'Culinary Enterprise Entry 13-23',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-23',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 23 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-24T10:30:00.000Z',
    numericScore: 93,
    priceINR: 280,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 23',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 88,
      weightGrams: 595,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-24',
    code: 'RGH-13-024',
    name: 'Culinary Enterprise Entry 13-24',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-24',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 24 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-25T10:30:00.000Z',
    numericScore: 94,
    priceINR: 290,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 24',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 89,
      weightGrams: 610,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-25',
    code: 'RGH-13-025',
    name: 'Culinary Enterprise Entry 13-25',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-25',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 25 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-26T10:30:00.000Z',
    numericScore: 95,
    priceINR: 300,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 25',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 90,
      weightGrams: 625,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-26',
    code: 'RGH-13-026',
    name: 'Culinary Enterprise Entry 13-26',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-26',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 26 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-27T10:30:00.000Z',
    numericScore: 96,
    priceINR: 310,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 26',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 91,
      weightGrams: 640,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-27',
    code: 'RGH-13-027',
    name: 'Culinary Enterprise Entry 13-27',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-27',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 27 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-28T10:30:00.000Z',
    numericScore: 97,
    priceINR: 320,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 27',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 92,
      weightGrams: 655,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-28',
    code: 'RGH-13-028',
    name: 'Culinary Enterprise Entry 13-28',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-28',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 28 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-01T10:30:00.000Z',
    numericScore: 98,
    priceINR: 330,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 28',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 93,
      weightGrams: 670,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-29',
    code: 'RGH-13-029',
    name: 'Culinary Enterprise Entry 13-29',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-29',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 29 under batch 13.',
    status: 'Pending',
    timestamp: '2026-09-02T10:30:00.000Z',
    numericScore: 99,
    priceINR: 340,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 29',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 94,
      weightGrams: 685,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-30',
    code: 'RGH-13-030',
    name: 'Culinary Enterprise Entry 13-30',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-30',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 30 under batch 13.',
    status: 'Completed',
    timestamp: '2026-09-03T10:30:00.000Z',
    numericScore: 85,
    priceINR: 350,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 30',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A+',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 65,
      weightGrams: 700,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-31',
    code: 'RGH-13-031',
    name: 'Culinary Enterprise Entry 13-31',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-31',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 31 under batch 13.',
    status: 'Archived',
    timestamp: '2026-09-04T10:30:00.000Z',
    numericScore: 86,
    priceINR: 360,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 31',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'A',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 66,
      weightGrams: 715,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
  {
    id: 'recipe_catalog_13-32',
    code: 'RGH-13-032',
    name: 'Culinary Enterprise Entry 13-32',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 13-32',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for culinary recipes & traditional woodfire cooking specifications item 32 under batch 13.',
    status: 'Active',
    timestamp: '2026-09-05T10:30:00.000Z',
    numericScore: 87,
    priceINR: 370,
    parameters: {
      primaryFactor: 'Authentic Traditional Woodfire Method 32',
      secondaryFactor: 'Godavari Delta Regional Quality Standard',
      qualityGrade: 'Standard',
      isLocallySourced: true,
      safetyVerified: true,
      temperatureCelsius: 67,
      weightGrams: 730,
      auditTimestamp: '2026-09-01T08:00:00Z',
      certifiedBy: 'Raju Garu Senior Kitchen Supervisor',
    },
    attributesList: [
      'Pure Desi Ghee Infused',
      'Stone Ground Guntur Red Chilli Blend',
      'Woodfire Cooked on Mango & Tamarind Logs',
      '100% Free of Artificial Colors or Preservatives',
      'Fresh Daily Farm Sourced Produce',
      'Earthenware Clay Pot Sealed Cooking'
    ],
    operationalGuidelines: [
      'Verify raw material freshness prior to morning preparation.',
      'Ensure earthenware pot temperature remains optimal throughout cooking.',
      'Maintain strict food safety, cleanliness, and hygiene protocols.',
      'Coordinate with packaging team for immediate thermal dispatch.'
    ],
    notes: 'Approved by Raju Garu management for daily restaurant menu and special catering operations.'
  },
];

export function getActiveItems_B13(): RecipeSpecification_B13[] {
  return DATASET_BATCH_RecipeSpecification_B13.filter(i => i.status === 'Active');
}

export function findItemById_B13(id: string): RecipeSpecification_B13 | undefined {
  return DATASET_BATCH_RecipeSpecification_B13.find(i => i.id === id);
}

export function computeTotalValuation_B13(): number {
  return DATASET_BATCH_RecipeSpecification_B13.reduce((acc, item) => acc + item.priceINR, 0);
}
