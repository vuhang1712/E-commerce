import './style.scss';
import Category from './Category/Category';
import FilterByRating from './Rating/Rating';
import FilterByType from './Type/Type';
import FilterByBrand from './Brand/Brand';
import FilterByPrice from './Price/Price';
import ClearAllFilters from './ClearAllFilters/ClearAllFilters';
import React from 'react';

function Sidebar() {

    return(
        <aside className="sidebar">
            <ClearAllFilters />
            <Category />
            <FilterByType />
            <FilterByBrand />
            <FilterByRating />
            <FilterByPrice />
        </aside>
    );
}

export default Sidebar;
