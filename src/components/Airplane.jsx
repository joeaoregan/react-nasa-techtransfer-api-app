function Airplane({ data }) {
    return (
        <div>
            <img src={data[10]} />
            <h3>{data[2]}</h3>
        </div>
    )
}

export default Airplane;