export interface Iimages {
  alt_description: string;
  urls: {
    regular: string;
  }
  images: string[]
}

export interface IonSubmit {
  onSubmitParent: Function;
}

export interface IApiData {
  query: string;
}
