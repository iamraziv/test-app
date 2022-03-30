import React from 'react';
import '../HOC/HOC.scss';

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component{
        state ={
            data:[],
            term:""
        }

        componentDidMount(){
            const fetchData = async() =>{
              await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
              .then(res => res.json())
              .then(
                (result) => {
                 this.setState({...this.state, data:result})
                },
                (error) => {
                  console.log(error);
                }
              )
            }
            fetchData();
        }
        render(){
            let { term, data } = this.state;
            let filterData = data.slice(0,10).filter((d)=>{
                if(entity==='users'){
                     const { name } = d;  
                     return name.toLowerCase().indexOf(term) >= 0 
                }
                else if(entity==='todos'){
                     const { title } = d;   
                     return title.toLowerCase().indexOf(term) >= 0 
                }
                return false;
            })
            return(
                <>
                    <h2 className="entityText">{entity}</h2>
                    <input type="text" value={term} 
                    placeholder="Search User" 
                    onChange={(e) => this.setState({...this.state, term:e.target.value})} />
                    <WrappedComponent data={filterData}></WrappedComponent>
                </>
            )
        }
    }
    // return (
    //     <div>
    //     </div>
    // );
};

export default HOC;