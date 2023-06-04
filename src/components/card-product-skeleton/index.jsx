import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardProduct } from "./card-product-skeleton.styles";

export default function CardProductSkeleton() {
  return (
    <SkeletonTheme baseColor="#dddddd" highlightColor="#b3b3b3">
      <CardProduct>
        <Skeleton height={200} />
        <h1>
          <Skeleton className="title-product__skeleton" />
        </h1>
        <p>
          <Skeleton className="desc-product__skeleton" />
        </p>
        <h3>
          <Skeleton />
        </h3>
      </CardProduct>
      <CardProduct>
        <Skeleton height={200} />
        <h1>
          <Skeleton className="title-product__skeleton" />
        </h1>
        <p>
          <Skeleton className="desc-product__skeleton" />
        </p>
        <h3>
          <Skeleton />
        </h3>
      </CardProduct>
      <CardProduct>
        <Skeleton height={200} />
        <h1>
          <Skeleton className="title-product__skeleton" />
        </h1>
        <p>
          <Skeleton className="desc-product__skeleton" />
        </p>
        <h3>
          <Skeleton />
        </h3>
      </CardProduct>
    </SkeletonTheme>
  );
}
