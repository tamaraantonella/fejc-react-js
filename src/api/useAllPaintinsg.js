import { useQuery } from '@tanstack/react-query';

const getPaintings = () => {
  return fetch(`https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_id,category_ids,image_id,thumbnail&query[term][artist_id]=40610&size=20`)
    .then(async (response) => (await response.json()))
    .then(({ data }) => {
      return data.map((painting) => ({
        id: painting.id,
        title: painting.title,
        artistTitle: painting.artist_title,
        image_id: painting.image_id ,
        imageAltText: painting.thumbnail.alt_text,
        category_ids: painting.category_ids
      }));
    });
};

export const useAllPaintings = () => {
  return useQuery(['artworks'], () => getPaintings(), {
    staleTime: Infinity
  });
}