export default function Todos(state,action){
    // debugger
    if(action.type=='add'){
        return state.concat([action.payload])
    }
    return [{title:'111',id:'0'}]

}