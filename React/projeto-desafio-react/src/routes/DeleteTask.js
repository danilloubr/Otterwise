import { deleteTask } from "../services/postServices"
import { useParams } from "react-router"

function DeleteTask() {

const {id} = useParams()
console.log("CONSOLE ID", id)
    
    const onSubmit = async () => {
        try {
          console.log(id)
          const {data: resp} = await deleteTask(id)
          console.log(resp)
        } catch (error) {
          console.error(error)
          
        }
        
        console.log("DATA AQUI:", id)
      }


    return (
        <div><h1>{onSubmit}</h1></div>
    )
}



export default DeleteTask