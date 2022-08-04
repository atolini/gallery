interface Ihero { 
  small: string, 
  large: string, 
}

interface IImages { 
  thumbnail: string, 
  hero: Ihero, 
  gallery: string,
}

interface IArtist { 
  image: string,
  name: string,
}

interface IObject {
  id: number,
  name: string, 
  year: number, 
  description: string, 
  source: string,
  artist: IArtist, 
  images: IImages,
}

export { IObject }