import { useState } from "react";
import { useAllPaintings } from "../../api/useAllPaintinsg";
import { useCategories } from "../../api/useCategories";
import { Accordion } from "../../components/Accordion/Accordion";
import { IconLink } from "../../components/IconLink/IconLink";

export const Home = () => {
  const { data } = useAllPaintings();
  const getCategories = useCategories(data);
  const categories = getCategories?.data?.categories;
  const pictures = getCategories?.data?.pictures;
  const [expanded, setExpanded] = useState({});

  const handleChange = (id) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };
  return (
    <div className="page">
      <h2 className="title-2">Mr. Van G</h2>
      <div className=" flex flex-col items-center gap-[31px]">
        {categories?.length > 1 && categories?.map((category, index) => (
          <Accordion
            title={category.title}
            icon={
              <img
                className="h-full w-full object-cover"
                src={`https://www.artic.edu/iiif/2/${pictures[index]}/full/50,/0/default.jpg`}
              ></img>
            }
            expanded={expanded[category.id]}
            subtitle={category.description}
            onChange={handleChange.bind(null, category.id)}
            className=" px-4 py-5 flex flex-col box-border bg-accordion_bg rounded-[10px]"
            key={category.id}
          >
            {data
              ?.filter((artwork) =>
                artwork.category_ids.includes(categories[index].id)
              )
              .map((item) => (

                  <IconLink
                    key={item.id}
                    label={item.title}
                    icon={
                      <img
                        className="h-full w-full object-cover"
                        src={`https://www.artic.edu/iiif/2/${item.image_id}/full/300,/0/default.jpg`}
                      ></img>
                    }
                  to={`/paintings/${item.id}`}
                    />
              ))}
          </Accordion>
        ))}
      </div>
    </div>
  );
};
