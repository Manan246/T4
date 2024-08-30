// write a program using react which displays images using map function

import img1 from './1.jpg'
import img2 from './2.jpeg'
import img3 from './3.jpg'


function P12() {
    const pic = [img1, img2, img3]
    const desc = 'test image'
    return (
        <div>
            <h1>Images using map function</h1>
            {
                pic.map((img) => {
                    return (
                        <div>
                            <img src={img} alt={desc} height='500px' width='1000px' />
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default P12