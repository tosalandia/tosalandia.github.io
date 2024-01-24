export type Common = {
  profilePic: string;
  caption: string;
  username: string;
  comments: Comments[];
};

export type Comments = {
  username: string;
  comment: string;
  date: string;
  likes: number;
};

export type VideoType = Common & {
  videosrc: string;
  type: "video";
};

export type CardsType = Common & {
  imagessrc: string[];
  type: "cards";
};

export type TikToks = VideoType | CardsType;
