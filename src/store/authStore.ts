import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  customers: User[]; // Registered members & login candidates directory
  isAdminAuthenticated: boolean;
  loginSimple: (name: string, phone: string, location: string, locationUrl?: string) => void;
  loginGoogle: (mockUser?: Partial<User>) => void;
  loginGuest: () => void;
  updateProfile: (data: Partial<User>) => void;
  deleteCustomer: (customerId: string) => void;
  logout: () => void;
  loginAdmin: (username: string, pass: string) => boolean;
  logoutAdmin: () => void;
}

const sampleCustomers: User[] = [
  {
    id: 'usr-101',
    name: 'Suresh Varma',
    phone: '9848022338',
    location: 'Near Water Tank, Gandhi Chowk, Village',
    locationUrl: 'https://maps.google.com/?q=16.9890,81.7840',
    isLoggedIn: false,
    isGuest: false,
    authProvider: 'phone',
    registeredAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
  },
  {
    id: 'usr-102',
    name: 'Kalyan Chakravarthy',
    phone: '9988776655',
    location: 'Bazaar Center & Market Road',
    locationUrl: 'https://maps.google.com/?q=16.9910,81.7820',
    isLoggedIn: false,
    isGuest: false,
    authProvider: 'google',
    registeredAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
  },
  {
    id: 'usr-103',
    name: 'Anasuya Devi',
    phone: '9440123456',
    location: 'Near Ramalayam Temple, Main Street',
    locationUrl: 'https://maps.google.com/?q=16.9880,81.7850',
    isLoggedIn: false,
    isGuest: false,
    authProvider: 'phone',
    registeredAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null, // Null by default on start so user sees login screen
      customers: sampleCustomers,
      isAdminAuthenticated: false,
      loginSimple: (name, phone, location, locationUrl) => {
        const newUser: User = {
          id: 'usr-' + Date.now(),
          name: name.trim() || 'Guest Customer',
          phone: phone.trim(),
          location: location.trim() || 'Village Area',
          locationUrl: locationUrl?.trim() || undefined,
          isLoggedIn: true,
          isGuest: false,
          authProvider: 'phone',
          registeredAt: new Date().toISOString(),
        };

        set((state) => {
          // Check if phone already exists in customers directory, update or add
          const existingIdx = state.customers.findIndex(
            (c) => c.phone.trim() === phone.trim()
          );
          let updatedCustomers = [...state.customers];
          if (existingIdx >= 0) {
            updatedCustomers[existingIdx] = {
              ...updatedCustomers[existingIdx],
              name: newUser.name,
              location: newUser.location,
              locationUrl: newUser.locationUrl || updatedCustomers[existingIdx].locationUrl,
            };
          } else {
            updatedCustomers = [newUser, ...updatedCustomers];
          }

          return {
            user: newUser,
            customers: updatedCustomers,
          };
        });
      },
      loginGoogle: (mockUser) => {
        const newUser: User = {
          id: 'usr-g-' + Date.now(),
          name: mockUser?.name || 'Srinivasa Varma',
          phone: mockUser?.phone || '9347671131',
          location: mockUser?.location || 'Near Ramalayam Temple, Main Street',
          locationUrl: mockUser?.locationUrl || 'https://maps.google.com/?q=16.9890,81.7840',
          isLoggedIn: true,
          isGuest: false,
          authProvider: 'google',
          registeredAt: new Date().toISOString(),
          ...mockUser,
        };

        set((state) => {
          const existingIdx = state.customers.findIndex(
            (c) => c.phone.trim() === newUser.phone.trim()
          );
          let updatedCustomers = [...state.customers];
          if (existingIdx >= 0) {
            updatedCustomers[existingIdx] = {
              ...updatedCustomers[existingIdx],
              ...newUser,
            };
          } else {
            updatedCustomers = [newUser, ...updatedCustomers];
          }

          return {
            user: newUser,
            customers: updatedCustomers,
          };
        });
      },
      loginGuest: () => {
        set({
          user: {
            id: 'guest-' + Date.now(),
            name: 'Village Guest',
            phone: '',
            location: 'Main Road',
            locationUrl: '',
            isLoggedIn: true,
            isGuest: true,
            authProvider: 'guest',
            registeredAt: new Date().toISOString(),
          },
        });
      },
      updateProfile: (data) => {
        set((state) => {
          const updatedUser = state.user ? { ...state.user, ...data } : null;
          let updatedCustomers = state.customers;
          if (updatedUser && updatedUser.phone) {
            updatedCustomers = state.customers.map((c) =>
              c.phone === updatedUser.phone ? { ...c, ...data } : c
            );
          }
          return {
            user: updatedUser,
            customers: updatedCustomers,
          };
        });
      },
      deleteCustomer: (customerId) => {
        set((state) => ({
          customers: state.customers.filter((c) => c.id !== customerId),
        }));
      },
      logout: () => {
        set({
          user: null,
        });
      },
      loginAdmin: (username, pass) => {
        if (username.trim().toLowerCase() === 'raju' && pass === 'raju123') {
          set({ isAdminAuthenticated: true });
          return true;
        }
        return false;
      },
      logoutAdmin: () => {
        set({ isAdminAuthenticated: false });
      },
    }),
    {
      name: 'raju_garu_auth_storage',
    }
  )
);
