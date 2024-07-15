import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

function Logout() {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete my Account!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your account has been deleted.",
          icon: "success"
        });
      }
    });
  }
 
  return (

    <div
      className="modal show"
      style={styles.container}
      
    >
      
      <Modal.Dialog>
        <Modal.Header  >
          <Modal.Title>Leaving so soon?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you really sure you want to Logout?</p>
        </Modal.Body>

        <Modal.Footer>
         <NavLink to='/'> <Button variant="secondary">Close</Button></NavLink>
          <Button variant="danger" onClick={handleClick}>Yes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#23527c',
    margin: 0,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }
}
export default Logout;