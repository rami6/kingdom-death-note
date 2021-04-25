// This file will be deprecated when db is setup.

import { Dictionary, Resource } from './types';

const resources: Resource[] = [
  {
    name: 'Skull',
    attributes: ['Bone'],
    isConsumable: false,
    isCatRes: false,
    amount: 3,
  },
  {
    name: 'Cat Bone',
    attributes: ['Bone'],
    isConsumable: true,
    isCatRes: true,
    amount: 1,
  },
  {
    name: 'Monster Hide',
    attributes: ['Hide'],
    isConsumable: false,
    isCatRes: false,
    amount: 1,
  },
  {
    name: '???',
    attributes: ['Bone', 'Organ', 'Hide'],
    isConsumable: false,
    isCatRes: false,
    amount: 1,
  },
  {
    name: 'Love Juice',
    attributes: ['Organ'],
    isConsumable: true,
    isCatRes: false,
    amount: 1,
  },
];

export const resourceByName: Dictionary<Resource> = resources.reduce(
  (acc, res) => {
    if (acc[res.name]) {
      throw Error; // Shouldn't reach here.
    }
    acc[res.name] = res;
    return acc;
  },
  {}
);
