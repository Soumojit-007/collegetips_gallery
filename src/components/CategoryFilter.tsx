
import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types/gallery';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
            ${selectedCategory === category.id
              ? 'text-white shadow-lg scale-105'
              : 'text-gray-700 bg-white/70 hover:bg-white hover:scale-105 shadow-md'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {selectedCategory === category.id && (
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
              layoutId="activeCategory"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-lg">{category.emoji}</span>
            {category.name}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
