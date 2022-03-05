import React, {useState} from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Run buddy',
            //made one template and copied them
            category: 'portfolio',
            description: 'Get your sweat on with this website created with HTMl and css'
        },
        {
            name: 'PokeParent',
            //made one template and copied them
            category: 'portfolio',
            description: 'Be a great parent and raise a fictious animal'
        },
        {
            name: 'Cowsulting',
            //made one template and copied them
            category: 'portfolio',
            description: 'We offer consults for Cows, it is incredible'
        },
        {
            name: 'Git Stuff',
            //made one template and copied them
            category: 'portfolio',
            description: 'Come git some stuff'
        },
        {
            name: 'Read you Node',
            //made one template and copied them
            category: 'portfolio',
            description: 'An easy to use README generator'
        },
      
    ]);
    const currentPhotos = photos.filter(photo => photoCategory === category);
    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i});
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div> 
            {isModalOpen &&(
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                    src={require('../../${category}/${i}.png').default}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}/>
                ))}
                    </div>
                </div>
            );
        };
export default PhotoList;