import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HotelSettings } from '../types';
import { defaultHotelSettings } from '../data/defaultMenu';

interface SettingsState {
  settings: HotelSettings;
  updateSettings: (newSettings: Partial<HotelSettings>) => void;
  resetSettings: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: {
        ...defaultHotelSettings,
        name: 'Raju Garu Hotel',
        phone: '+919347671131',
        whatsappNumber: '9347671131',
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () =>
        set({
          settings: {
            ...defaultHotelSettings,
            name: 'Raju Garu Hotel',
            phone: '+919347671131',
            whatsappNumber: '9347671131',
          },
        }),
    }),
    {
      name: 'raju_garu_settings_storage',
    }
  )
);
