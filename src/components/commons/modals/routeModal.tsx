import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isRouteModalOpenState } from "../../../store";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IRouteModalProps {
  mountain: string;
  address: string;
}

const TREKKING_INFORM = gql`
  query fetchTrekkingInfo($address: String!, $mountainName: String!) {
    fetchTrekkingInfo(address: $address, mountainName: $mountainName) {
      mountainName
      coordinate
    }
  }
`;

const TREKKING_DATA = gql`
  query fetchTrekkingCoordinate($mountainName: String!) {
    fetchTrekkingCoordinate(mountainName: $mountainName) {
      mountainName
      coordinate
    }
  }
`;

const RouteModal = ({ mountain, address }: IRouteModalProps) => {
  console.log(mountain, address);
  const [, setIsRouteModalOpen] = useRecoilState(isRouteModalOpenState);

  const { data } = useQuery(TREKKING_INFORM, {
    variables: { address: address.slice(0, -1), mountainName: mountain },
  });

  const { data: fetchData } = useQuery(TREKKING_DATA, {
    variables: { mountainName: mountain },
  });

  console.log(fetchData);

  const onClickWrapper = () => {
    setIsRouteModalOpen((prev) => !prev);
  };

  const getCoordinates = () => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const coordData: any = [];
    fetchData?.fetchTrekkingCoordinate.map((el: any) => {
      const coord = new window.kakao.maps.LatLng(
        el.coordinate[0][0],
        el.coordinate[0][1]
      );
      geocoder.coord2Address(
        coord.getLng(),
        coord.getLat(),
        (result: any, status: any) => {
          //   const arr = result[0].address.address_name.split(" ");
          //   const temp = `${String(arr[0])} ${String(arr[1])}`;
          // console.log(result);
          //   if (address.includes(temp)) {
          //     coordData.push(el.coordinate);
          //   }
          coordData.push(el.coordinate);
        }
      );
    });
    const result: any = [];
    coordData[0]?.map((el: any) => {
      result.concat(el);
    });
    return coordData;
  };

  useEffect(() => {
    if (!fetchData) return;
    const coordData = getCoordinates();
    console.log(coordData);
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=abcd05d0eb39667951498f33e9ade254";
    document.head.appendChild(script);

    script.onload = () => {
      const positions = [];
      coordData.map((el) => {
        el.map((el2) => {
          positions.push({
            latlng: new window.kakao.maps.LatLng(el2[0], el2[1]),
          });
        });
      });
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            positions[0]?.latlng.Ma,
            positions[0]?.latlng.La
          ), // 지도의 중심좌표
          level: 8, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커를 표시할 위치와 title 객체 배열입니다
        // const positions = [
        //   {
        //     latlng: new window.kakao.maps.LatLng(
        //       38.11917214241462,
        //       128.4667713787109
        //     ),
        //   },
        //   {
        //     latlng: new window.kakao.maps.LatLng(
        //       38.11919379341161,
        //       128.4672751106581
        //     ),
        //   },
        //   {
        //     latlng: new window.kakao.maps.LatLng(
        //       38.119275281239695,
        //       128.4676206818399
        //     ),
        //   },
        //   {
        //     latlng: new window.kakao.maps.LatLng(
        //       38.11954853745286,
        //       128.4680696575272
        //     ),
        //   },
        //   {
        //     latlng: new window.kakao.maps.LatLng(
        //       38.11996363398246,
        //       128.4686119882263
        //     ),
        //   },
        // ];

        // 마커 이미지의 이미지 주소입니다
        const imageSrc = "/images/detail/orange-dot.png";

        for (let i = 0; i < positions?.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new window.kakao.maps.Size(10, 10);

          // 마커 이미지를 생성합니다
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
          });
        }
      });
    };
  });

  return (
    <>
      <Wrapper onClick={onClickWrapper}></Wrapper>
      <ModalContainer>
        <ModalText>등산로</ModalText>
        <ModalMap id="map"> </ModalMap>
      </ModalContainer>
    </>
  );
};

export default RouteModal;

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
  width: 800px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 9999;
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalText = styled.p`
  font-size: 3rem;
`;

const ModalMap = styled.div`
  width: 100%;
  height: 50rem;
`;
