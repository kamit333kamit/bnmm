import storage from '@/lib/zustandStorage';
import { SubscriptionRow } from '@/types/sbase/subscription';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface SubscriptionState {
  isSubscribed: boolean;
  setSubscribed: (subscribed: boolean) => void;
  subscriptionData?: SubscriptionRow; // Optional: Store subscription data if needed
  setSubscriptionData: (data: SubscriptionRow) => void; // Optional: Function to set subscription data
}

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      isSubscribed: false,
      setSubscribed: (subscribed) => set({ isSubscribed: subscribed }),
      subscriptionData: undefined,
      setSubscriptionData: (data) => {
        if(data.status === 'active') {
          set({ isSubscribed: true });
        } else {
          set({ isSubscribed: false });
        }
        set({ subscriptionData: data });
      },
    }),
    {
      name: 'subscription-storage',
      storage: createJSONStorage(() => storage),
    }
  )
);