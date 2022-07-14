import { useParams } from 'react-router-dom';
import data from '../db.js';

export const AboutDetail = () => {
    const { id } = useParams();
    const rendering = () => {
      const result = []
      Object.keys(data[id]).forEach((x) => {
        result.push(<div key={x}>{x} : {data[id][x]}</div>)
      })
      return result
    }
    return (
      <div>{rendering()}</div>
    )
}