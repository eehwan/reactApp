import { Link } from "react-router-dom";
import data from '../db.js';

export const About = () => {
  const rendering = () => {
    const result = []
    Object.keys(data).forEach((x) => {
      result.push(<div key={x}><Link to = {`${x}`}>{data[x].name}</Link></div>)
    })
    return result
  }
  return (
    <div className="about">
      <div>상대방을(를) 자세히 알아보세요.</div>
      <div className="detailList">{rendering()}</div>
    </div>
  )
}