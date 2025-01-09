export type FeaturesDataType = {
  id: string;
  title: string;
  description: string;
  image: string;
}[];

export type PortfolioDataType = {
  id: string;
  title: string;
  imgPath: string;
}[];

export type FetchData = {
  id?: string;
  title: string;
  description: string;
  image?: string;
  feature?: FeaturesDataType;
};

export type UserToken = {
  login: string;
  role: string;
  iat: number;
  exp: number;
};
