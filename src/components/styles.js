import styled from 'styled-components';

export const DataUl = styled.ul`
  list-style: none;
  padding: 5px;
  min-height: 3em;
  max-height: ${props => props.styles && props.styles['max-height'] ? props.styles['max-height'] : '600px'};
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid rgba(0,0,0,0.5);
  box-sizing: border-box;
`;

export const DataLi = styled.li`
  background: ${props => (props.inspected ? "gray" : "none")};
`;

export const KeyValWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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