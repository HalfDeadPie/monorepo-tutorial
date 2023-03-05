import { EventInterface } from "@my-namespace/simple-shared-data/EventInterface";

export class Event implements EventInterface{
    id: number | undefined;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    latitude: number | undefined;
    longtitude: number | undefined;
    isActive: boolean = false;
    get isNew(): boolean {
      return this.id === undefined;
    }

  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.description) this.description = initializer.description;
      if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
      if (initializer.latitude) this.latitude = initializer.latitude;
      if (initializer.longtitude) this.longtitude = initializer.longtitude;
    }
  }