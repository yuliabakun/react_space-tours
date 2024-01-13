import { atom } from "recoil";
import { Tour } from "../types/Tour";

export const favouritesState = atom({
  key: 'favouritesState',
  default: [] as Tour[],
});
