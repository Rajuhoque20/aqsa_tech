
type Props={
    id:string,
    count:string,
    title:string,
    cssClass:string,
}
export default function OverviewCard({id, count, title}:Props){

    return(
        <div
          id={id}
          className={`flex flex-col justify-center items-center border-1 border-gray-300 gap-2 p-3  md:w-[300px] md:h-[300px] transition hover:scale-105 rounded-2xl text-gray-600`}        
        >
          <h2 className="md:text-4xl text-xl font-bold">{count}</h2>
          <span className="h-[3px] bg-gray-300 w-1/2"></span>
          <strong className="text-sm">{title}</strong>
        </div>
    )
}