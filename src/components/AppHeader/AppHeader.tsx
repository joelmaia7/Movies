import { Link, useNavigate } from "react-router-dom";

import { debounce } from "../../utils/debounce";
import SearchInput from "../SearchInput/SearchInput";
import { Container, Logo } from "./styles";

interface IProps {
  query?: string;
}

export default function AppHeader({ query } : IProps) {
  const navigate = useNavigate();

  const onInputChange = (e: any) => {
    const text = e.target.value;
    debounce(() => {
      navigate(`/?query=${text}`)
    }, 500);
  };

  return (
    <Container>
      <Link to="/">
        <Logo>MOVIES</Logo>
      </Link>

      <SearchInput onChange={onInputChange} placeholder="Pesquisar" defaultValue={query} />
    </Container>
  );
}
