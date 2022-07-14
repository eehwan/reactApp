import { useParams } from 'react-router-dom';

export const About = (props) => {
  console.log(props)
  const { id } = useParams();
    return <div>{id}을(를) 자세히 알아보세요.</div>
  }