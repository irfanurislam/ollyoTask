import React, { useState } from 'react';
import photo1 from '../assets/images/image-1.webp';
import photo2 from '../assets/images/image-2.webp';
import photo3 from '../assets/images/image-3.webp';
import photo4 from '../assets/images/image-4.webp';
import photo5 from '../assets/images/image-5.webp';
import photo6 from '../assets/images/image-6.webp';
import photo7 from '../assets/images/image-7.webp';
import photo8 from '../assets/images/image-8.webp';
import photo9 from '../assets/images/image-9.webp';
import photo10 from '../assets/images/image-10.jpeg';
import photo11 from '../assets/images/image-11.jpeg';
function Testing() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    // If selectedImage is empty, set the first selected image, else add to the array
    if (!selectedImage) {
      setSelectedImage(imageUrl);
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  const initialImages = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
  ];

  const allImages = [...initialImages, ...selectedImages];

 

//   const elements = allImages.map((image, index) => (
//     <div key={index} className={`border border-gray-400 rounded-lg ${index === 0 ? 'row-span-2 col-span-2' : ''}`}>
//       {image ? <img className="rounded-lg max-w-full h-auto " src={image} alt={`Image ${index + 1}`} /> : 'Click to select an image'}
//     </div>
//   ));
const [isChecked, setIsChecked] = useState(false);

const toggleCheckbox = () => {
  setIsChecked(!isChecked);
};
const elements = allImages.map((image, index) => (
    <div
      key={index}
      className={`border border-gray-400 rounded-lg ${
        index === 0 ? 'row-span-2 col-span-2' : ''
      } group hover:opacity-70`}
    >
      <div className="group relative">
        {image ? (
          <img
            className="rounded-lg max-w-full h-auto transition-opacity duration-300 ease-in-out transform hover:scale-105"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ) : (
          'Click to select an image'
        )}
        <label className="absolute top-0 p-2 left-0 w-full h-full cursor-pointer">
          <input
            type="checkbox"
            className="absolute opacity-0 w-6 h-6 cursor-pointer"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <div className="bg-white border border-gray-400 w-6 h-6 rounded-lg hover:bg-gray-400 transition-colors duration-300 ease-in-out opacity-0 group-hover:opacity-100"></div>
        </label>
      </div>
    </div>
  ));

  // Add an image input at the end
  elements.push(
    <label key="image-input" className="border border-gray-600 px-4 py-8 cursor-pointer">
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
      {selectedImage ? 'Click to select another image' : 'Click to select an image'}
    </label>
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-5  gap-5'>
      {elements}
    </div>
  );
}

export default Testing;
