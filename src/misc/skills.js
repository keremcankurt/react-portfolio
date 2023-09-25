import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact } from "react-icons/bi";
import { SiCsharp, SiMicrosoftsqlserver, SiMysql } from "react-icons/si";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";
import { DiSass } from "react-icons/di";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {title: 'HTML', icon: <AiFillHtml5 size={30} style={{color: 'orange'}}/>, knowledgeLevel: 90},
    {title: 'Javascript', icon: <BiLogoJavascript size={30} style={{color: 'yellow'}}/>, knowledgeLevel: 80},
    {title: 'NodeJS', icon: <BiLogoNodejs size={30} style={{color: 'green'}}/>, knowledgeLevel: 75},
    {title: 'CSS', icon: <BiLogoCss3 size={30} style={{color: 'blue'}}/>, knowledgeLevel: 90},
    {title: 'React', icon: <BiLogoReact size={30} style={{color: 'blue'}}/>, knowledgeLevel: 85},
    {title: 'Redux', icon: <TbBrandRedux size={30} style={{color: 'purple'}}/>, knowledgeLevel: 80},
    {title: 'React-Native', icon: <TbBrandReactNative size={30} style={{color: 'blue'}}/>, knowledgeLevel: 55},
    {title: 'C#', icon: <SiCsharp size={30} style={{color: 'rgb(184, 11, 184)'}}/>, knowledgeLevel: 65},
    {title: 'MongoDB', icon: <BiLogoMongodb size={30} style={{color: 'green'}}/>, knowledgeLevel: 85},
    {title: 'SQL', icon: <SiMicrosoftsqlserver size={30} style={{color: 'blue'}}/>, knowledgeLevel: 55},
    {title: 'MySQL', icon: <SiMysql size={30}/>, knowledgeLevel: 45},
    {title: 'SASS', icon: <DiSass size={30} style={{color: 'pink'}}/>, knowledgeLevel: 70},
]