export type Movie = {
  id: number;
  name: string;
  previewImage: string;
  posterImage: string;
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: string,
  isFavorite: boolean,
};
