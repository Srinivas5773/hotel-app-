import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '../types';
import { defaultMenuItems } from '../data/defaultMenu';

interface MenuState {
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  updateItem: (id: string, updated: Partial<MenuItem>) => void;
  deleteItem: (id: string) => void;
  toggleAvailability: (id: string) => void;
  toggleSpecial: (id: string) => void;
  resetToDefaultMenu: () => void;
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      items: defaultMenuItems,
      addItem: (itemData) =>
        set((state) => ({
          items: [
            {
              ...itemData,
              id: 'item-' + Date.now(),
            },
            ...state.items,
          ],
        })),
      updateItem: (id, updated) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...updated } : item
          ),
        })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      toggleAvailability: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
          ),
        })),
      toggleSpecial: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, isSpecial: !item.isSpecial } : item
          ),
        })),
      resetToDefaultMenu: () =>
        set({
          items: defaultMenuItems,
        }),
    }),
    {
      name: 'raju_garu_menu_storage',
    }
  )
);
