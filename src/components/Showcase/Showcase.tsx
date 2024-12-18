import ImageSlideshow from "../ImageSlideshow/ImageSlideshow";

function Showcase() {
  return (
    <div>
      <p className="mb-2.5 font-serif text-black dark:text-white font-bold text-center">
        Click and drag to see some of my designs!
      </p>
      <ImageSlideshow />
    </div>
  );
}

export default Showcase;
