// types.ts
export interface School {
  name: string;
  city: string;
  students: number;
  location?:string;
  phone?:string;
  websiteURL?:string,
  email?:string,
  facebook?:string,
  logo:string,
  suit?:string,
}

export type TopperDTO={
  image:string,
  marks:string,
  _id:string,
  name:string,
  class:string,
  description?:string
}
export type AboutDTO={
  mission:string,
  photo:string,
  alt:string,
  speech:string,
}
export type BannerDTO={
  alt:string,
  img:string,

}
export type EventDTO={
  title:string
  image:string,
  description:string,
}
