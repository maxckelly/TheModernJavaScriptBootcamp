
const filters = {
    searchText: '',
    hideCompleted: false
};

const getFilters = () => filters

const setFilters = (updates) => {

    if (typeof updates.searchText === 'string') {
        setFilters.searchText = updates.searchText
    }

    if (typeof updates.hideCompleted === 'boolean') {
        setFilters.hideCompleted = updates.hideCompleted
    }
}

export { getFilters, setFilters }