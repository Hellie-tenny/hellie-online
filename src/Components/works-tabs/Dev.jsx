import React, { useState } from 'react';
// import webDev from ".../"
import reportingTool from '../../assets/imgs/img2.png';
import physicsLibraryScreenshot from '../../assets/imgs/physics-library.png';

// #0000005d

export default function Dev() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Sales Reporting Tool',
      img: reportingTool,
      description: 'A tool for preparing sales reports, do all the caluclations and provide a sales report ready for presentation.',
    },
    {
      id: 2,
      title: 'Library',
      img: physicsLibraryScreenshot,
      description: 'A platform for providing study material to our fellow students during our time at Chancellor College, Physics department',
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <div className='grid sm:grid-cols-4 grid-cols-1 gap-2 py-4 relative'>
      {cards.map((card) => (
        <div
          key={card.id}
          className='h-fit p-4 m-2 bg-[#233860] rounded-md cursor-pointer'
          onClick={() => openModal(card)}
        >
          <img src={card.img} className='h-[10em]' />
          <h2 className='font-bold text-[#E7FDF6] my-2'>{card.title}</h2>
        </div>
      ))}

      {isModalOpen && selectedCard && (
        <div className='fixed inset-0 bg-[#0000005d] z-50 flex items-center justify-center'>
          <div className='bg-[#E7FDF6] w-[90%] h-[80%] rounded-xl relative flex flex-col items-center justify-center'>
            <button
              className='absolute top-4 right-4 text-[#233860] text-2xl font-bold cursor-pointer'
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <img src={selectedCard.img} className='max-w-[200px] mb-4' />
            <div className='text-center p-4'>
              <h3 className='text-xl font-bold mb-2'>{selectedCard.title}</h3>
              <p>{selectedCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
