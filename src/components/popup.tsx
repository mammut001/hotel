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

import { submitBody, useCheckinStore, useSubmitCheckStore } from "@/store/useCheckinStore";
import { MuiTelInput } from "mui-tel-input";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { submitReservation } from "@/app/service/submitReservation";
import { CheckinStore } from "@/store/useCheckinStore";


const PopUpWindow = ()=>{
    const modalStatus = useModalStore(state =>state.openStatus)
    const toggleModalOff = useModalStore(state => state.setClose)// when onClose, call setVisible to false.

    const dates = useCheckinStore(state=>state.date)
    const updateCheckinDate = useCheckinStore(state => state.updateDate)
    const resetDate = useCheckinStore(state => state.resetDate)
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'))
    const isMobile = useMediaQuery('(pointer: coarse)');
    const tel = useCheckinStore(state=> state.phoneNumber)
    const updateTel = useCheckinStore(state => state.updatePhoneNumber)
    const warningMsg = "Please check your dates and number"
    const displayWarningMsgBool = useSubmitCheckStore(state => state.isValid)
    const setValidationTrue = useSubmitCheckStore(state => state.setTrue)
    const setValidationFalse = useSubmitCheckStore(state => state.setFalse)

    const handleSubmit= async ()  => {
      const checkInDate = dates[0].date
      const checkOutDate = dates[1].date

      console.log("iS MOBILE"+isMobile)

      dates.map(e=>{
        console.log(e.label+"Date: "+ e.date.toString())
      })
      const now = dayjs()
      const areDatesValid = checkInDate.isValid() && checkOutDate.isValid() && checkInDate.isAfter(now) && checkOutDate.isAfter(checkInDate)
      const isTelValid = tel && tel.length > 6
      if(isTelValid && areDatesValid){
        setValidationTrue()
        toggleModalOff()
        console.log("Valid ")
        try {
          const reservation:submitBody = {
            date: dates,
            phoneNumber: tel
          }
          const res = await submitReservation(reservation);

        }
        catch (error){
          console.error("FAILED",error)
        }

      }
      else{
        setValidationFalse()
        console.log("Not Valid ")

      }


    }
  return(
      <Popup
        onClose={toggleModalOff}
        closeOnDocumentClick={false}
        open={modalStatus}
        position="center center"
        contentStyle={{ width: '80%', maxWidth: '600px' }}
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

        <div className="rounded-md" style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
          <button className="float-right" onClick={()=> toggleModalOff()}>
            &times;
          </button>
          <div className="flex flex-col space-y-4">
            <h1>Reserve Your Room</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  {
                    isMobile ?
                      (
                        <>
                          <DateTimeField
                            label="Check in Date"
                            value={dates[0].date}
                            onChange={(newValue) => updateCheckinDate(0, newValue || dayjs())}
                          />
                          <DateTimeField
                            label="Checkout Date"
                            value={dates[1].date}
                            onChange={(newValue) => updateCheckinDate(1, newValue || dayjs())}
                          />

                        </>
                      ) :
                      (
                        <>
                          <>
                            <DateTimePicker
                              label="Start"
                              orientation={'portrait'}
                              value={dates[0].date}
                              onChange={(newValue) => updateCheckinDate(0, newValue || dayjs())}
                            />
                            <DateTimePicker
                              label="End"
                              closeOnSelect={false}
                              orientation={'portrait'}
                              value={dates[1].date}
                              onChange={(newValue) => updateCheckinDate(1, newValue || dayjs())}

                              className=" max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg mt-2"
                            />

                          </>

                        </>
                      )

                  }

                </div>

              </DemoContainer>
            </LocalizationProvider>
            <MuiTelInput defaultCountry="CA" inputProps={{style:{fontSize:'12px'}}}   size={'small'} preferredCountries={['CA']} value={tel} onChange={(newInput) => updateTel(newInput)} />
            <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
              Confirm
            </Button>
              {
                !displayWarningMsgBool&&
                  <p className="text-center text-red-500">
                    {warningMsg}
                  </p>
              }
          </div>

        </div>
      </Popup>
  )
}
export default PopUpWindow;