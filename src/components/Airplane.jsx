function Airplane({ data }) {
    return (
        <div className="w-[400px] p-[10px]">
            <img src={data[10]} className="hover:scale-105" />
            {/* <h3>{data[2]}</h3> */}
            <h2 dangerouslySetInnerHTML={{__html:data[2]}} className="text-justify"></h2>
        </div>
    )
}

export default Airplane;