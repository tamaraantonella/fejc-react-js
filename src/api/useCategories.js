import { useQuery } from '@tanstack/react-query';



const getCategories = (paintings) => {
  const pictures = [];
  paintings?.forEach((painting) => {
    pictures?.push(painting?.category_ids);
  })
  const result = new Set(pictures.flat());
  const unique = [...result];
  const finalIds = []
  let uniqueIndex = 0
  for (let index = 0; index < paintings?.length; index++)
  {
    (paintings[index]?.category_ids?.includes(unique[uniqueIndex]) && !finalIds?.includes(paintings[index]?.image_id))
      && (finalIds?.push(paintings[index]?.image_id),uniqueIndex++
    )
  }

  return fetch(`https://api.artic.edu/api/v1/category-terms?ids=` + unique.join(','))
    .then(async (response) => (await response.json()))
    .then(({ data }) => {
      return data.map((category) => ({
        id: category.id,
        title: category.title,
      }));
    })
    .then((data) => { return { categories: data, pictures: finalIds } })

}

export const useCategories = (paintings) => {
  return useQuery(['categories', paintings], () => getCategories(paintings), {
    staleTime: Infinity
  });
}