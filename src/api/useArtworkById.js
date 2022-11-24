import { useQuery } from '@tanstack/react-query';

const fieldIncludes = [
  'id',
  'title',
  'artist_title',
  'image_id',
  'thumbnail',
  'category_titles'
].join(',');

const getArtworkById = (id, size) => {
  return fetch(
    `https://api.artic.edu/api/v1/artworks/${id}?${new URLSearchParams({
      fields: fieldIncludes
    })}`
  )
    .then(async (response) => (await response.json()))
    .then(({ data, config }) => ({
      id: data.id,
      title: data.title,
      artistTitle: data.artist_title,
      imageUrl: `${config.iiif_url}/${data.image_id}/full/${size},/0/default.png`,
      imageAltText: data.thumbnail.alt_text,
      categoryTitles: data.category_titles
    }));
};

export const useArtworkById = (paintingId, size = 800) => {
  return useQuery(['artworks', paintingId, size], () => getArtworkById(paintingId, size), {
    staleTime: Infinity
  });
};
