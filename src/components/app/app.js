import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "Rostyslav Naumenko",salary: 800, increase: false,rise:true, id: 1},
                {name: "Stanislav Shurko",salary: 1500, increase: false,rise:false, id: 2},
                {name: "Vladislav Basko",salary: 2500, increase: true,rise:false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) =>{
        const minInputName = 4;
        if(name === "" || salary === "" || name.length < minInputName){
            alert("Enter the correct values in the fields");
            return;
        }
        const newEmployee = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newList = [...data, newEmployee];
            return{
            data: newList
            }
        })
    }
    onToggelProp = (id,prop) => {
        this.setState(({data}) => ({
            data:data.map(e => {
                if(e.id === id){
                    return{...e,[prop]: !e[prop]}
                }
                return  e;
            })
        }))
    }
    onUpdateSalary = (id,salary) => {
        this.setState(({data}) => ({
            data:data.map(e => {
                if(e.id === id){
                    return{...e, salary:salary}
                }
                return e;
            })
        }));
  
    }
    serchEmployee = (items, term) =>{
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return  item.name.indexOf(term) > -1      
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term: term});
    }
    
    filterEmployee = (items, filter) =>{
        switch(filter){
            case "rise":
                return items.filter(item => item.rise)
            case "moreThen1000":
                return items.filter(item => {
                    return item.salary > 1000;
                })
            default:
                return items;
        }
    }
    onUpdateFilter = (filter) =>{
        this.setState({filter});
    }

    render(){
        
        const{data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(e => e.increase).length;
        const visiableData = this.filterEmployee(this.serchEmployee(data,term), filter);
        return(
            <div className="app">
                <AppInfo employees = {employees}
                increased = {increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch ={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <EmployeesList 
                data = {visiableData}
                onDelete ={this.deleteItem}
                onToggelProp = {this.onToggelProp}
                onUpdateSalary = {this.onUpdateSalary}/>
                <EmployeesAddForm
                onAddItem = {this.addItem}/>
            </div>
        );
    }
}

export default App;