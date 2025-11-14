
type Props={
    id:string,
    count:string,
    title:string,
}
export default function OverviewCard({id, count, title}:Props){

    return(
        <div
          id={id}
          className={`flex flex-col text-white justify-center items-center gap-2 p-3 bg-gradient-to-t from-pink-400 to-green-700 md:w-[300px] md:h-[300px] transition hover:scale-105 rounded-2xl`}
        >
          <h2 className="md:text-4xl text-xl font-bold">{count}</h2>
          <span className="h-[3px] bg-orange-300 w-1/2"></span>
          <strong className="text-sm">{title}</strong>
        </div>
    )
}