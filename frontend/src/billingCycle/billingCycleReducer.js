// Estado inicial do componente / lista vazia
const   INITIAL_STATE = {list: []}

//function reduce que export /  que recebe o estado inicial e uma ação
export default (state = INITIAL_STATE, action) => {
    //informar qual tipo de ação estou interessado em receber
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            //retorna um novo objeto sem alterar o 
            //estado atual do componente
                    //... operador para retornar o estado atual
                               //evloui a lista 
                                            //promise request .data 
                                            //(resultado da lista)
            return { ...state, list: action.payload.data }
        //retorna o estatdo inicial caso nao queira evolui
        default: 
            return state
    }
}