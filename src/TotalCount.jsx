const TotalCount = ({ totalCount }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 bg-slate-600 w-1/2 p-5 text-white text-2xl font-bold">
                <h3>Total Count : {totalCount}</h3>
            </div>
        </>
    );
};

export default TotalCount;
