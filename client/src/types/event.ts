declare type EventSummary = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  bannerImage: string;
};

declare type EventDetail = EventSummary & {
  contentImages: string[];
};
