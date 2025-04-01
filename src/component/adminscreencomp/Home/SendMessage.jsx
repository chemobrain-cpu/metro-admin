import React, { useState} from 'react';
import styles from '../../common/Home.module.css';


export const SendSmsComponent = ({ updateHandler, }) => {
    let [isData, setIsData] = useState({})
  

    let handleChangeHandler = (e, nameField) => {
        let val = e.target.value
        setIsData(prev => {
            prev[`${nameField}`] = val
            let newData = { ...prev }
            return newData
        })
    }

    let submitHandler = (e) => {
        e.preventDefault()
        updateHandler(isData)
        return
    }


 

   
    return (<>
        <div className={styles.homeScreen} >

            <div className={styles.timeline} >
                <form className={styles.editForm} onSubmit={submitHandler}>
                    <div className={styles.inputCards} >
                        <label>
                            Compose Sms
                        </label>
                        <textarea onChange={(e) => handleChangeHandler(e, 'sms')} value={isData.sms} type='text'  style={{border:'1px solid grey',height:'100px',padding:'10px',borderRadius:'3px'}}></textarea>
                    </div>

                    <div className={styles.inputCards} >
                        <label>
                        Enter phone
                        </label>
                        <input onChange={(e) => handleChangeHandler(e, 'phone')} value={isData.phone} type='text' placeholder='+4467556543' style={{border:'1px solid grey',padding:'10px',borderRadius:'3px'}}></input>
                    </div>
                   
                    
                    <div className={styles.inputCards} >
                        <label>
                        Sms From
                        </label>
                        <input onChange={(e) => handleChangeHandler(e, 'from')} value={isData.from} type='text' placeholder='Enter Company/bank name' style={{border:'1px solid grey',padding:'10px',borderRadius:'3px'}}></input>
                    </div>

                    <div className={styles.buttonContainer} >
                        <button >send</button>

                    </div>
                </form>
            </div>






        </div></>)




}