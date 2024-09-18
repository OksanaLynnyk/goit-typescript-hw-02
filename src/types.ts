export interface Image {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }

export interface GetImages {
    results: Image[];
    total_pages: number;
}

export type OpenModal = (url: string, alt_description: string) => void;