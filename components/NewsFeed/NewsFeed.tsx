
import { Title } from "../Title";

type MonthNumber =
  '01' | '02' | '03' | '04' | '05' | '06' |
  '07' | '08' | '09' | '10' | '11' | '12';

const monthsMap: Record<MonthNumber, string> = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sept',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};
type NewsDTO={
  title:string,
  date:string,
  file:string,
}

const news=[{
  "_id": {
    "$oid": "68b99f0e8c5db1f4f0e77f3a"
  },
  "title": "Admission for class IV to IX will start from 1st January, 2025",
  "file": "/uploads/undefined",
  "date": "2025-09-04",
  "__v": 0
},
{
  "_id": {
    "$oid": "68b99f518c5db1f4f0e77f4a"
  },
  "title": "All students must be present 15 minutes before the exam starts; attendance is compulsory.",
  "file": "",
  "date": "2025-09-04",
  "__v": 0
},
{
  "_id": {
    "$oid": "68b99fc78c5db1f4f0e77f63"
  },
  "title": "The Class 10 Annual Examination will begin on 15th March 2025.",
  "file": "/uploads/1756995527464_Application Number.pdf",
  "date": "2025-09-04",
  "__v": 0
},
{
  "_id": {
    "$oid": "68b9a03d8c5db1f4f0e77f6d"
  },
  "title": "Admit cards must be collected from the school office by 12th March 2025.",
  "file": "",
  "date": "2025-09-05",
  "__v": 0
},
{
  "_id": {
    "$oid": "68c9b41053d058ffba7350ea"
  },
  "title": "Al Karim  Mission will participate in upcoming Independence Day Programme",
  "file": "",
  "date": "2025-09-17",
  "__v": 0
},
{
  "_id": {
    "$oid": "68d435c518100b3f68434e77"
  },
  "title": "Al Karim Mission will start science division from January, 2025",
  "file": "",
  "date": "2025-09-24",
  "__v": 0
}]
export const NewsFeed=()=>{
    
    return(
        <div className="text-gray-500 mt-30 px-5 gap-5 flex flex-col md:px-30 md:gap-10" id="news">
            <Title>NOTICE & IMPORTANT LINKS</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 flex-col gap-5">
                {news?.map((item:NewsDTO,index:number)=>{
                    const format=item?.date?.split('-');
                    const day=format?.[2];
                   const month = monthsMap[format?.[1] as MonthNumber];
                     const year=format?.[0];
                    return(
                        <div key={index} style={{boxShadow:'0px 0px 15px rgba(0,0,0,0.2)'}} className="bg-white p-5 rounded-md flex gap-2 items-center transition hover:scale-105">
                            <div className="p-5 flex flex-col items-center bg-gray-800 text-white w-1/4 justify-center"  style={{clipPath: 'circle(55%)'}}>
                                <h3>{day}</h3>
                                <span>{month+", "+year}</span>
                            </div>
                            <div className="w-3/4">
                                <span>
                                    {item?.title}
                                    {item?.file? <a href={`${item?.file}`} className="text-blue-700 ml-3">Link</a>:
                                    <span className="text-red-700 ml-3">New</span>
                                    }

                                </span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}