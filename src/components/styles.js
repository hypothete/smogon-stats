import styled from 'styled-components';

export const DataUl = styled.ul`
  list-style: none;
  max-height: ${props => props.styles && props.styles['max-height'] ? props.styles['max-height'] : '600px'};
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const DataLi = styled.li`
  background: ${props => (props.inspected ? "gray" : "none")};
`;

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`;

export const TabsTab = styled.div`
  text-decoration: underline;
  padding: 10px;
  color: #00d;
  background: ${props => props.selected ? 'gray' : 'none'};
`;