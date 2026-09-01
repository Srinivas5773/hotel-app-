/**
 * Raju Garu Hotel - Village & Regional Landmarks Directory
 * Comprehensive geo-directory of East/West Godavari and Coastal Andhra regions,
 * serving local customers with quick-pick landmark identifiers and delivery zones.
 */

export interface VillageLandmark {
  id: string;
  name: string;
  nameTelugu: string;
  district: string;
  mandal: string;
  pincode: string;
  zone: 'North' | 'South' | 'East' | 'West' | 'Center';
  estimatedDeliveryMins: number;
  popularLandmarks: string[];
}

export const ANDHRA_VILLAGE_DIRECTORY: VillageLandmark[] = [
  {
    id: 'vil-01',
    name: 'Village Center / Main Bazaar',
    nameTelugu: 'గ్రామ సెంటర్ / మెయిన్ బజార్',
    district: 'East Godavari',
    mandal: 'Rajahmundry Rural',
    pincode: '533101',
    zone: 'Center',
    estimatedDeliveryMins: 15,
    popularLandmarks: [
      'Near Ramalayam Temple',
      'Opposite Old Panchayat Office',
      'Near Clock Tower',
      'Gandhi Statue Junction',
      'SBI Bank Street',
      'Main Market Complex'
    ]
  },
  {
    id: 'vil-02',
    name: 'Temple Street & Agraharam',
    nameTelugu: 'గుడి వీధి & అగ్రహారం',
    district: 'East Godavari',
    mandal: 'Rajahmundry Rural',
    pincode: '533102',
    zone: 'North',
    estimatedDeliveryMins: 18,
    popularLandmarks: [
      'Near Shiva Temple Arch',
      'Sita Rama Kalyana Mandapam',
      'Brahmin Street Arch',
      'Veda Patashala Road',
      'Anjaneya Swamy Kovela'
    ]
  },
  {
    id: 'vil-03',
    name: 'Rytubazar & Agriculture Market',
    nameTelugu: 'రైతుబజార్ & మార్కెట్ యార్డ్',
    district: 'East Godavari',
    mandal: 'Rajahmundry Rural',
    pincode: '533103',
    zone: 'East',
    estimatedDeliveryMins: 20,
    popularLandmarks: [
      'Rythu Bharosa Kendram (RBK)',
      'Cold Storage Gate 1',
      'Fertilizer Depot Street',
      'Tractor Stand Corner',
      'Cotton Market Shed'
    ]
  },
  {
    id: 'vil-04',
    name: 'Canal Road & River Bund',
    nameTelugu: 'కాలువ గట్టు & నది తీరం',
    district: 'East Godavari',
    mandal: 'Rajahmundry Rural',
    pincode: '533104',
    zone: 'South',
    estimatedDeliveryMins: 22,
    popularLandmarks: [
      'Godavari Canal Sluice Gate',
      'Boat Jetty Point',
      'Fishermen Colony Lane 3',
      'Old Coconut Yard',
      'Paddy Field Culvert'
    ]
  },
  {
    id: 'vil-05',
    name: 'National Highway Bypass & Petrol Bunk',
    nameTelugu: 'బైపాస్ రోడ్ & పెట్రోల్ బంక్',
    district: 'East Godavari',
    mandal: 'Rajahmundry Rural',
    pincode: '533105',
    zone: 'West',
    estimatedDeliveryMins: 25,
    popularLandmarks: [
      'HPCL Highway Petrol Pump',
      'Lorry Transport Yard',
      'Toll Plaza Service Road',
      'Modern Rice Mill Compound',
      'Automobile Garage Strip'
    ]
  },
  {
    id: 'vil-06',
    name: 'Zilla Parishad High School Road',
    nameTelugu: 'జెడ్పీ హైస్కూల్ రోడ్',
    district: 'East Godavari',
    mandal: 'Rajahmundry Rural',
    pincode: '533106',
    zone: 'North',
    estimatedDeliveryMins: 20,
    popularLandmarks: [
      'Government Hospital Junction',
      'Anganwadi Center 2',
      'Post Office Quarters',
      'Water Overhead Tank',
      'Playground Gate'
    ]
  }
];

export const ACCEPTABLE_LOCATION_CHIPS = [
  'Near Ramalayam Temple',
  'Main Bazaar Center',
  'Bus Stand Road',
  'Opp. Panchayat Office',
  'Near Water Tank',
  'Bypass Petrol Pump',
  'Canal Bund Road',
  'Hospital Junction'
];
