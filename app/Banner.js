import Image from 'next/image';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute bottom-0 z-20 w-full h-32 bg-gradient-to-t from-gray-200 to-transparent" />
      <div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt=""
            width={1900}
            height={600}
          />
        </div>
        {/* <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt=""
            width={1500}
            height={600}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt=""
            width={1500}
            height={600}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
