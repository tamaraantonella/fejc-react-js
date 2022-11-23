# Junior Front-End Challenge

## Installation

Before installation, make sure you have installed the following:

- Node 16 (if you use nvm, on the root of the project you can: `$ nvm install && nvm use`)
- yarn (`$ npm i -g yarn`)

### Dependencies

```shell
$ yarn
```

## Running

- To run the main project, use the following command:

```shell
$ yarn dev
```

- To run the Storybook specification, use the following command:

```shell
$ yarn storybook
```

## Dependencies

- Tailwind CSS [[docs](https://tailwindcss.com/docs/installation)]
- Framer Motion [[docs](https://www.framer.com/docs/)]
- React Query [[docs](https://tanstack.com/query/v4/docs/overview)]
- React Router [[docs](https://reactrouter.com/en/6.4.3)]
- Storybook [[docs](https://storybook.js.org/docs/react/get-started/introduction)]

## API

We are using the [Art Institute of Chicago API](https://api.artic.edu/docs/#introduction).

Van Gogh's 'artist_id': 40610.

### Artworks by artist

You can check the endpoint documentation [here](https://api.artic.edu/docs/#get-artworks-search).

```
https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_id,category_ids,image_id,thumbnail&query[term][artist_id]=<artist_id>&size=20
```

- `<artist_id>`: number

### Categories by ids

You can check the endpoint documentation [here](https://api.artic.edu/docs/#collections).

```
https://api.artic.edu/api/v1/category-terms?ids=<ids>
```

- `<ids>`: number[]

### Image Url

Based on an 'image_id', the image url should be:

```
https://www.artic.edu/iiif/2/<image_id>/full/<width>,/0/default.<file_format>
```

- `<image_id>`: string
- `<width>`: number (pixels)
- `<file_format>`: format of the image (e.g. png or jpg)

## Implementation criteria

- Styles: css, tailwindcss, styles in index.css using BEM.
- Animation: css, tailwindcss or framer motion.
- State management: standard react hooks, or react query.
- Frequent, atomic commits.
