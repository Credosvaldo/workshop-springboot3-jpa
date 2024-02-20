import styles from './css/Login.module.css'

import Input from "../layouts/Input"
import Button from '../layouts/Button'
import LinkButton from '../layouts/LinkButton'

function Login() {

    function submit(e) {
        e.preventDefault()

        console.log("So pra testar")
    }

    return (
        <div className={`${styles.formSpace} d-flex justify-content-center align-items-center flex-column`}>
            <h1>Login</h1>
            

            <form className={styles.form} onSubmit={submit}>
                <Input name={'E-mail'} placeholder={'Digite seu e-mail'} type={'text'} />
                <Input name={'Senha'} placeholder={'Digite sua senha'} type={'password'} />

                <div className='d-flex justify-content-between'>
                    <Button name={'Logar'} type={"submit"} kind={'positive'}/>
                    <LinkButton to={'/signup'} text={'Cadastrar'} kind={'negative'} />
                </div>
                
                
            </form>

        </div>
    )
}

export default Login