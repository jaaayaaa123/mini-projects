import React from 'react';

const Filter = ({ setFilter, currentFilter }) => {
  return (
    <div className="filter">
      <button 
        className={currentFilter === 'all' ? 'active' : ''} 
        onClick={() => setFilter('all')}>
        All
      </button>
      <button 
        className={currentFilter === 'active' ? 'active' : ''} 
        onClick={() => setFilter('active')}>
        Active
      </button>
      <button 
        className={currentFilter === 'completed' ? 'active' : ''} 
        onClick={() => setFilter('completed')}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
