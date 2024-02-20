import styles from './css/Button.module.css'

import {Link} from 'react-router-dom'

function LinkButton({to, text, kind}) {


    return (
        <div>
            <Link to={to}>
                <button className={`${styles.button} ${styles[kind]}`} type="button">{text}</button>
            </Link>
        </div>
    )
}

export default LinkButton