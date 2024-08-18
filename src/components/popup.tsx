import Popup from 'reactjs-popup';
import React from 'react';
import {useModalStore} from "@/store/useModalStore";

const PopUpWindow = ()=>{
    const modalStatus = useModalStore(state =>state.openStatus)
    const setModalVisible = useModalStore(state => state.setOpen)// when onClose, call setVisible to false.

    return(
        <Popup
            onClose={setModalVisible}
            open={modalStatus}
            position="center center"
            overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
            <div className="rounded-md" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <h1>Reserve Your room</h1>


            </div>
        </Popup>
    )
}
export default PopUpWindow;