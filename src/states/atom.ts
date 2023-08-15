import { atom, selector } from "recoil";

export const isMobileState = atom<boolean>({
    key: 'isMobileState',
    default: false,
});

export const sample = atom<string>({
    key: 'sample',
    default: '',
});

export const sampleSelector = selector<string>({
    key: 'sampleSelector',
    get: ({ get }) => get(sample) + '+plus',
    set: ({ set }, newValue) => set(sample, newValue),
});