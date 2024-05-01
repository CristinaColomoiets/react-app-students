const StudentRow = ({ eachDevice, deleteDevices }) => {

    return (
        <div className="DeviceCard">
            <p>Device: {eachDevice.title}</p>
            <p>{eachDevice.price} euros</p>
            <p>Brand: {eachDevice.brand}</p>
            <p>Rating: {eachDevice.rating}</p>
            <p>{eachDevice.rating >= "4.5" ? '¡TOP⭐!' : '¡CACA 💩!'}</p>
            <hr />
            <button className="btn-delete" onClick={() => deleteDevices(eachDevice.id)}>Delete</button>

        </div>
    )
}

export default StudentRow