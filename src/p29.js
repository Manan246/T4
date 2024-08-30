// create a react app to filter images based on category while clicking on respective buttons for eg: Categories:All,Samsung,Vivo and One+

import OP1 from './Phones/OnePlus1.jpg'
import OP2 from './Phones/OnePlus2.jpg'
import OP3 from './Phones/OnePlus3.jpg'
import S1 from './Phones/Samsung1.jpg'
import S2 from './Phones/Samsung2.jpg'
import S3 from './Phones/Samsung3.jpg'
import V1 from './Phones/Vivo1.jpg'
import V2 from './Phones/Vivo2.jpg'
import { useState } from 'react'

const Gallery = [
    { id: 1, src: OP1, category: 'OnePlus' },
    { id: 2, src: OP2, category: 'OnePlus' },
    { id: 3, src: OP3, category: 'OnePlus' },
    { id: 4, src: S1, category: 'Samsung' },
    { id: 5, src: S2, category: 'Samsung' },
    { id: 6, src: S3, category: 'Samsung' },
    { id: 7, src: V1, category: 'Vivo' },
    { id: 8, src: V2, category: 'Vivo' },
]

function P29() {
    const [images, setImage] = useState(Gallery)
    function handleChange(item) {
        const find = Gallery.filter((value) =>
            value.category == item)
        if (item !== 'All') {
            setImage(find)
        }
        else {
            setImage(Gallery)
        }
    }


    return (
        <div>
            <h1>Mobile Gallery</h1>
            <button onClick={() => handleChange('All')}>All</button>
            <button onClick={() => handleChange('OnePlus')}>OnePlus</button>
            <button onClick={() => handleChange('Samsung')}>Samsung</button>
            <button onClick={() => handleChange('Vivo')}>Vivo</button>
            {
                images.map((value) => {
                    return (
                        <div>
                            <img src={value.src} alt="Image" height="100px" width="100px"></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default P29