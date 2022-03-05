import React, {useEffect} from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    console.log(props)
    const {
        categories = [],
            setCurrentCategories,
            contactedSelected,
            currentCategory,
            setContactSelected,
        
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href=""><span role="img" aria-label="camera"></span>
                Emilio J. Calderon React Portfolio</a>
                </h2>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>Me</a>
                        </li>
                        <li className={`mx-2 ${contactedSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>Contact</span>
                        </li>
                        {categories.map((category) => (
                            <li className={`mx-1 ${
                                currentCategory.name === category.name && !contactedSelected && 'navActive'
                            }`}
                            key={category.name}>
                                <span onClick={() => {
                                    setCurrentCategories(category);
                                    setContactSelected(false);
                                }}>
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                                </li>
                        ))}
                        </ul>
                        </nav>
                        </header>
                    );
}

export default Nav;