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
      <button onClick={deleteBtnHandler}>Delete</button>
      {deleteStatus ? (
        <Card>
          <h3>"{itemName}" will be deleted.</h3>
          <span>Are you sure you want to proceed?</span>
          <button onClick={yesDeleteBtnHandler}>Yes</button>
          <button onClick={noDeleteBtnHandler}>No</button>
        </Card>
      ) : ''}
    </div>
  )
}

export default DeleteConfirm