import { useQuery } from '@tanstack/react-query';

const getCategories = (paintings) => {
  const cat = [];
  paintings?.map((paint) => {
    if (paint.category_ids.length > 0)
    {
      paint.category_ids.forEach((element) => {
        cat.includes(element) ? null : cat.push(element);
      });
    } else
    {
      cat.includes(paint.category_ids) ? null : cat.push(paint.category_ids);
    }
  });
  const categories = cat.join(',');
  return fetch(`https://api.artic.edu/api/v1/category-terms?ids=` + categories)
    .then(async (response) => (await response.json()))
    .then(({ data }) => {
      return data.map((category) => ({
        id: category.id,
        title: category.title,
      }));
    })

}

export const useCategories = (paintings) => {
  return useQuery(['categories', paintings], () => getCategories(paintings), {
    staleTime: Infinity
  });
}