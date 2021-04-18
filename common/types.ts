export interface Dictionary<T> {
    [Key: string]: T;
}

export interface Item {
  name: string;
  attribute: 'bone' | 'organ' | 'hide' | 'any';
  isConsumable: boolean;
  isCatRes: boolean;
  amount: number;
}
