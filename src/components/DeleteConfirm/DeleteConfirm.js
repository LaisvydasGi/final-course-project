import { useState } from "react"
import axios from "axios"

import { SERVER_URL } from "../../config"
import { useNavigate } from "react-router-dom"
import Card from "../Card/Card"

const DeleteConfirm = ({ deleteFrom, navigateTo, itemName }) => {

  const navigator = useNavigate();

  const [deleteStatus, setDeleteStatus] = useState(false);

  const deleteBtnHandler = () => setDeleteStatus(prevState => !prevState);
  const noDeleteBtnHandler = () => setDeleteStatus(false);

  const yesDeleteBtnHandler = () => {
    axios.delete(`${SERVER_URL}${deleteFrom}`)
      .then(res => navigator(navigateTo))
      .catch(err => console.log(err.message))
  }

  return (
    <div className='delete-btn-wrapper'>
      <button onClick={deleteBtnHandler}>Remove</button>
      {deleteStatus ? (
        <Card classes='album-card'>
          <h3>"{itemName}" will be removed.</h3>
          <span>Do you want to proceed?</span>
          <div>
            <button onClick={yesDeleteBtnHandler}>Yes</button>
            <button onClick={noDeleteBtnHandler}>No</button>

          </div>
        </Card>
      ) : ''}
    </div>
  )
}

export default DeleteConfirm