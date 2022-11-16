import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { subColor } from "../../../commons/styles/color";
import {
  isMountainModalOpenState,
  mountainAddressState,
  mountainIdState,
} from "../../../store";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, MouseEvent, useState } from "react";

const FETCH_MOUNTAIN_SEARCH = gql`
  query fetchMountainsWithSearch($search: String!) {
    fetchMountainsWithSearch(search: $search) {
      id
      mountain
      address
    }
  }
`;

const MountainModal = () => {
  const [keyword, setKeyword] = useState("");

  const [, setIsMountainModalOpen] = useRecoilState(isMountainModalOpenState);
  const [, setIsMountainId] = useRecoilState(mountainIdState);
  const [, setMountainAddress] = useRecoilState(mountainAddressState);

  const { data, refetch } = useQuery(FETCH_MOUNTAIN_SEARCH, {
    variables: { search: keyword },
  });

  console.log(data);

  const onClickList = (event: MouseEvent<HTMLUListElement>) => {
    setIsMountainId(event.currentTarget.className);
    setMountainAddress(event.currentTarget.id);
    setIsMountainModalOpen(false);
  };

  const onClickWrapper = () => {
    setIsMountainModalOpen(false);
  };

  const getDebounce = _.debounce((value) => {
    console.log(value);
    void refetch({ search: value });
    setKeyword(value);
  }, 300);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <Wrapper onClick={onClickWrapper}></Wrapper>
      <ModalContainer>
        <ModalHeader>
          <ModalHeaderText>산 검색</ModalHeaderText>
          <ModalHeaderBtn onClick={onClickWrapper}>X</ModalHeaderBtn>
        </ModalHeader>
        <ModalBody>
          <ModalSearchBox>
            <MountainInput
              placeholder="예) 관악산, 설악산"
              onChange={onChangeSearch}
            />
          </ModalSearchBox>
          <ModalMountainListBox>
            <ListTitle>
              <MountainTitle>산이름</MountainTitle>
              <AddressTitle>주소</AddressTitle>
            </ListTitle>
            <ListBox>
              {data?.fetchMountainsWithSearch.map((mountainMap: any) => (
                <ListData
                  key={uuidv4()}
                  onClick={onClickList}
                  className={mountainMap.id}
                  id={`${String(mountainMap.mountain)} / ${String(
                    mountainMap.address
                  )}`}
                >
                  <MountainData>
                    {mountainMap.mountain
                      .replaceAll(keyword, `!@#@${keyword}`)
                      .split("!@#@")
                      .map((keywordMap: string) => (
                        <span key={uuidv4()}>{keywordMap}</span>
                      ))}
                  </MountainData>
                  <AddressData>{mountainMap.address}</AddressData>
                </ListData>
              ))}
            </ListBox>
          </ModalMountainListBox>
        </ModalBody>
      </ModalContainer>
    </>
  );
};

export default MountainModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 9998;
`;

const ModalContainer = styled.div`
  width: 472px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 9999;
  background-color: white;
`;

const MountainInput = styled.input`
  font-size: 1.4rem;
  height: 4.6rem;
  border: none;
  outline: none;
  width: 372px;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

const ModalHeaderText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
`;

const ModalHeaderBtn = styled.button`
  border: none;
  cursor: pointer;
  color: ${subColor};
  font-size: 1.6rem;
  background: transparent;
`;

const ModalBody = styled.div`
  padding: 2.4rem;
`;

const ModalSearchBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #111;
  padding: 0 1.5rem;
`;

const ModalMountainListBox = styled.section`
  width: 100%;
  margin-top: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 100%;
`;

const ListTitle = styled.ul`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  margin: 0;
  padding: 1rem;
`;

const MountainTitle = styled.li`
  font-size: 1.4rem;
  color: #111;
  width: 39%;
  font-weight: 500;
`;

const AddressTitle = styled(MountainTitle)`
  width: 60%;
`;

const ListData = styled.ul`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  margin: 0;
  padding: 1rem;
`;

const MountainData = styled.li`
  font-size: 1.4rem;
  color: #111;
  width: 39%;
  cursor: pointer;
  :hover {
    color: ${subColor};
  }
`;

const AddressData = styled(MountainData)`
  width: 60%;
  cursor: pointer;
  :hover {
    color: ${subColor};
  }
`;

const ListBox = styled.div`
  height: 400px;
  overflow-y: auto;
`;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;

// const MountainInput = styled.div``;
