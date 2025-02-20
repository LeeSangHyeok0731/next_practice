"use client";

import { useRouter } from "next/navigation"; // ✅ next/router ❌ → next/navigation ⭕

import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: tomato;
  display: flex;
  flex-direction: row;
`;

export default function Header() {
  const router = useRouter();

  return (
    <HeaderBox>
      <p onClick={() => router.push("/")}>홈</p>
      <p onClick={() => router.push("/guidd")}>가이드</p>
      <p onClick={() => router.push("/faq")}>FAQ</p>
      <p onClick={() => router.push("/user")}>User</p>
    </HeaderBox>
  );
}
