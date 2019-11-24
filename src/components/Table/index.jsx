import React from 'react';
import './style.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Table extends React.Component {
    render(){

        const {data} = this.props;

        const columns = [{
            Header: 'Nombre',
            accessor: 'name' 
          }, {
            Header: 'Puntos',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span>
          }]
          
          const bodyStyle = {
            boder: '2px solid white'
          }
        return(
          <div className="score-board">
            <ReactTable
            data={data}
            columns={columns}
            resolveData={data => data.map(row => row)}
            defaultPageSize={8}
          />   
          </div>
        )
    }
}

export default Table;