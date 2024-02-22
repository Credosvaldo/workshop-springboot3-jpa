 

function Select({name, list}) {

    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <select className="form-select" name={name} id={name}>
                <option selected>Escolha uma opção</option>
                {
                    list.map((opt, index) => {
                        <option key={index} value={opt}>{opt}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select