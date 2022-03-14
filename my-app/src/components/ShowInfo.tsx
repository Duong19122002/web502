import {Product} from '../types/product'

type ShowINfoProps ={
    person: Product

}
const ShowInfo=(props:ShowINfoProps)=>{
    console.log(props)
    return(
    <div>
        <h1>{props.person.name}</h1>
      <h1>{props.person.age}</h1>
    </div>
    )
}
export default ShowInfo;