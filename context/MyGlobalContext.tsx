import { createContext, useContext } from "react";

export type GlobalContext = {
  sofia_fontLoaded?: boolean;
  caveat_fontLoaded?: boolean;
  indieFlower_fontLoaded?: boolean;
};

export const MyGlobalContext = createContext<GlobalContext>({
  sofia_fontLoaded: false,
  caveat_fontLoaded: false,
  indieFlower_fontLoaded: false,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
