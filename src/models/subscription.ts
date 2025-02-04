export type Subscription = {
  id: string;
  userId: string;
  type: string;
  status: string;
  till: Date | null;
  freeTrial: boolean;
  systemMetadata: unknown;
  createdAt: Date;
  updatedAt: Date;
};
