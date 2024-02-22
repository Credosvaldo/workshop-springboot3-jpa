import styles from './css/User.module.css'

import { useState } from 'react';

import fotoFake from '../../img/fotoFake.png'

import EditUser from '../layouts/EditUser';
import NoEditUser from '../layouts/NoEditUser';

function Home() {

    const [editMode, setEditMode] = useState(false)

    function changeEditMode() {
        setEditMode(!editMode);
    }
    
    function changeImage() {
        if(!editMode)
            return

        console.log("Editando foto de perfil")
    }

    return (
        <div className={styles.user}>
            <img onClick={changeImage} src={fotoFake} alt="Foto de Usuário" />

            {editMode ?
                <EditUser changeEditModeState={changeEditMode}/>
                :
                <NoEditUser changeEditModeState={changeEditMode} />
            }
        </div>
    )
}

export default Home;