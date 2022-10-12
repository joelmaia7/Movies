import { SmileOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { Container, Text } from "./styles";

interface IProps {
  fetchingData: boolean;
}

export default function Empty({ fetchingData } : IProps) {
  if (fetchingData) return <Spin />;

  return (
    <Container>
      <SmileOutlined style={{ fontSize: 40 }} />
      <Text>Nenhum filme encontrado</Text>
    </Container>
  );
}
