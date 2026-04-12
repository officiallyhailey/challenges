const filters = ['All', 'Active', 'Inactive'];

function FilterBar({ filter, onFilterChange }) {
  return (
    <div className='summaryCard'>
      <div className='dataFilter'>
        <h1>Extensions List</h1>

        <div className='filterBtns'>
          {filters.map((filterName) => (
            <button
              key={filterName}
              className={`filterBtn ${filter === filterName ? 'active' : ''}`}
              onClick={() => onFilterChange(filterName)}
            >
              {filterName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;