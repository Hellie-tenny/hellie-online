import React, { useState } from 'react'
import reportingTool from '../../assets/imgs/img2.png';

export default function Graphics() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
    
  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const cards = [
    {
      id: 1,
      title: 'Sales Reporting Tool',
      img: reportingTool,
      description: 'A dashboard for tracking sales figures and generating reports.',
    },
    {
      id: 2,
      title: 'Project Planner',
      img: reportingTool,
      description: 'Organize tasks, deadlines, and deliverables for your team.',
    },
    
  ];

  return (
    <div className='grid sm:grid-cols-4 grid-cols-1 gap-2 py-4 relative'>
      {cards.map((card) => (
        <div
          key={card.id}
          className='h-fit p-4 m-2 rounded-md cursor-pointer rounded-2xl shadow-md bg-[#ffffff]'
          onClick={() => openModal(card)}
        >
          <img src={card.img} />
          <h2 className='font-bold my-2'>{card.title}</h2>
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
  )
}
