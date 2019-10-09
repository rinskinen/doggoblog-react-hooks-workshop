import React from 'react';

const usePersistedTabIndex = () => {
    const storageKey = 'selectedTabIndex';
    const indexFromStorage = localStorage.getItem(storageKey);
    const [selectedIndex, setSelectedIndex] = React.useState(Number(indexFromStorage) || 0);

    const onSelect = index => {
        localStorage.setItem(storageKey, index.toString());
        setSelectedIndex(index);
    };

    return { selectedIndex, onSelect };
};

export default usePersistedTabIndex;
