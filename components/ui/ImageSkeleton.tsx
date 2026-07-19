import ContentLoader from "react-content-loader";

const ImageSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#e3e3e3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <rect x="23" y="49" rx="2" ry="2" width="348" height="348" />
  </ContentLoader>
);

export default ImageSkeleton;
