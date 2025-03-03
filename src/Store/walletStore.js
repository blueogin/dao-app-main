import { create } from 'zustand';

export const useWalletStore = create((set)=>({
    account: undefined,
    actions: {
      setAccount: (_account) => {
        set({ account: _account });
      }
    }
  })
);
