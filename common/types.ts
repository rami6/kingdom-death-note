export interface Dictionary<T> {
    [Key: string]: T;
}

export interface Resource {
  name: string;
  attributes: ('Bone' | 'Organ' | 'Hide')[];
  isConsumable: boolean;
  isCatRes: boolean;
  amount: number;
  amountToBeConsumed: number;
}
