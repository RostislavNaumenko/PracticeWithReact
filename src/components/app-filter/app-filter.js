import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name:"all", lable:"All employees"},
        {name:"rise", lable:"Employees getting promotions"},
        {name:"moreThen1000", lable:"Salary more then 1000"}
    ];
    const buttons = buttonsData.map(({name,lable}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light"  : "btn-outline-light";
        return(
            <button 
                className = {`btn ${clazz}`}
                type = "button"
                key ={name}
                onClick={() => props.onUpdateFilter(name)}>
                    {lable}
            </button>
        )
    })
    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;

