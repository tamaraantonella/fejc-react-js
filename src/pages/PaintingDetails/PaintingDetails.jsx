import { Link, Navigate, useParams } from 'react-router-dom';
import { useArtworkById } from '../../api/useArtworkById';

export const PaintingDetails = () => {

  const { paintingId } = useParams();

  if (!paintingId || isNaN(parseInt(paintingId, 10))) {
    return <Navigate to={'/'}/>;
  }

  const artworkQuery = useArtworkById(paintingId, 800);

  return (
    <>
      {artworkQuery.error && <Navigate to={'/'}/>}
      {artworkQuery.data && (
        <div className="page">
          <h2 className="title-2">
            {artworkQuery.data.title}
          </h2>
          <div className="painting-frame">
            <img src={artworkQuery.data.imageUrl} className="w-full" alt={artworkQuery.data.imageAltText}/>
          </div>
          <ul className="flex flex-col gap-1">
            <li className="tag">
              <span className="tag__title">Artist</span>
              <span className="tag__value">Vincent van Gogh</span>
            </li>
            <li className="tag">
              <span className="tag__title">Category</span>
              <span className="tag__value">{artworkQuery.data.categoryTitles.join(' - ')}</span>
            </li>
            <li className="tag tag--comment">
              {artworkQuery.data.imageAltText}
            </li>
          </ul>
          <div className="text-center">
            <Link to={'/'}>Go back</Link>
          </div>
        </div>
      )}
    </>
  );
};
