import { useQuery } from '@tanstack/react-query';

const getCategories = (paintings) => {
  if (paintings === undefined) return null

  const categoryIdsSet = new Set(
    paintings.map((painting) => painting.category_ids)
      .flat()
  );
  const categoryIds = [...categoryIdsSet];

  const categoryImages = new Map();
  const usedImageIds = new Set();
  paintings.forEach(painting => {
    painting.category_ids.forEach(categoryId => {
      if (!categoryImages.has(categoryId) && !usedImageIds.has(painting.image_id))
      {
        categoryImages.set(categoryId, painting.image_id)
        usedImageIds.add(painting.image_id)
      }
    })
  });

  return fetch(`https://api.artic.edu/api/v1/category-terms?ids=${categoryIds.join(',')}`  )
    .then(async (response) => (await response.json()))
    .then(({ data }) => {
      return data.map((category) => ({
        id: category.id,
        title: category.title,
        image_id: categoryImages.get(category.id)
      }));
    })


}

export const useCategories = (paintings) => {
  return useQuery(['categories', paintings], () => getCategories(paintings), {
    staleTime: Infinity
  });
}