import {default as BaseBreadcrumbs} from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface Breadcrumb {
  id: number;
  name: string;
  url: string;
}

interface Props {
  data: Breadcrumb[];
}

const Breadcrumbs:React.FC<Props> = ({data}) => {
  return <BaseBreadcrumbs aria-label="breadcrumb" separator="›">
    {data.map((item, index) => {
      return <Link underline="none" color={index == (data.length - 1) ? 'black' : 'inherit'} href={item.url} key={item.id}>
      {item.name}
    </Link>
    })}
  </BaseBreadcrumbs>
}

export default Breadcrumbs