import { createStore } from 'redux'
import reducer from './reducer'

const createStoreConfig = createStore(reducer)

createStoreConfig.subscribe(()=>{
    console.log(createStoreConfig.getState())
})

export default createStoreConfig