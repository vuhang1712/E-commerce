import './style.css';
import Category from './Category/Category';
import FilterByRating from './Rating/Rating';

function Sidebar() {

    return(
        <aside className="sidebar">
            <Category />
            <FilterByRating />

        </aside>
    );
}

export default Sidebar;
