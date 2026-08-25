import ContentLoader from "react-content-loader";
import type { ComponentProps } from "react";

const SkeletonCard = (props: ComponentProps<typeof ContentLoader>) => (
  <div className="col-span-12 md:col-span-6 lg:col-span-4 h-[350px]">
    <ContentLoader
      speed={1}
      width={360}
      height={420}
      viewBox="0 0 300 360"
      backgroundColor="#27272a"
      foregroundColor="#737373"
      {...props}
    >
      <rect x="2" y="21" rx="2" ry="2" width="140" height="10" />
      <rect x="2" y="37" rx="2" ry="2" width="180" height="10" />
      <rect x="0" y="60" rx="6" ry="6" width="293" height="226" />
      <rect x="2" y="6" rx="2" ry="2" width="220" height="10" />
    </ContentLoader>
  </div>
);

export default SkeletonCard;
