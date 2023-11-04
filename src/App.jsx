
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import photo1 from './assets/images/image-1.webp';
import photo2 from './assets/images/image-2.webp';
import photo3 from './assets/images/image-3.webp';
import photo4 from './assets/images/image-4.webp';
import photo5 from './assets/images/image-5.webp';
import photo6 from './assets/images/image-6.webp';
import photo7 from './assets/images/image-7.webp';
import photo8 from './assets/images/image-8.webp';
import photo9 from './assets/images/image-9.webp';
import photo10 from './assets/images/image-10.jpeg';
import photo11 from './assets/images/image-11.jpeg';
import Testing from './components/testing';

function App() {

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

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // The item was dropped outside of the list.
    }

    const items = [...allImages];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update your state with the reordered items or perform the necessary actions.
    // Example: setAllImages(items);
  };


  return (
    <>
      <div className='px-5 mt-5'>
      <nav className='border-b border-gray-600 py-4 px-3 flex justify-between items-center'>
      <h2 className='text-2xl text-bold'>Gallery</h2>
      <div>
        <h3 className='text-xl text-red-600'>Deleted files</h3>
      </div>
      </nav>



      {/* gallery part */}

      <div className='mt-10'>
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="image-gallery">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="grid grid-cols-1 md:grid-cols-5 gap-5"
          >
            {allImages.map((image, index) => (
              <Draggable key={`image-${index}`} draggableId={`image-${index}`} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`border border-gray-400 rounded-lg ${
                      index === 0 ? 'row-span-2 col-span-2' : ''
                    }`}
                  >
                    {image ? (
                      <img className="rounded-lg max-w-full h-auto" src={image} alt={`Image ${index + 1}`} />
                    ) : (
                      'Click to select an image'
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
 
      </div>





     </div>

     <div className='mt-10'>
      <Testing></Testing>
     </div>
      
    </>
  )
}

export default App
