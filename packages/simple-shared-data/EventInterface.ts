export interface EventInterface {
  id: number | undefined;
  name: string;
  description: string;
  imageUrl: string | undefined;
  latitude: number | undefined;
  longtitude: number | undefined;
  isActive: boolean;
  get isNew(): boolean
  }
  