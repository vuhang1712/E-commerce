import './style.css';
import Category from './Category/Category';
import FilterByRating from './Rating/Rating';
import FilterByType from './Type/Type';

function Sidebar() {

    return(
        <aside className="sidebar">
            <Category />
            <FilterByType />
            <FilterByRating />

        </aside>
    );
}

export default Sidebar;
