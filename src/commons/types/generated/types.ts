export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  date: Scalars['String'];
  dateTime: Scalars['String'];
  description: Scalars['String'];
  dues: Scalars['Int'];
  gender: Scalars['String'];
  peoples: Scalars['Int'];
  title: Scalars['String'];
};

export type ICreateCrewCommentInput = {
  boardId: Scalars['String'];
  comment: Scalars['String'];
};

export type ICreateReviewBoardInput = {
  review: Scalars['String'];
  star: Scalars['Float'];
  title: Scalars['String'];
};

export type ICreateSubCrewCommentInput = {
  parentId: Scalars['String'];
  subComment: Scalars['String'];
};

export type ICreateUserInput = {
  birth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
};

export type ICrewBoard = {
  __typename?: 'CrewBoard';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  date: Scalars['String'];
  dateTime: Scalars['String'];
  description: Scalars['String'];
  dues: Scalars['Int'];
  gender: Scalars['String'];
  id: Scalars['String'];
  peoples: Scalars['Int'];
  title: Scalars['String'];
};

export type ICrewBoardImage = {
  __typename?: 'CrewBoardImage';
  crewBoardId: ICrewBoard;
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
  url: Scalars['String'];
};

export type ICrewComment = {
  __typename?: 'CrewComment';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  crewBoard: ICrewBoard;
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  subCrewComment: ICrewComment;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICrewUserList = {
  __typename?: 'CrewUserList';
  crewBoard: ICrewBoard;
  id: Scalars['String'];
  status: Scalars['String'];
  user: IUser;
};

export type IDib = {
  __typename?: 'Dib';
  crewBoard: ICrewBoard;
  id: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelPointPayment: IPointPayment;
  checkEmail: Scalars['String'];
  checkNickName: Scalars['String'];
  checkTokenPhone: Scalars['String'];
  createCrewBoard: ICrewBoard;
  createCrewBoardTEST: ICrewBoard;
  createCrewComment: ICrewComment;
  createCrewSubComment: ICrewComment;
  createCrewUserList: Scalars['String'];
  createDib: Scalars['String'];
  createMountain: Scalars['String'];
  createPointPayment: IPointPayment;
  createReviewBoard: IReviewBoard;
  createReviewComment: IReviewComment;
  createUser: IUser;
  deleteCrewBoard: Scalars['String'];
  deleteCrewComment: Scalars['Boolean'];
  deleteCrewSubComment: Scalars['Boolean'];
  deleteCrewUserList: Scalars['String'];
  deleteDib: Scalars['String'];
  deleteReviewComment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendTokenToPhone: Scalars['String'];
  socialUpdateUser: IUser;
  updateCrewBoard: ICrewBoard;
  updateCrewComment: ICrewComment;
  updateCrewSubComment: ICrewComment;
  updatePassword: Scalars['String'];
  updateReviewBoard: IReviewBoard;
  updateReviewComment: IReviewComment;
  updateUser: IUser;
  uploadCrewBoaredImage: Array<ICrewBoardImage>;
  uploadFileForUserProfile: Scalars['String'];
  uploadFilesForCrewBoard: Array<Scalars['String']>;
  uploadFilesForReviewBoard: Array<Scalars['String']>;
};


export type IMutationCancelPointPaymentArgs = {
  impUid: Scalars['String'];
};


export type IMutationCheckEmailArgs = {
  email: Scalars['String'];
};


export type IMutationCheckNickNameArgs = {
  nickname: Scalars['String'];
};


export type IMutationCheckTokenPhoneArgs = {
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IMutationCreateCrewBoardArgs = {
  createCrewBoardInput: ICreateCrewBoardInput;
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
  crewBoardId: Scalars['String'];
};


export type IMutationCreateDibArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationCreatePointPaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateReviewBoardArgs = {
  createReviewBoardInput: ICreateReviewBoardInput;
};


export type IMutationCreateReviewCommentArgs = {
  reviewBoardId: Scalars['String'];
  reviewComment: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCrewBoardArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationDeleteCrewCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteCrewSubCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteCrewUserListArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationDeleteDibArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationDeleteReviewCommentArgs = {
  reviewCommentId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendTokenToPhoneArgs = {
  phone: Scalars['String'];
};


export type IMutationSocialUpdateUserArgs = {
  phoneToken: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateCrewBoardArgs = {
  crewBoardId: Scalars['String'];
  updateCrewBoardInput: IUpdateCrewBoardInput;
};


export type IMutationUpdateCrewCommentArgs = {
  commentId: Scalars['String'];
  updateCrewCommentInput: IUpdateCrewCommentInput;
};


export type IMutationUpdateCrewSubCommentArgs = {
  updateSubCrewCommentInput: IUpdateSubCrewCommentInput;
};


export type IMutationUpdatePasswordArgs = {
  password: Scalars['String'];
};


export type IMutationUpdateReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
  updateReviewBoardInput: IUpdateReviewBoardInput;
};


export type IMutationUpdateReviewCommentArgs = {
  reviewCommentId: Scalars['String'];
  updateComment: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadCrewBoaredImageArgs = {
  crewBoardId: Scalars['String'];
  imgURL: Array<Scalars['String']>;
};


export type IMutationUploadFileForUserProfileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadFilesForCrewBoardArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUploadFilesForReviewBoardArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPoint_Payment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPointPayment = {
  __typename?: 'PointPayment';
  amount: Scalars['Int'];
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPoint_Payment_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAllCrewBoardImages: Array<ICrewBoardImage>;
  fetchAllCrewBoards: Array<ICrewBoard>;
  fetchAllCrewBoardsWithDelete: Array<ICrewBoard>;
  fetchBoardImage: Array<ICrewBoardImage>;
  fetchCrewBoard: ICrewBoard;
  fetchCrewBoardsByDate: Array<Array<ICrewBoard>>;
  fetchCrewBoardsDeadlineFirst: Array<Array<ICrewBoard>>;
  fetchCrewBoardsLatestFirst: Array<Array<ICrewBoard>>;
  fetchCrewBoardsTEST: Array<Array<ICrewBoard>>;
  fetchCrewComment: Array<ICrewComment>;
  fetchCrewComments: Array<ICrewComment>;
  fetchCrewSubComments: Array<ICrewComment>;
  fetchCrewUserList: Array<ICrewUserList>;
  fetchDibs: Array<IDib>;
  fetchReviewBoard: IReviewBoard;
  fetchReviewBoards: Array<IReviewBoard>;
  fetchReviewComments: Array<IReviewComment>;
  fetchUser: IUser;
  findUserEmail: Scalars['String'];
  findUserPassword: Scalars['String'];
};


export type IQueryFetchBoardImageArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchCrewBoardArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchCrewBoardsByDateArgs = {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
};


export type IQueryFetchCrewCommentArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchCrewCommentsArgs = {
  boardId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCrewSubCommentsArgs = {
  boardId: Scalars['String'];
  commentId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchReviewCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};


export type IQueryFindUserEmailArgs = {
  name: Scalars['String'];
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};


export type IQueryFindUserPasswordArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  phoneToken: Scalars['String'];
};

export type IReviewBoard = {
  __typename?: 'ReviewBoard';
  crewUserList: ICrewUserList;
  id: Scalars['String'];
  like: Scalars['Int'];
  review: Scalars['String'];
  star: Scalars['Float'];
  title: Scalars['String'];
};

export type IReviewComment = {
  __typename?: 'ReviewComment';
  id: Scalars['String'];
  reviewComment: Scalars['String'];
};

export type IUpdateCrewBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  dateTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dues?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  peoples?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateCrewCommentInput = {
  boardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type IUpdateReviewBoardInput = {
  review?: InputMaybe<Scalars['String']>;
  star?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateSubCrewCommentInput = {
  parentId?: InputMaybe<Scalars['String']>;
  subComment?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  birth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  birth: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
  profile_img?: Maybe<Scalars['String']>;
};
