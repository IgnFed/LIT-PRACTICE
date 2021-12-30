export type UserData = {
  id: number,
  fullname: string,
}


export type UserDetailedData = {
  country: string,
  role: 'COMMON' | 'ADVANCED' | 'ADMIN',
}

type Join<UserData, DetailedUserData> = UserData & DetailedUserData;

export type CardInfo = Join<UserData, UserDetailedData>;

