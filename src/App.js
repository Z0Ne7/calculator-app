import React from 'react';
import './components/common/Button/Button.css';

function Calculator() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className=''>
        <div className='flex h-20 bg-black text-white text-right text-4xl'>1</div>
        <div className='flex'>
          <button className='w-1/2 bg-red-700 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>AC</button>
          <button className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>/</button>
          <button className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>x</button>
        </div>
        <div className='flex'>
          <button className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>7</button>
          <button className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>8</button>
          <button className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>9</button>
          <button className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>-</button>
        </div>
        <div className='flex'>
          <button className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>4</button>
          <button className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>5</button>
          <button className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>6</button>
          <button className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>+</button>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='flex'>
              <button className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>1</button>
              <button className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>2</button>
              <button className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>3</button>
            </div>
            <div className='flex'>
              <button className='flex-grow bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>
                0
              </button>
              <button className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>.</button>
            </div>
          </div>
          <div className='flex-grow'>
            <button className='h-full bg-blue-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
