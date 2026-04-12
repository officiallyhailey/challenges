'use client';
import data from './data.json'
import './App.css'
import './index.css'
import React, { useState } from 'react';
import ExtensionCard from './components/extensionsCard';
import Header from './components/header';
import FilterBar from './components/filterBar';

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleExtension = (name) => {
    setExtensions(prev =>
      prev.map(ext => ext.name === name ? { ...ext, isActive: !ext.isActive } : ext)
    );
  }

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const removeExtension = (name) => {
    setExtensions(prev => prev.filter(ext => ext.name !== name));
  }

  const filteredExtensions = extensions.filter((ext) => {
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      ext.name.toLowerCase().includes(query) ||
      ext.description.toLowerCase().includes(query);

    if (filter === "Active") return ext.isActive && matchesSearch;
    if (filter === "Inactive") return !ext.isActive && matchesSearch;
    return matchesSearch;
  });

  return (
    <div className={`home ${isDarkMode ? 'darkTheme' : 'lightTheme'}`}>
      <div className='pageContainer'>
        <Header
          isDarkMode={isDarkMode}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onToggleTheme={toggleTheme}
        />
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
        />
        <section className='contentBox'>
          <div className='dataContainer'>
            {filteredExtensions.map((ext) => (
              <ExtensionCard
                key={ext.name}
                extension={ext}
                onToggle={toggleExtension}
                onRemove={removeExtension}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;