import Popup from 'reactjs-popup';
import React from 'react';
import {useModalStore} from "@/store/useModalStore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { useMediaQuery } from "@mui/system";

const PopUpWindow = ()=>{
    const modalStatus = useModalStore(state =>state.openStatus)
    const setModalVisible = useModalStore(state => state.setOpen)// when onClose, call setVisible to false.
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'))
    const isMobile = useMediaQuery('(pointer: coarse)');

    return(
        <Popup
            onClose={setModalVisible}
            closeOnDocumentClick={false}
            open={modalStatus}
            position="center center"
            contentStyle={{ width: '80%', maxWidth: '600px' }}
            overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
          <div className="rounded-md" style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
            <h1>Reserve Your Room</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  {
                    isMobile?
                      (
                        <>
                          <DateTimeField
                            label="Controlled field"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />
                          <DateTimeField
                            label="Controlled field"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />

                        </>
                      ):
                      (
                        <>
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

                        </>
                      )

                  }
                </div>

              </DemoContainer>
            </LocalizationProvider>

            {/* DateTimePicker code */}
          </div>

        </Popup>
    )
}
export default PopUpWindow;