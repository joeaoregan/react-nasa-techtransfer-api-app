function Airplane({ data }) {
    const regex = /(<([^>]+)>)/gi;
    const strippedTitle = data[2].replace(regex, "");

    return (
        <div className="w-[400px] p-[10px]">
            <img src={data[10]}
                className="rounded-3xl hover:scale-105 hover:rounded-none"
                title={strippedTitle}
            />
            {/* <h3>{data[2]}</h3> */}
            <h2 dangerouslySetInnerHTML={{ __html: data[2] }} className="text-justify"></h2>
        </div>
    )
}

export default Airplane;