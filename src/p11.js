import react from './reactlogo.png'

function P11() {
    const pic = react
    const desc = 'test image'
    return (
        <img className='pic' src={pic} alt={desc} />
    )
}

export default P11