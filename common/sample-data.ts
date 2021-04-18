// This file will be deprecated when db is setup.

import { Dictionary, Item as Resource } from './types';

const resources: Resource[] = [
  {
    name: 'Skull',
    attribute: 'bone',
    isConsumable: false,
    isCatRes: false,
    amount: 3,
  },
  {
    name: 'Cat Bone',
    attribute: 'bone',
    isConsumable: false,
    isCatRes: true,
    amount: 1,
  },
  {
    name: 'Monster Hide',
    attribute: 'hide',
    isConsumable: false,
    isCatRes: false,
    amount: 1,
  },
  {
    name: '???',
    attribute: 'any',
    isConsumable: false,
    isCatRes: false,
    amount: 1,
  },
  {
    name: 'Love Juice',
    attribute: 'organ',
    isConsumable: true,
    isCatRes: false,
    amount: 1,
  },
];

export const resourceByName: Dictionary<Resource> = resources.reduce((acc, res) => {
  if (acc[res.name]) {
    throw Error; // Shouldn't reach here.
  }
  acc[res.name] = res;
  return acc;
}, {});
