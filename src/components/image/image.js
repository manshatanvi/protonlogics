export const Image = ({ src, alt, ...rest }) => {
  const URL = `${process.env.PUBLIC_URL}/${src}`;
  return <img src={URL} alt={alt} {...rest} />;
};
