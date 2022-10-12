import { Spin } from "antd";

import { Container } from "./styles";

export default function LoadingContainer() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}
