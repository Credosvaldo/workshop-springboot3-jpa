import styles from './css/Button.module.css'

import {Link} from 'react-router-dom'

function LinkButton({to, text, kind, action}) {


    return (
        <div>
            <Link to={to}>
                <button onClick={action} className={`${styles.button} ${styles[kind]}`} type="button">{text}</button>
            </Link>
        </div>
    )
}

export default LinkButton