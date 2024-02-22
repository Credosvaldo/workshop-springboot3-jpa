import styles from './css/Login.module.css'

import Input from "../layouts/Input"
import Button from '../layouts/Button'
import LinkButton from '../layouts/LinkButton'

function Signup() {

    return (
        <div className={styles.formSpace}>
            <h1>Signup</h1>

            <form className={styles.form}>
                <Input name={'Nome'} placeholder={'Digite seu nome'} type={'text'} />
                <Input name={'E-mail'} placeholder={'Digite seu e-mail'} type={'text'} />
                <Input name={'Telefone'} placeholder={'Digite seu número'} type={'phone'} />
                <Input name={'Senha'} placeholder={'Digite sua senha'} type={'password'} />
                <Input name={'Confirmar Senha'} placeholder={'Confirme sua senha'} type={'password'} />

                <div className='d-flex justify-content-between'>
                    <Button type={'submit'} kind={'positive'} name={'Cadastrar'} />
                    <LinkButton kind={'negative'} text={'Voltar ao Longin'} to={'/login'} />
                </div>
                
            </form>
        </div>
    )
}

export default Signup