export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
}

export class Recipe implements Recipe {
    
  name: string;
  description: string;
  imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
