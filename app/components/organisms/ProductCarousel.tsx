// organisms/ProductCarousel/ProductCarousel.jsx
import { CarouselControls } from '../../molecules/CarouselControls';
import { ProductCard } from '../../molecules/ProductCard'; // Assume this exists
import { useCarousel } from './useCarousel';

export const ProductCarousel = ({ products }) => {
  const { currentIndex, next, prev, visibleItems } = useCarousel(products, 4);

  return (
    <div className="product-carousel">
      <div className="carousel-items">
        {visibleItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <CarouselControls onPrev={prev} onNext={next} />
    </div>
  );
};