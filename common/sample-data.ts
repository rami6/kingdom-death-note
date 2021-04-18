// This file will be deprecated when db is setup.

import { Dictionary, Resource } from './types';

const resources: Resource[] = [
  {
    name: 'Skull',
    attributes: ['Bone'],
    isConsumable: false,
    isCatRes: false,
    amount: 3,
    amountToBeConsumed: 0,
  },
  {
    name: 'Cat Bone',
    attributes: ['Bone'],
    isConsumable: false,
    isCatRes: true,
    amount: 1,
    amountToBeConsumed: 0,
  },
  {
    name: 'Monster Hide',
    attributes: ['Hide'],
    isConsumable: false,
    isCatRes: false,
    amount: 1,
    amountToBeConsumed: 0,
  },
  {
    name: '???',
    attributes: ['Bone', 'Organ', 'Hide'],
    isConsumable: false,
    isCatRes: false,
    amount: 1,
    amountToBeConsumed: 0,
  },
  {
    name: 'Love Juice',
    attributes: ['Organ'],
    isConsumable: true,
    isCatRes: false,
    amount: 1,
    amountToBeConsumed: 0,
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
