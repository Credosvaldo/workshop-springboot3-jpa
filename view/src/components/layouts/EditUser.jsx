import Input from './Input'
import Button from './Button'

import styles from '../pages/css/Login.module.css'

function EditUser({changeEditModeState}) {

    function action(e) {
        e.preventDefault();

        changeEditModeState()
    }

    function cancel(e) {

    }

    return (

        <form onSubmit={action} className={styles.form}>
            <Input name={'Nome'} placeholder={'Digite seu nome'} type={'text'} />
            <Input name={'E-mail'} placeholder={'Digite seu e-mail'} type={'email'} />
            <Input name={'Telefone'} placeholder={'Digite seu telefone'} type={'phone'} />

            <div className='d-flex justify-content-between'>
                <Button kind={'positive'} name={'Atualizar'} type={'subimit'} />
                <Button kind={'negative'} name={'Cancelar'} type={'button'} action={cancel} />
            </div>
        </form>
    )
}

export default EditUser