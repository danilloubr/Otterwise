import { useHistory } from "react-router-dom";

import { Card, CardActions, CardContent, Button } from "@mui/material";

import "../styles/postComponent.css";
import { Fragment } from "react";

function PostComponent({ id, title }) {
  const history = useHistory();

  const handleNavigation = (id) => {
    history.push(`/posts/${id}`);
  };

  return (
    <Fragment>
      
      <Card className="totalCard" sx={{ minWidth: 275,  }}>
        <CardContent className="post-component"
        onClick={() => {
          handleNavigation(id);
        }}>
        
        
      {`${id} - ${title}`}
      </CardContent>
        <CardActions>
          <Button size="small"
        variant="contained" onClick={() => {
            handleNavigation(id);
          }}>Leia mais</Button>
        </CardActions>
      </Card>
    </Fragment>
  );
}

export default PostComponent;
