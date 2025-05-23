import React, { useState } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { FormValues } from './types';

interface FormFieldsProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  categories: string[];
  setValue: UseFormSetValue<FormValues>;
  watch: UseFormWatch<FormValues>;
}

const FormFields: React.FC<FormFieldsProps> = ({ register, errors, categories, setValue, watch }) => {
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const selectedCategory = watch('category');

  // Handle the category selection change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'add_new') {
      setIsNewCategory(true);
      setValue('category', ''); // Clear the category field temporarily
    } else {
      setIsNewCategory(false);
      setValue('category', value);
    }
  };

  // Handle the new category input
  const handleNewCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewCategory(value);
    setValue('category', value); // Update the form value with the new category
  };

  return (
    <>
      {/* Title */}
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-white">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white"
          placeholder="e.g. Athi Water Works – Northern Collector Tunnel Project"
          {...register('title')}
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-white">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white"
          placeholder="Provide a detailed description of the portfolio item"
          {...register('description')}
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
        )}
      </div>
      
      {/* Two Columns for Category and Client */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category */}
        <div className="space-y-2">
          <label htmlFor="category" className="text-sm font-medium text-white">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <select
              id="category-select"
              className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white"
              onChange={handleCategoryChange}
              value={isNewCategory ? 'add_new' : selectedCategory}
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
              <option value="add_new">+ Add New </option>
            </select>
            
            {isNewCategory && (
              <input
                type="text"
                className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white mt-2"
                placeholder="Enter new category"
                value={newCategory}
                onChange={handleNewCategoryChange}
              />
            )}
          </div>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
          )}
        </div>
        
        {/* Client */}
        <div className="space-y-2">
          <label htmlFor="client" className="text-sm font-medium text-white">
            Client <span className="text-red-500">*</span>
          </label>
          <input
            id="client"
            type="text"
            className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white"
            placeholder="e.g. Athi Water Works"
            {...register('client')}
          />
          {errors.client && (
            <p className="text-red-500 text-xs mt-1">{errors.client.message}</p>
          )}
        </div>
      </div>
      
      {/* Link Options - Two Columns for Video and Photo Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Video Link */}
        <div className="space-y-2">
          <label htmlFor="videoLink" className="text-sm font-medium text-white">
            Video Link (optional)
          </label>
          <input
            id="videoLink"
            type="url"
            className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white"
            placeholder="e.g. https://example.com/video.mp4"
            {...register('videoLink')}
          />
          {errors.videoLink && (
            <p className="text-red-500 text-xs mt-1">{errors.videoLink.message}</p>
          )}
        </div>
        
        {/* Photo Link */}
        <div className="space-y-2">
          <label htmlFor="photoLink" className="text-sm font-medium text-white">
            Photo Link (optional)
          </label>
          <input
            id="photoLink"
            type="url"
            className="block w-full rounded-md border-gray-700 shadow-sm focus:border-[#0F9B99] focus:ring-[#0F9B99] bg-gray-800 px-3 py-2 text-sm border text-white"
            placeholder="e.g. https://example.com/photo.jpg"
            {...register('photoLink')}
          />
          {errors.photoLink && (
            <p className="text-red-500 text-xs mt-1">{errors.photoLink.message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FormFields;