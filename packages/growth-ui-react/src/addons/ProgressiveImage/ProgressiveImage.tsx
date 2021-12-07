import Image, { ImageProps } from '../../elements/Image';
import React, { FC, useState } from 'react';

const ProgressiveImage: FC<ProgressiveImageProps> = (props) => {
  const { placeholder, src, style = {}, ...rest } = props;
  const [image, setImage] = useState(placeholder);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setImage(src);
    setLoading(false);
  };

  return (
    <>
      <Image
        {...rest}
        src={image}
        style={{
          ...style,
          transition: '0.5s filter linear',
          filter: `${loading ? 'blur(15px)' : ''}`,
        }}
      />
      <picture
        style={{
          display: 'none',
        }}
      >
        <img src={src} alt="" onLoad={handleLoad} />
      </picture>
    </>
  );
};

export interface ProgressiveImageProps extends ImageProps, StrictProgressiveImageProps {
  [k: string]: any;
}

export interface StrictProgressiveImageProps {
  /** The src of the placeholder image */
  placeholder: string;
}

export default ProgressiveImage;
