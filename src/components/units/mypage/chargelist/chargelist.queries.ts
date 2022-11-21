import { gql } from "@apollo/client";

export const FETCH_POINT_PAYMENTS = gql`
  query fetchPointPayments {
    fetchPointPayments {
      id
      amount
      createdAt
      impUid
      status
    }
  }
`;

export const CANCLE_POINT_PAYMENT = gql`
  mutation cancelPointPayment($impUid: String!) {
    cancelPointPayment(impUid: $impUid) {
      id
    }
  }
`;
