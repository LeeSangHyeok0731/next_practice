"use client";

import { useRouter } from "next/navigation";

import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default function Header() {
  const router = useRouter();

  return (
    <HeaderBox>
      <p onClick={() => router.push("/")}>홈</p>
      <p onClick={() => router.push("/guide")}>가이드</p>
      <p onClick={() => router.push("/faq")}>FAQ</p>
      <p onClick={() => router.push("/user")}>User</p>
    </HeaderBox>
  );
}
