import styles from './css/ImageButton.module.css'

function ImageButton({src, alt, action}) {

    return (
        <div onClick={action}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default ImageButton