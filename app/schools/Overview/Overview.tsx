
import StaticOverview from "./Static";
import DynamicOverview from "./Dynamic";

export const Overview = () => {
  return (
    <div id="why_aqsa" className="p mb-20 flex flex-col justify-between overview-bg p-5 md:p-30">   
      <StaticOverview/>
      <DynamicOverview/>
      </div>
  );
};
