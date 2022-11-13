export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type ICreateCrewBoardInput = {
  address: Scalars["String"];
  addressDetail: Scalars["String"];
  date: Scalars["String"];
  dateTime: Scalars["String"];
  description: Scalars["String"];
  dues: Scalars["Int"];
  gender: Scalars["String"];
  peoples: Scalars["Int"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
};

export type ICreateCrewCommentInput = {
  boardId: Scalars["String"];
  comment: Scalars["String"];
};

export type ICreateReviewBoardInput = {
  mountain: Scalars["String"];
  review: Scalars["String"];
  star: Scalars["Float"];
  title: Scalars["String"];
};

export type ICreateSubCrewCommentInput = {
  parentId: Scalars["String"];
  subComment: Scalars["String"];
};

export type ICreateUserInput = {
  birth?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  gender?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  nickname?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
  profile_img?: InputMaybe<Scalars["String"]>;
};

export type ICrewBoard = {
  __typename?: "CrewBoard";
  address: Scalars["String"];
  addressDetail: Scalars["String"];
  createdAt: Scalars["DateTime"];
  date: Scalars["String"];
  dateTime: Scalars["String"];
  description: Scalars["String"];
  dues: Scalars["Int"];
  gender: Scalars["String"];
  id: Scalars["String"];
  mountain: IMountain;
  peoples: Scalars["Int"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  user: IUser;
};

export type ICrewBoardImage = {
  __typename?: "CrewBoardImage";
  crewBoard: ICrewBoard;
  id: Scalars["String"];
  imgUrl: Scalars["String"];
  isMain: Scalars["Boolean"];
};

export type ICrewComment = {
  __typename?: "CrewComment";
  comment: Scalars["String"];
  createdAt: Scalars["DateTime"];
  crewBoard: ICrewBoard;
  deletedAt: Scalars["DateTime"];
  id: Scalars["String"];
  subCrewComment: ICrewComment;
  updatedAt: Scalars["DateTime"];
  user: IUser;
};

export type ICrewUserList = {
  __typename?: "CrewUserList";
  crewBoard: ICrewBoard;
  id: Scalars["String"];
  status: Scalars["String"];
  user: IUser;
};

export type IDib = {
  __typename?: "Dib";
  crewBoard: ICrewBoard;
  id: Scalars["String"];
  user: IUser;
};

export type IMountain = {
  __typename?: "Mountain";
  address: Scalars["String"];
  id: Scalars["Int"];
  mountain: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  acceptCrew: ICrewUserList;
  cancelPointPayment: IPointPayment;
  checkEmail: Scalars["String"];
  checkNickName: Scalars["String"];
  checkTokenPhone: Scalars["String"];
  createCrewBoard: ICrewBoard;
  createCrewBoardTEST: ICrewBoard;
  createCrewComment: ICrewComment;
  createCrewSubComment: ICrewComment;
  createCrewUserList: Scalars["String"];
  createDib: Scalars["String"];
  createMountain: Scalars["String"];
  createPointPayment: IPointPayment;
  createReviewBoard: IReviewBoard;
  createReviewComment: IReviewComment;
  createUser: IUser;
  deleteCrewBoard: Scalars["Boolean"];
  deleteCrewComment: Scalars["Boolean"];
  deleteCrewSubComment: Scalars["Boolean"];
  deleteCrewUserList: Scalars["String"];
  deleteDib: Scalars["String"];
  deleteReviewComment: Scalars["Boolean"];
  deleteUser: Scalars["Boolean"];
  findUserEmail: Scalars["String"];
  findUserPassword: Scalars["String"];
  finishCrew: ICrewUserList;
  likeReviewBoard: Scalars["String"];
  login: Scalars["String"];
  logout: Scalars["String"];
  rejectCrew: ICrewUserList;
  restoreAccessToken: Scalars["String"];
  sendTokenToPhone: Scalars["String"];
  socialUpdateUser: IUser;
  updateCrewBoard: ICrewBoard;
  updateCrewComment: ICrewComment;
  updateCrewSubComment: ICrewComment;
  updatePassword: Scalars["String"];
  updateReviewBoard: IReviewBoard;
  updateReviewComment: IReviewComment;
  updateUser: IUser;
  uploadCrewBoardImage: ICrewBoardImage[];
  uploadFileForUserProfile: Scalars["String"];
  uploadFilesForCrewBoard: Array<Scalars["String"]>;
  uploadFilesForReviewBoard: Array<Scalars["String"]>;
  uploadReviewBoaredImage: IReviewBoardImage[];
};

export type IMutationAcceptCrewArgs = {
  id: Scalars["String"];
};

export type IMutationCancelPointPaymentArgs = {
  impUid: Scalars["String"];
};

export type IMutationCheckEmailArgs = {
  email: Scalars["String"];
};

export type IMutationCheckNickNameArgs = {
  nickname: Scalars["String"];
};

export type IMutationCheckTokenPhoneArgs = {
  phone: Scalars["String"];
  phoneToken: Scalars["String"];
};

export type IMutationCreateCrewBoardArgs = {
  createCrewBoardInput: ICreateCrewBoardInput;
  imgURL: Array<Scalars["String"]>;
};

export type IMutationCreateCrewBoardTestArgs = {
  createCrewBoardInput: ICreateCrewBoardInput;
};

export type IMutationCreateCrewCommentArgs = {
  createCrewCommentInput: ICreateCrewCommentInput;
};

export type IMutationCreateCrewSubCommentArgs = {
  createSubCrewCommentInput: ICreateSubCrewCommentInput;
};

export type IMutationCreateCrewUserListArgs = {
  crewBoardId: Scalars["String"];
};

export type IMutationCreateDibArgs = {
  crewBoardId: Scalars["String"];
};

export type IMutationCreatePointPaymentArgs = {
  amount: Scalars["Int"];
  impUid: Scalars["String"];
};

export type IMutationCreateReviewBoardArgs = {
  createReviewBoardInput: ICreateReviewBoardInput;
  crewUserListId: Scalars["String"];
  imgURL: Array<Scalars["String"]>;
};

export type IMutationCreateReviewCommentArgs = {
  reviewBoardId: Scalars["String"];
  reviewComment: Scalars["String"];
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationDeleteCrewBoardArgs = {
  crewBoardId: Scalars["String"];
};

export type IMutationDeleteCrewCommentArgs = {
  commentId: Scalars["String"];
};

export type IMutationDeleteCrewSubCommentArgs = {
  subCommentId: Scalars["String"];
};

export type IMutationDeleteCrewUserListArgs = {
  crewBoardId: Scalars["String"];
};

export type IMutationDeleteDibArgs = {
  crewBoardId: Scalars["String"];
};

export type IMutationDeleteReviewCommentArgs = {
  reviewCommentId: Scalars["String"];
};

export type IMutationDeleteUserArgs = {
  userId: Scalars["String"];
};

export type IMutationFindUserEmailArgs = {
  name: Scalars["String"];
  phone: Scalars["String"];
  phoneToken: Scalars["String"];
};

export type IMutationFindUserPasswordArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  phone: Scalars["String"];
  phoneToken: Scalars["String"];
};

export type IMutationFinishCrewArgs = {
  id: Scalars["String"];
};

export type IMutationLikeReviewBoardArgs = {
  reviewBoardId: Scalars["String"];
};

export type IMutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationRejectCrewArgs = {
  id: Scalars["String"];
};

export type IMutationSendTokenToPhoneArgs = {
  phone: Scalars["String"];
};

export type IMutationSocialUpdateUserArgs = {
  phoneToken: Scalars["String"];
  updateUserInput: IUpdateUserInput;
};

export type IMutationUpdateCrewBoardArgs = {
  crewBoardId: Scalars["String"];
  imgURL: Array<Scalars["String"]>;
  updateCrewBoardInput: IUpdateCrewBoardInput;
};

export type IMutationUpdateCrewCommentArgs = {
  commentId: Scalars["String"];
  updateCrewCommentInput: IUpdateCrewCommentInput;
};

export type IMutationUpdateCrewSubCommentArgs = {
  subCommentId: Scalars["String"];
  updateComment: Scalars["String"];
};

export type IMutationUpdatePasswordArgs = {
  password: Scalars["String"];
};

export type IMutationUpdateReviewBoardArgs = {
  imgURL: Array<Scalars["String"]>;
  reviewBoardId: Scalars["String"];
  updateReviewBoardInput: IUpdateReviewBoardInput;
};

export type IMutationUpdateReviewCommentArgs = {
  reviewCommentId: Scalars["String"];
  updateComment: Scalars["String"];
};

export type IMutationUpdateUserArgs = {
  email: Scalars["String"];
  updateUserInput: IUpdateUserInput;
};

export type IMutationUploadCrewBoardImageArgs = {
  crewBoardId: Scalars["String"];
  imgURL: Array<Scalars["String"]>;
};

export type IMutationUploadFileForUserProfileArgs = {
  file: Scalars["Upload"];
};

export type IMutationUploadFilesForCrewBoardArgs = {
  files: Array<Scalars["Upload"]>;
};

export type IMutationUploadFilesForReviewBoardArgs = {
  files: Array<Scalars["Upload"]>;
};

export type IMutationUploadReviewBoaredImageArgs = {
  imgURL: Array<Scalars["String"]>;
  reviewBoardId: Scalars["String"];
};

export enum IPoint_Payment_Status_Enum {
  Cancel = "CANCEL",
  Payment = "PAYMENT",
}

export type IPointPayment = {
  __typename?: "PointPayment";
  amount: Scalars["Int"];
  createAt: Scalars["DateTime"];
  id: Scalars["String"];
  impUid: Scalars["String"];
  status: IPoint_Payment_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: "Query";
  fetchAllCrewBoardImages: ICrewBoardImage[];
  fetchAllCrewBoards: ICrewBoard[];
  fetchAllCrewBoardsWithDelete: ICrewBoard[];
  fetchAllReviewBoardImages: IReviewBoardImage[];
  fetchBoardImage: ICrewBoardImage[];
  fetchCrewBoard: ICrewBoard;
  fetchCrewBoardsByDate: ICrewBoard[][];
  fetchCrewBoardsDeadlineFirst: ICrewBoard[][];
  fetchCrewBoardsLatestFirst: ICrewBoard[][];
  fetchCrewBoardsTEST: ICrewBoard[][];
  fetchCrewComments: ICrewComment[];
  fetchCrewSubComments: ICrewComment[];
  fetchCrewUserList: ICrewUserList[];
  fetchDibs: IDib[];
  fetchHostCrewList: ICrewBoard[];
  fetchMountain: IMountain;
  fetchMountains: IMountain[];
  fetchReviewBoard: IReviewBoard;
  fetchReviewBoardImage: IReviewBoardImage[];
  fetchReviewBoards: IReviewBoard[];
  fetchReviewComments: IReviewComment[];
  fetchUser: IUser;
  fetchUserCrewComments: ICrewComment[];
  fetchUserCrewSubComments: ICrewComment[];
  fetchVisitList: ICrewUserList[];
};

export type IQueryFetchBoardImageArgs = {
  crewBoardId: Scalars["String"];
};

export type IQueryFetchCrewBoardArgs = {
  crewBoardId: Scalars["String"];
};

export type IQueryFetchCrewBoardsByDateArgs = {
  endDate: Scalars["String"];
  startDate: Scalars["String"];
};

export type IQueryFetchCrewCommentsArgs = {
  boardId: Scalars["String"];
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchCrewSubCommentsArgs = {
  commentId: Scalars["String"];
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchMountainArgs = {
  mountainId: Scalars["String"];
};

export type IQueryFetchMountainsArgs = {
  mountain: Scalars["String"];
};

export type IQueryFetchReviewBoardArgs = {
  reviewBoardId: Scalars["String"];
};

export type IQueryFetchReviewBoardImageArgs = {
  reviewBoardId: Scalars["String"];
};

export type IQueryFetchReviewCommentsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  reviewBoardId: Scalars["String"];
};

export type IQueryFetchUserCrewCommentsArgs = {
  boardId: Scalars["String"];
  userId: Scalars["String"];
};

export type IQueryFetchUserCrewSubCommentsArgs = {
  boardId: Scalars["String"];
  userId: Scalars["String"];
};

export type IReviewBoard = {
  __typename?: "ReviewBoard";
  crewUserList: ICrewUserList;
  id: Scalars["String"];
  like: Scalars["Int"];
  review: Scalars["String"];
  star: Scalars["Float"];
  title: Scalars["String"];
  user: IUser;
};

export type IReviewBoardImage = {
  __typename?: "ReviewBoardImage";
  id: Scalars["String"];
  isMain: Scalars["Boolean"];
  reviewBoard: IReviewBoard;
  url: Scalars["String"];
};

export type IReviewComment = {
  __typename?: "ReviewComment";
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["String"];
  reviewBoard: IReviewBoard;
  reviewComment: Scalars["String"];
  user: IUser;
};

export type IUpdateCrewBoardInput = {
  address?: InputMaybe<Scalars["String"]>;
  addressDetail?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["String"]>;
  dateTime?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  dues?: InputMaybe<Scalars["Int"]>;
  gender?: InputMaybe<Scalars["String"]>;
  peoples?: InputMaybe<Scalars["Int"]>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateCrewCommentInput = {
  boardId?: InputMaybe<Scalars["String"]>;
  comment?: InputMaybe<Scalars["String"]>;
};

export type IUpdateReviewBoardInput = {
  mountain?: InputMaybe<Scalars["String"]>;
  review?: InputMaybe<Scalars["String"]>;
  star?: InputMaybe<Scalars["Float"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type IUpdateUserInput = {
  birth?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  profile_img?: InputMaybe<Scalars["String"]>;
};

export type IUser = {
  __typename?: "User";
  birth: Scalars["String"];
  email: Scalars["String"];
  gender: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  nickname: Scalars["String"];
  phone: Scalars["String"];
  point: Scalars["Int"];
  profile_img?: Maybe<Scalars["String"]>;
};
