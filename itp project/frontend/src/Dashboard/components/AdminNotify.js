import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../components/css/adminNotify.css'

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export default function AdminNotify() {
    const [notId, setnotId] = useState("");
    const [notDescript, setnotDescript] = useState("");

    const [searchInput, setSearchInput] = useState("");
    const [notify, setNotify] = useState([]);
    const [notifyCount, setNotifyCount] = useState(0);
    const navigate = useNavigate();



    //send data to backend
    function sendData(e) {
        e.preventDefault();

        const newNotify = {
            notId,
            notDescript
        }
        if(!/^[N-T][0-9]{6}$/.test(notId)){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'warning',
                title: 'Please enter a notice id'
            })
        }

        axios.post("http://localhost:8070/notify/add",newNotify)
        .then(() => {
            Swal.fire(
                'Notice Added!',
                'You have successfully added a notice.',
                'success'
              )
            
        }).catch((err) => {
            Swal.fire(
                'Acount Added Unsuccessfully',
                'Please try again !!',
                'error'
            )
        })
    }

    //fetch data
    function getNotify() {
        axios.get("http://localhost:8070/notify/").then((res) => {
            setNotify(res.data);

        })
        .catch((err) => {
            alert(err.message);
        })
        setSearchInput("");
    }
    useEffect(() => {
        getNotify();
    }, []);
    useEffect(() => {
        setNotifyCount(notify.length);
    }, [notify]);



    //Delete data
    function deleteData(i) {
        Swal.fire({
          title: 'Are you sure?',
          text: `Do you want to delete "${i.notId}"?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel',
          reverseButtons: true,
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:8070/notify/delete/${i._id}`)
              .then(() => {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                getNotify(); // Refresh the notifications after successful deletion
              })
              .catch((err) => {
                Swal.fire('Error', 'Failed to delete the file.', 'error');
                console.error(err);
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Your file is safe :)', 'error');
          }
        });
    }
      




  return (
    <>
        <div className='notif-m-box'>
            <div className="n-hd-line-br">
                <h3>NOTICE</h3>
                    </div>
                     {/* chart-view */}
                <div className='n-hall-view-bg'>
                    <div className="chart-view-attend">
                        <form className='notice-form' onSubmit={sendData}>

                           <div className='notice-form-container-1'>
                                <label className='label-note'><b>Notice ID</b></label><br/>
                                <input type='text' className='notice-field-formatting' required onChange={(e) => {setnotId(e.target.value);}}></input>
                            </div>

                           <div className='notice-form-container-2'>
                                <label className='label-name'><i><b>Write a notice...</b></i></label><br/>
                                <textarea type='text' className='notice-field' required onChange={(e) => {setnotDescript(e.target.value);}}></textarea>
                            </div>
                            <button className='btn-send-ny' type='submit'>Send</button>
                        </form>
                    </div>
                    <div className="chart-view-box">
                        <div className="head-topic">    
                           <span>Notice ID</span>
                           <span className='sp1-s'>Notice view</span>
                        </div>
                        <table className="tbl-box">
                            <tbody>
                                {notify.map((i) => {
                                    return (
                                        <tr key={i._id}>
                                            <td>{i.notId}</td>
                                            <td>{i.notDescript}</td>
                                            <td><button className='btn-del' onClick={() => {deleteData(i);}}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                </div>
            </div>
        
        </div>
    </>
  )
}
