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
  date: Scalars['DateTime'];
  description: Scalars['String'];
  dues: Scalars['Int'];
  gender: Scalars['String'];
  peoples: Scalars['Int'];
  title: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  profile_img: Scalars['String'];
};

export type ICrewBoard = {
  __typename?: 'CrewBoard';
  address: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  dues: Scalars['Int'];
  gender: Scalars['String'];
  id: Scalars['String'];
  location: Scalars['String'];
  peoples: Scalars['Int'];
  title: Scalars['String'];
};

export type IImage = {
  __typename?: 'Image';
  crewBoardId: ICrewBoard;
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
  reviewBoardId: Scalars['String'];
  url: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createCrewBoard: ICrewBoard;
  createUser: IUser;
  deleteCrewBoard: Scalars['String'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  updateCrewBoard: ICrewBoard;
  updateUser: IUser;
  uploadCrewBoaredImage: Scalars['String'];
};


export type IMutationCreateCrewBoardArgs = {
  createCrewBoardInput: ICreateCrewBoardInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCrewBoardArgs = {
  crewBoardId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateCrewBoardArgs = {
  crewBoardId: Scalars['String'];
  updateCrewBoardInput: IUpdateCrewBoardInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  userId: Scalars['String'];
};


export type IMutationUploadCrewBoaredImageArgs = {
  image: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoardImage: IImage;
  fetchCrewBoard: ICrewBoard;
  fetchCrewBoardImages: Array<IImage>;
  fetchCrewBoards: Array<ICrewBoard>;
  fetchCrewBoardsSortNew: Array<ICrewBoard>;
  fetchCrewBoardsWithDelete: Array<ICrewBoard>;
  fetchUser: IUser;
};


export type IQueryFetchBoardImageArgs = {
  ImageId: Scalars['String'];
};


export type IQueryFetchCrewBoardArgs = {
  crewBoardId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};

export type IUpdateCrewBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dues?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Scalars['String']>;
  peoples?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
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
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
  profile_img?: Maybe<Scalars['String']>;
};
