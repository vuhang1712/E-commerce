import './style.scss';
import Category from './Category/Category';
import FilterByRating from './Rating/Rating';
import FilterByType from './Type/Type';
import FilterByBrand from './Brand/Brand';
import FilterByPrice from './Price/Price';

function Sidebar() {

    return(
        <aside className="sidebar">
            <Category />
            <FilterByType />
            <FilterByBrand />
            <FilterByRating />
            <FilterByPrice />
        </aside>
    );
}

export default Sidebar;
