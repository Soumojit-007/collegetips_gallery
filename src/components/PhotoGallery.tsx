
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import PhotoCard from './PhotoCard';
import Lightbox from './Lightbox';
import { Photo, Category } from '../types/gallery';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const categories: Category[] = [
    { id: 'all', name: 'All Vibes', emoji: '🌈', color: 'from-purple-500 to-pink-500' },
    { id: 'team', name: 'Team Vibes', emoji: '🤝', color: 'from-blue-500 to-cyan-500' },
    { id: 'creative', name: 'Creative Campaigns', emoji: '🎨', color: 'from-orange-500 to-red-500' },
    { id: 'workplay', name: 'Work Hard, Play Hard', emoji: '🥳', color: 'from-green-500 to-emerald-500' },
    { id: 'behind', name: 'Behind-The-Scenes', emoji: '🎥', color: 'from-indigo-500 to-purple-500' },
    { id: 'events', name: 'Epic Events', emoji: '🎪', color: 'from-pink-500 to-rose-500' },
  ];

  useEffect(() => {
    // Expanded photos collection with more diverse content
    const samplePhotos: Photo[] = [
      // Team Vibes
      {
        id: '1',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarAuucID_qb73b6DB6Y4M495YcECbNqaVDA&s',
        category: 'team',
        title: 'Team Brainstorm Session',
        description: 'Creative minds coming together for the next big idea! 💡'
      },
      {
        id: '2',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW33L1bsmMPIfkCMkADOVAqzikq-MhF1zR2w&s',
        category: 'team',
        title: 'Team Lunch Vibes',
        description: 'Fueling creativity with good food and great company! 🍕'
      },
      {
        id: '3',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mKUKqiyF4bNKJ4afg0a6OCAHjpjXSo5Ddw&s',
        category: 'team',
        title: 'Collaboration Time',
        description: 'When great minds sync up, magic happens! ✨'
      },
      {
        id: '4',
        src: 'https://imgs.search.brave.com/G7RxW9O8OO0cM8gWkUo5LF9pTX-6ojuRWAEXy_aOQKg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vLVJOeXNU/TVFjY2VHZmMtODk5/bDJOMnV3aTVDU2k5/U2oxRVdpdUozWlpp/NC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZhVzFoWjJWekwy/TnYvTXpZdWFuQm4.jpeg',
        category: 'team',
        title: 'Team Building Fun',
        description: 'Building bonds beyond work! 🤗'
      },
      
      // Creative Campaigns
      {
        id: '5',
        src: 'https://imgs.search.brave.com/tiS-WARXC8o8Mud3WGnAX7ZmbMPVbIg5uKkHy0G-Iyc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdnBsREdK/UW5kTGY4OWJmMkUx/alZzY21kbGxQU2hT/WmdNcWVuUFQzNzlK/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZhVzFoWjJWekwy/NXAvWjJoMExYQmhj/blI1TG1wdy9adw.jpeg',
        category: 'creative',
        title: 'Design Sprint',
        description: 'Crafting the perfect campaign visuals 🎨'
      },
      {
        id: '6',
        src: 'https://imgs.search.brave.com/d8xfh7kDV2um_RHmJZtUWTp-_r0tKpac8u-CokFTKtk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVzhBM3U1/ZjN1TF9rTGJSYTY1/Z1RYZmlrME5CMHZQ/VFU2ZXc5amlSQnlx/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZZbXh2Wnk5cGJX/Rm4vWlhNdmJXOXVa/WGt1YW5Cbg.jpeg',
        category: 'creative',
        title: 'Video Production',
        description: 'Lights, camera, action! 🎬'
      },
      {
        id: '7',
        src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=550&fit=crop',
        category: 'creative',
        title: 'Brand Photoshoot',
        description: 'Capturing our brand essence in every shot! 📸'
      },
      {
        id: '8',
        src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=700&fit=crop',
        category: 'creative',
        title: 'Content Creation Hub',
        description: 'Where ideas become viral content! 🚀'
      },
      {
        id: '9',
        src: 'https://imgs.search.brave.com/Abc5vFK212bbmDXWsUq6C0qdKXieMF-NmLnxZIEbC2E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOGk2U3dx/Nm9RTzJJcTloT2dU/S1d5ZW9hd1o3Qjdz/NFluU3I2endjZUZ4/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZhVzFoWjJWekwy/eG0vTVM1cWNHVm4.jpeg',
        category: 'creative',
        title: 'Graphic Design Magic',
        description: 'Turning concepts into visual masterpieces! ✨'
      },

      // Work Hard, Play Hard
      {
        id: '10',
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=550&fit=crop',
        category: 'workplay',
        title: 'Coding Marathon',
        description: 'When work feels like play! ⚡'
      },
      {
        id: '11',
        src: 'https://imgs.search.brave.com/1qlXzv7THrtgDwXbYDDf5Kd9BxRx6RKFXJsbQrRaV4A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vV3d0R09v/QVBUN0pzNHMyaGRX/OC1DOTVTUUVRZFJL/RDZ2ejdNRXJvWTVw/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZhVzFoWjJWekwy/WmsvTVM1cWNHYw.jpeg',
        category: 'workplay',
        title: 'Office Games',
        description: 'Taking a break with some friendly competition! 🎮'
      },
      {
        id: '12',
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
        category: 'workplay',
        title: 'Late Night Hustle',
        description: 'Grinding towards greatness! 🌙'
      },
      {
        id: '13',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop',
        category: 'workplay',
        title: 'Victory Celebration',
        description: 'Every milestone deserves a celebration! 🎉'
      },
      {
        id: '14',
        src: 'https://imgs.search.brave.com/QD92HZ4n6ZNr0cv_MonNSFa9I3baVFgjENIvpJLe0jM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZWYtRlJj/N3pNajQwamdXWEhv/dlgwOVV2SXdwdmdI/czU3VWg0UmkwNWdx/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZhVzFoWjJWekwy/a3kvTWk1d2JtYw.jpeg',
        category: 'workplay',
        title: 'Learning & Growing',
        description: 'Knowledge is power, sharing is caring! 📚'
      },

      // Behind-The-Scenes
      {
        id: '15',
        src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=650&fit=crop',
        category: 'behind',
        title: 'Strategy Planning',
        description: 'Behind every great campaign is a great plan 📋'
      },
      {
        id: '16',
        src: 'https://imgs.search.brave.com/Sr3eQzXJxCHqxnqwHF1Og-cgffKh-o_kFvdIvVTBR-4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQUEwc0ow/SzlRTXVYNDdIS0NH/eWZKbnNfN2dFUGJ3/VzZOY2FZVXJmeldE/NC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZMjlzYkdW/blpYUnBjSE11L2FX/NHZhVzFoWjJWekww/RnovYzJWMEpUSXdN/aTV6ZG1j.jpeg',
        category: 'behind',
        title: 'Content Creation',
        description: 'The magic happens behind the camera! ✨'
      },
      {
        id: '17',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
        category: 'behind',
        title: 'Data Analytics Deep Dive',
        description: 'Numbers tell stories, we listen! 📊'
      },
      {
        id: '18',
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=550&fit=crop',
        category: 'behind',
        title: 'Setup & Preparation',
        description: 'The perfect shot needs perfect preparation! 🎯'
      },
      {
        id: '19',
        src: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=700&fit=crop',
        category: 'behind',
        title: 'Meeting Room Moments',
        description: 'Where big decisions happen! 💼'
      },

      // Epic Events
      {
        id: '20',
        src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=700&fit=crop',
        category: 'events',
        title: 'Launch Event',
        description: 'Celebrating our latest milestone with style! 🎉'
      },
      {
        id: '21',
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=700&fit=crop',
        category: 'events',
        title: 'Workshop Session',
        description: 'Learning and growing together 📚'
      },
      {
        id: '22',
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop',
        category: 'events',
        title: 'Conference Networking',
        description: 'Making connections that matter! 🤝'
      },
      {
        id: '23',
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=600&fit=crop',
        category: 'events',
        title: 'Awards Night',
        description: 'Recognizing excellence and achievement! 🏆'
      },
      {
        id: '24',
        src: 'https://imgs.search.brave.com/uMpjCNxYZ6w8bNIyJB3hMaz8mxp1K8M4EC-cM1NphKM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTmd6QU1v/UFZyUXVFYVlUenFl/cHBqeUVtMHEyRjl5/a3BucmZnQzhvSFdM/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9kR2hsWTI5/dGNHRnVlV05vL1pX/TnJMbU52YlM5SmJX/Rm4vWlhNdlptbHVZ/VzVqYVdGcy9MM0J5/YjJacGRDMXNiM056/L0xuZGxZbkE.jpeg',
        category: 'events',
        title: 'Community Meetup',
        description: 'Bringing the community together! 👥'
      },
      {
        id: '25',
        src: 'https://images.unsplash.com/photo-1506485338023-6ce5f36692df?w=400&h=650&fit=crop',
        category: 'events',
        title: 'Outdoor Team Event',
        description: 'Taking the fun outside! 🌟'
      },

      // Additional photos for more variety
      {
        id: '26',
        src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=500&fit=crop',
        category: 'team',
        title: 'Remote Team Connect',
        description: 'Distance can\'t stop our team spirit! 💻'
      },
      {
        id: '27',
        src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=600&fit=crop',
        category: 'creative',
        title: 'Social Media Magic',
        description: 'Creating content that resonates! 📱'
      },
      {
        id: '28',
        src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=450&fit=crop',
        category: 'workplay',
        title: 'Innovation Lab',
        description: 'Where crazy ideas become reality! 🔬'
      },
      {
        id: '29',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=700&fit=crop',
        category: 'behind',
        title: 'Equipment Check',
        description: 'Making sure everything is perfect! ⚙️'
      },
      {
        id: '30',
        src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=550&fit=crop',
        category: 'events',
        title: 'Graduation Celebration',
        description: 'Celebrating success stories! 🎓'
      }
    ];
    setPhotos(samplePhotos);
  }, []);

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="w-full">
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <motion.div 
        className="masonry-grid mt-8"
        layout
      >
        <AnimatePresence>
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedPhoto && (
          <Lightbox
            photo={selectedPhoto}
            photos={filteredPhotos}
            onClose={() => setSelectedPhoto(null)}
            onNext={() => {
              const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
              const nextIndex = (currentIndex + 1) % filteredPhotos.length;
              setSelectedPhoto(filteredPhotos[nextIndex]);
            }}
            onPrev={() => {
              const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
              const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
              setSelectedPhoto(filteredPhotos[prevIndex]);
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 4;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;
