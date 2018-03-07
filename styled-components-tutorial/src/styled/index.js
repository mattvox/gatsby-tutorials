import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`;

export const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

export const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

export const Excerpt = styled.p`
  margin: 0;
`;
