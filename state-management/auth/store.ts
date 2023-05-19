import { create } from "zustand";

interface UserStore {
    user: string;
    login: (username: string) => void;
    logout: () => void;
}

/* instead of state as the parameter for set, we can use () to indicate that we 
do not need the current state, since we are just setting the user to the username 
and we are not computing the next state based on the current state */

const useUserStore = create<UserStore>(set => ({
  user: '',
  login: username => set(() => ({ user: username })),
  logout: () => set(() => ({ user: '' }))
}));

export default useUserStore;
