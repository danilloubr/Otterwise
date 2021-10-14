import { articles } from "../data";
import Article from "./Article";

const Main = () => {
  return <div>
{articles.map(({title, description}) => <Article title={title} description={description}/>)} 


  </div>
}

export default Main;
