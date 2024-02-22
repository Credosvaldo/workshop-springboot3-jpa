

function Input({name, placeholder, type}) {


    return (
        <div className=" mb-3">
            <label htmlFor={name}>{name}: </label>
            <input className='form-control' placeholder={placeholder} type={type} name={name} id={name} />
        </div>
    )
}


export default Input