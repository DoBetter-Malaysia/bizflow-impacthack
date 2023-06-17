export type Origin = "user" | "bot";

export interface MessageModel {
  text: string;
  origin: Origin;
  body?: any; // to store anything else other than prompt/replies
}
