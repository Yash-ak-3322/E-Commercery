import { atom } from "jotai";

export const addressAtom = atom([]);

export const addressFormDataAtom = atom({
  fullName: "",
  city: "",
  country: "",
  postalCode: "",
  address: "",
});

export const allOrdersForUserAtom = atom([]);

export const orderDetailsAtom = atom(null);

export const allOrdersForAllUsersAtom = atom([]);

// export const [addresses, setAddresses] = useAtom(addressAtom);
