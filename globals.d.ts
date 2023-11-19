type Transaction = {
  _id: string;
  particulars: string;
  amount: number;
  date: string;
  type: string;
  user: string;
  img?: string;
};

type User = {
  email: string;
  name: string;
  password: string;
  img?: string;
  _id: string;
};
