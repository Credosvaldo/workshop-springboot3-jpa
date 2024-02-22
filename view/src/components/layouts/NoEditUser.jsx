import Button from './Button'

function NoEditUser({changeEditModeState}) {

    return (
        <div>
            <div>
                <h2>Nome:</h2>
                <h1>Pedro Henrique Pires Rodrigues</h1>
            </div>

            <div>
                <h2>E-mail:</h2>
                <h1>pedrohenriquepr08@gmail.com</h1>
            </div>

            <div>
                <h2>Telefone:</h2>
                <h1>+5531988888888</h1>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <Button kind={'positive'} name={'Alterar'} type={'button'} action={changeEditModeState} />
            </div>
        </div>
    )
}

export default NoEditUser