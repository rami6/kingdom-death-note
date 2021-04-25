export interface Dictionary<T> {
    [Key: string]: T;
}

export interface Resource {
  name: string;
  basicAttributes: ('Bone' | 'Organ' | 'Hide')[];
  isConsumable: boolean;
  isCatRes: boolean;
  amount: number;
}
