
import PhotoGallery from "../components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
            CollegeTips Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into our vibrant world of creativity, teamwork, and endless energy! ✨
          </p>
        </div>
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Index;
