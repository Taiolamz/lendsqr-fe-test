export interface UserDetails {
  organization: string;
  user: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
  reference_number: string;
  currencyId: string;
  amount: string;
  account_num: string;
  bank: string;
  gender: string;
  children: string;
  official_email: string;
  guarantor_name: string;
  guarantor_num: string;
  guarantor_relationship: string;
  avatar: string;
  // all other details type should be included here but
  // I won't be making use of them
}

export interface UserDetailsState {
  loading: boolean;
  users: UserDetails[];
}

type RootState = {
  users: UserDetailsState;
};

export default RootState;
