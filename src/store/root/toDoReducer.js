export default function Todos(state,action){
    // debugger
    if(action.type=='add'){
        return state.concat([action.payload])
    }
    if(action.type=='del'){
        return state.filter((item)=>{
            return item.id!=action.payload.id
        })
    }
    return state

}