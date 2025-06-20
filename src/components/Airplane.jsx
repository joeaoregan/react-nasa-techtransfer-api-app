function Airplane({ data }) {
    return (
        <div className="w-[200px] p-[10px]">
            <img src={data[10]} className="hover:scale-110" />
            {/* <h3>{data[2]}</h3> */}
            <h3 dangerouslySetInnerHTML={{__html:data[2]}}></h3>
        </div>
    )
}

export default Airplane;