import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggelProp,onUpdateSalary}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item; 
        return(
            <EmployeesListItem 
            key ={id}
             {...itemProps}
             onDelete = {() => onDelete(id)}
             onToggelProp={(e) => onToggelProp(id,e.currentTarget.getAttribute("data-toggle"))}
             onUpdateSalary = {(e)=> onUpdateSalary(id,e.target.value)}/>
        )
    })
    
    return( 
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default EmployeesList;