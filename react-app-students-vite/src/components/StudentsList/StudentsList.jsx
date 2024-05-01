import { useState } from "react"
import StudentRow from "../StudentRow/StudentRow"
import productPhone from "../products-phone.json"


const StudentsList = () => {
    const [devices, setDevices] = useState(productPhone)





    const deleteDevices = moveIdToDelete => {
        const filterDevices = devices.filter(eachDevices => eachDevices.id != moveIdToDelete)
        setDevices(filterDevices)


    }
    return (
        <div className="StudentsList">
            <h1>Soy la lista de estudiantes</h1>
            <hr />
            {
                devices.map(eachDevice => {

                    return <StudentRow eachDevice={eachDevice} deleteDevices={deleteDevices} key={eachDevice.id} />

                })
            }
        </div>
    )
}

export default StudentsList