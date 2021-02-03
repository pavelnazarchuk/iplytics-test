import * as React from 'react';
import giphyApi from 'giphy-api';
import MasonryComponent from 'react-masonry-component';

const Images: React.FC<{ data: giphyApi.GIFObject[] }> = ({ data }) => {
  const childElements = data.map(({ images, id, title }) => {
    const {
      downsized: { url },
    } = images;

    return (
      <img key={id} alt={title} id={id} width={300} height="auto" src={url} />
    );
  });
  return (
    <div>
      <MasonryComponent className="masonry-component">
        {childElements}
      </MasonryComponent>
    </div>
  );
};
export default Images;
