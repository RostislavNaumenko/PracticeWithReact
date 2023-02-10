import './employees-lit-item.css';

const EmployeesListItem = (props) => {

    const{name, salary, onDelete, onToggelProp,onUpdateSalary, increase, rise} = props;
    
    let classNames = "list-group-item d-flex justify-content-between";
    if(increase){
        classNames += " increase";
    }
    if(rise){
        classNames += " like";
    }
    

    return(
        <li className = {classNames}>
            <span className="list-group-item-label" onClick={onToggelProp} data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" onChange={onUpdateSalary} defaultValue={`${salary}`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " data-toggle="increase" onClick={onToggelProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;