import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      name
      nickname
      phone
      gender
      profile_img
      point
    }
  }
`;

export const SEND_TOKEN_TO_PHONE = gql`
  mutation sendTokenToPhone($phone: String!) {
    sendTokenToPhone(phone: $phone)
  }
`;

export const CHECK_EMAIL = gql`
  mutation checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`;

export const CHECK_NICKNAME = gql`
  mutation checkNickName($nickname: String!) {
    checkNickName(nickname: $nickname)
  }
`;

export const CHECK_TOKEN_PHONE = gql`
  mutation checkTokenPhone($phone: String!, $phoneToken: String!) {
    checkTokenPhone(phone: $phone, phoneToken: $phoneToken)
  }
`;

export const UPLOAD_FILE_FOR_USER_PROFILE = gql`
  mutation uploadFileForUserProfile($file: Upload!) {
    uploadFileForUserProfile(file: $file)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateUserInput: $updateUserInput) {
      id
    }
  }
`;
