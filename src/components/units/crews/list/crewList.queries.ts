import { gql } from "@apollo/client";

export const FETCH_CREW_BOARDS_LATEST = gql`
  query fetchCrewBoardsLatestFirst {
    fetchCrewBoardsLatestFirst {
      id
      title
      date
      dateTime
      peoples
      thumbnail
      mountain {
        id
        mountain
        address
      }
      user {
        id
        nickname
        profile_img
      }
      dibUsers {
        id
        # nickname
        # profile_img
        # gender
        # phone
        # birth
        # email
        # name
        # point
      }
      assignedUsers {
        id
        profile_img
        # nickname
        # gender
        # phone
        # birth
        # email
        # name
        # point
      }
      createdAt
    }
  }
`;

export const FETCH_CREW_BOARDS_DEADLINE = gql`
  query fetchCrewBoardsDeadlineFirst {
    fetchCrewBoardsDeadlineFirst {
      id
      title
      date
      dateTime
      peoples
      thumbnail
      mountain {
        id
        mountain
        address
      }
      user {
        id
        nickname
        profile_img
      }
      dibUsers {
        id
        # nickname
        # profile_img
        # gender
        # phone
        # birth
        # email
        # name
        # point
      }
      assignedUsers {
        id
        profile_img
        # nickname
        # gender
        # phone
        # birth
        # email
        # name
        # point
      }
      createdAt
    }
  }
`;
// export const FETCH_CREW_BOARDS_LATEST = gql`
//   query fetchCrewBoardsLatestFirst {
//     fetchCrewBoardsLatestFirst {
//       id
//       title
//       date
//       dateTime
//       peoples
//       createdAt
//       thumbnail
//       user {
//         id
//         nickname
//         profile_img
//       }
//     }
//   }
// `;

// export const FETCH_CREW_BOARDS_DEADLINE = gql`
//   query fetchCrewBoardsDeadlineFirst {
//     fetchCrewBoardsDeadlineFirst {
//       id
//       title
//       date
//       dateTime
//       peoples
//       createdAt
//       thumbnail
//       user {
//         id
//         nickname
//         profile_img
//       }
//     }
//   }
// `;

export const FETCH_BOARD_IMAGE = gql`
  query fetchBoardImage($crewBoardId: String!) {
    fetchBoardImage(crewBoardId: $crewBoardId) {
      id
      imgUrl
    }
  }
`;
