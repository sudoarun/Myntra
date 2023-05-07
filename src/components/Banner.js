import bann from '../images/banners/banner.jpg'
function Banner() {
    const styles = {
        img: {
            height: "400px"
        }
    }
    return (<>
        <div className='position-relative '>
            <img src={bann} alt="banner" className='w-100 mx-auto d-block' style={styles.img} />
        </div>
    </>)
}
export default Banner;