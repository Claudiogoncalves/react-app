import React, { Component } from 'react'
//tranforma componente em container
import { bindActionCreators } from 'redux'
//conectar componente react ao redux
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    //metodo do react cyclelife que chama o metodo getList
    componentWillMount() {
        this.props.getList() 
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr> 
        ))
    }
    
    render() {
        
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

//funcoes que ensina como fazer o mapeamento do redux para dentro do componente 
//react

//funcao que recebe o estado e devolve um objeto(mapeamento entre o que 
//quero colocar dentro das propriedades desse componente e onde no estado o dado 
//vai esta presente para joagar nas propriedades )
// state == concatenação de todos os recucers
//billingCycle vem do reducer - tem um atributo list(retorna uma lista vazia 
//ou os dados do backend a parti do action.payload.data)
const mapStateToProps = state => ({list: state.billingCycle.list})

//vincula getlist a parti desse metodo, sempre que getlist for chamado ele 
//dispara os reducers(chama a actionCreator, cria a açao e ja chama o dispatch)
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)

//chama metodo decoration do react-redux que vai ler os dos metodos criados 
//acima, 

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)