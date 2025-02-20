import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: tomato;
`;

export default function Header() {
  const { push } = useRouter();
  return (
    <HeaderBox>
      <p onClick={() => push("/home")}>홈</p>
      <p onClick={() => push("/guid")}>가이드</p>
      <p onClick={() => push("/fag")}>Fag</p>
      <p onClick={() => push("/user")}>user</p>
    </HeaderBox>
  );
}
