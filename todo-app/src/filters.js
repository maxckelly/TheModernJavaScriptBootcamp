
const filters = {
    searchText: '',
    hideCompleted: false
};

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted}) => {

    if (typeof searchText === 'string') {
        searchText = searchText
    }

    if (typeof hideCompleted === 'boolean') {
        hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }