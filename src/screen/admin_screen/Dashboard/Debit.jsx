import React, { useState } from 'react';
import styles from '../../Home.module.css';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';
import Sidebar from '../../../component/adminscreencomp/sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingModal from "../../../component/Modal/LoadingModal";
import { useDispatch } from 'react-redux';
import {debit} from '../../../store/action/userAppStorage';
import { Error } from '../../../component/common/Error';
import { AdminDebitComponent } from '../../../component/adminscreencomp/Home/AdminDebit';


const Debit = () => {
    //tradeModal and transfer modal
    let [isError, setIsError] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let {id} = useParams()



    let showmenuHandler = () => {
        let drawer = document.querySelector('.drawerCon')
        drawer.classList.toggle('showdrawer')
    }
    

    let updateHandler = async(data)=>{
        setIsLoading(true)
        let res = await dispatch(debit(data))
        if(!res.bool){
            setIsError(true)
            setIsLoading(false)
            return
        }
        setIsLoading(false)
        navigate('/users')
    }



    if(isError){
        return <Error/>
    }


    return (<>
        {isLoading && <LoadingModal />}
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <Sidebar  />
            </div>

            <div className={styles.main}>
                {/*mobile and dashboard headers*/}
                <DashboardDrawer showmenuHandler={showmenuHandler} />
                <DashboardHeader showmenuHandler={showmenuHandler} headerTitle='Debit Clients' />
                <AdminDebitComponent   updateHandler = {updateHandler} />
            </div>
        </div>
    </>
    )
}



export default Debit