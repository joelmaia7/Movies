import { SearchOutlined } from "@ant-design/icons";

import { Container, Input } from "./styles";

interface IProps {
  onChange: (e: any) => void;
  placeholder: string;
  defaultValue?: string;
}

export default function SearchInput({ onChange, placeholder, defaultValue } : IProps) {
  return (
    <Container>
      <SearchOutlined />
      <Input onChange={onChange} placeholder={placeholder} defaultValue={defaultValue} />
    </Container>
  );
}

