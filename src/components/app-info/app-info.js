import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return(
        <div className="app-info">
            <h1>Employee accounting at RostyGmbh</h1>
            <h2>The number of all employees: {employees} </h2>
            <h2>The award is given to: {increased}</h2>
        </div>
    )
}

export default AppInfo;