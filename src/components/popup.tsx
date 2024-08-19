import Popup from 'reactjs-popup';
import React from 'react';
import {useModalStore} from "@/store/useModalStore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { useMediaQuery } from "@mui/system";

const PopUpWindow = ()=>{
    const modalStatus = useModalStore(state =>state.openStatus)
    const setModalVisible = useModalStore(state => state.setOpen)// when onClose, call setVisible to false.
    const isMobile = useMediaQuery('(pointer: coarse)');

    return(
        <Popup
            onClose={setModalVisible}
            closeOnDocumentClick={false}
            open={modalStatus}
            position="center center"
            overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
            <div className="rounded-md" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <h1>Reserve Your room</h1>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4">
                    {
                      isMobile?
                        (
                          <>
                            <MobileDateTimePicker
                              label="Start"
                              orientation={'portrait'}

                            />
                            <MobileDateTimePicker
                              label="End"
                              closeOnSelect={false}
                              orientation={'portrait'}

                              className=" max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg mt-2"
                            />
                          </>
                        ):
                        (
                          <>
                            <DateTimePicker
                              label="Start"
                              orientation={'portrait'}

                            />
                            <DateTimePicker
                              label="End"
                              closeOnSelect={false}
                              orientation={'portrait'}

                              className=" max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg mt-2"
                            />

                          </>
                        )
                    }

                  </div>

                </DemoContainer>
              </LocalizationProvider>


            </div>
        </Popup>
    )
}
export default PopUpWindow;