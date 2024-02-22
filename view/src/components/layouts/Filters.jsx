import styles from './css/Filters.module.css'


import Select from './Select'
import Input from './Input'

function Filters() {

    return (
         <div className={styles.filters}>
            <h1>Filtros</h1>

            <div>
                <Select name={'Categoria'} list={[]} />
            </div>

            <div>
                <label>Preços: </label>
                <Input name={'Minimo'} placeholder={"0.00 R$"} type={'price'} />
                <Input name={'Maxímo'} placeholder={"0.00 R$"} type={'price'} />
            </div>
         </div>
    )
}

export default Filters

