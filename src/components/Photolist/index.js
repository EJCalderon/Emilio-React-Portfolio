import React, {useState} from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
        },
        {
            name: '',
            //made one template and copied them
            category: 'portfolio',
            description: ''
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