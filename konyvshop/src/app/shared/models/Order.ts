export interface Order {
  id: number;
  payType: string;
  email: string;
  name: {
    firstname: string;
    lastname: string;
  },
  address: {
    postCode: string;
    city: string;
    street: string;
    homeNumber: string;
  },
  products: Array<any>;
  totalPrice: number;
}
