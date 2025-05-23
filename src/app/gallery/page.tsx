import GalleryTabs from "../../components/GalleryTabs";

const GalleryPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our <span className="text-lighter">Gallery</span>
        </h1>

        <GalleryTabs />
      </div>
    </section>
  );
};

export default GalleryPage;
