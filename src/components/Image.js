const Image = ({ src, width, alt }) => {
  return (
    <>
      <img src={src} className="img-fluid" width={width} alt={alt} />
    </>
  );
};

export default Image;
