export interface IData {
  id: string;
  snippet: {
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
      default: {
        url: string;
      };
    };
    title: string;
  };
  index: number;
}
