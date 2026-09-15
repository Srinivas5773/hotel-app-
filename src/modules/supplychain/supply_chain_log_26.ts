/**
 * Raju Garu Hotel - Direct Farmer Procurement, Sona Masoori Milling & Quality Batches [Batch 26]
 * Production Domain Module for Village Restaurant Operations
 */

export interface SupplyChainBatchLog_B26 {
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

export const DATASET_BATCH_SupplyChainBatchLog_B26: SupplyChainBatchLog_B26[] = [
  {
    id: 'supply_chain_log_26-1',
    code: 'RGH-26-001',
    name: 'Direct Enterprise Entry 26-1',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-1',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 1 under batch 26.',
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
    id: 'supply_chain_log_26-2',
    code: 'RGH-26-002',
    name: 'Direct Enterprise Entry 26-2',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-2',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 2 under batch 26.',
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
    id: 'supply_chain_log_26-3',
    code: 'RGH-26-003',
    name: 'Direct Enterprise Entry 26-3',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-3',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 3 under batch 26.',
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
    id: 'supply_chain_log_26-4',
    code: 'RGH-26-004',
    name: 'Direct Enterprise Entry 26-4',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-4',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 4 under batch 26.',
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
    id: 'supply_chain_log_26-5',
    code: 'RGH-26-005',
    name: 'Direct Enterprise Entry 26-5',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-5',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 5 under batch 26.',
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
    id: 'supply_chain_log_26-6',
    code: 'RGH-26-006',
    name: 'Direct Enterprise Entry 26-6',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-6',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 6 under batch 26.',
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
    id: 'supply_chain_log_26-7',
    code: 'RGH-26-007',
    name: 'Direct Enterprise Entry 26-7',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-7',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 7 under batch 26.',
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
    id: 'supply_chain_log_26-8',
    code: 'RGH-26-008',
    name: 'Direct Enterprise Entry 26-8',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-8',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 8 under batch 26.',
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
    id: 'supply_chain_log_26-9',
    code: 'RGH-26-009',
    name: 'Direct Enterprise Entry 26-9',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-9',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 9 under batch 26.',
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
    id: 'supply_chain_log_26-10',
    code: 'RGH-26-010',
    name: 'Direct Enterprise Entry 26-10',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-10',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 10 under batch 26.',
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
    id: 'supply_chain_log_26-11',
    code: 'RGH-26-011',
    name: 'Direct Enterprise Entry 26-11',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-11',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 11 under batch 26.',
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
    id: 'supply_chain_log_26-12',
    code: 'RGH-26-012',
    name: 'Direct Enterprise Entry 26-12',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-12',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 12 under batch 26.',
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
    id: 'supply_chain_log_26-13',
    code: 'RGH-26-013',
    name: 'Direct Enterprise Entry 26-13',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-13',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 13 under batch 26.',
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
    id: 'supply_chain_log_26-14',
    code: 'RGH-26-014',
    name: 'Direct Enterprise Entry 26-14',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-14',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 14 under batch 26.',
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
    id: 'supply_chain_log_26-15',
    code: 'RGH-26-015',
    name: 'Direct Enterprise Entry 26-15',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-15',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 15 under batch 26.',
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
    id: 'supply_chain_log_26-16',
    code: 'RGH-26-016',
    name: 'Direct Enterprise Entry 26-16',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-16',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 16 under batch 26.',
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
    id: 'supply_chain_log_26-17',
    code: 'RGH-26-017',
    name: 'Direct Enterprise Entry 26-17',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-17',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 17 under batch 26.',
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
    id: 'supply_chain_log_26-18',
    code: 'RGH-26-018',
    name: 'Direct Enterprise Entry 26-18',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-18',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 18 under batch 26.',
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
    id: 'supply_chain_log_26-19',
    code: 'RGH-26-019',
    name: 'Direct Enterprise Entry 26-19',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-19',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 19 under batch 26.',
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
    id: 'supply_chain_log_26-20',
    code: 'RGH-26-020',
    name: 'Direct Enterprise Entry 26-20',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-20',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 20 under batch 26.',
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
    id: 'supply_chain_log_26-21',
    code: 'RGH-26-021',
    name: 'Direct Enterprise Entry 26-21',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-21',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 21 under batch 26.',
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
    id: 'supply_chain_log_26-22',
    code: 'RGH-26-022',
    name: 'Direct Enterprise Entry 26-22',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-22',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 22 under batch 26.',
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
    id: 'supply_chain_log_26-23',
    code: 'RGH-26-023',
    name: 'Direct Enterprise Entry 26-23',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-23',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 23 under batch 26.',
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
    id: 'supply_chain_log_26-24',
    code: 'RGH-26-024',
    name: 'Direct Enterprise Entry 26-24',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-24',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 24 under batch 26.',
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
    id: 'supply_chain_log_26-25',
    code: 'RGH-26-025',
    name: 'Direct Enterprise Entry 26-25',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-25',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 25 under batch 26.',
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
    id: 'supply_chain_log_26-26',
    code: 'RGH-26-026',
    name: 'Direct Enterprise Entry 26-26',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-26',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 26 under batch 26.',
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
    id: 'supply_chain_log_26-27',
    code: 'RGH-26-027',
    name: 'Direct Enterprise Entry 26-27',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-27',
    category: 'Curries',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 27 under batch 26.',
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
    id: 'supply_chain_log_26-28',
    code: 'RGH-26-028',
    name: 'Direct Enterprise Entry 26-28',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-28',
    category: 'Snacks',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 28 under batch 26.',
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
    id: 'supply_chain_log_26-29',
    code: 'RGH-26-029',
    name: 'Direct Enterprise Entry 26-29',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-29',
    category: 'Beverages',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 29 under batch 26.',
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
    id: 'supply_chain_log_26-30',
    code: 'RGH-26-030',
    name: 'Direct Enterprise Entry 26-30',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-30',
    category: 'Tiffins',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 30 under batch 26.',
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
    id: 'supply_chain_log_26-31',
    code: 'RGH-26-031',
    name: 'Direct Enterprise Entry 26-31',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-31',
    category: 'Meals',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 31 under batch 26.',
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
    id: 'supply_chain_log_26-32',
    code: 'RGH-26-032',
    name: 'Direct Enterprise Entry 26-32',
    teluguName: 'రాజు గారి ప్రామాణిక నమోదు 26-32',
    category: 'Biryani',
    description: 'Comprehensive enterprise operational specification for direct farmer procurement, sona masoori milling & quality batches item 32 under batch 26.',
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

export function getActiveItems_B26(): SupplyChainBatchLog_B26[] {
  return DATASET_BATCH_SupplyChainBatchLog_B26.filter(i => i.status === 'Active');
}

export function findItemById_B26(id: string): SupplyChainBatchLog_B26 | undefined {
  return DATASET_BATCH_SupplyChainBatchLog_B26.find(i => i.id === id);
}

export function computeTotalValuation_B26(): number {
  return DATASET_BATCH_SupplyChainBatchLog_B26.reduce((acc, item) => acc + item.priceINR, 0);
}
