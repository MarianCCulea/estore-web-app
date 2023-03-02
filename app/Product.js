import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import AddToCartButton from "./AddToCartButton";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, description, category, image, price }) {
  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  // );
  // const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
      <p className="absolute text-xs italic text-gray-400 top-2 right-2">
        {category}
      </p>

      <Image
        src={image}
        alt=""
        height={200}
        width={200}
        className="self-center object-contain "
      />

      <h4 className="my-3 ">{title}</h4>
      <div className="flex ">
        {/* {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))} */}
        <StarIcon className="h-5 text-yellow-500" />
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>

      <div className="mb-5 ">
        <div>{price} $</div>
      </div>

      {/* {hasPrime && (
        <div className="flex items-center -mt-5 space-x-2">
          <Image
            src="https://links.papareact.com/fdw"
            alt=""
            className="w-12"
            width={500}
            height={500}
          />
          <p className="text-xs text-gray-500"> FreeNext day Delivery</p>
        </div>
      )} */}
      <AddToCartButton
        id={id}
        title={title}
        description={description}
        category={category}
        image={image}
        price={price}
      />
    </div>
  );
}

export default Product;
