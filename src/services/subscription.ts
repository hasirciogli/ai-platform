import { SUBSCRIPTION_ERRORS } from "@/enums";
import { Subscription } from "@/models/subscription";
import prisma from "@prisma";

type CreateSubscriptionParams = {
  userId: string;
  type: string;
  freeTrial: boolean;
  till?: Date;
  status?: string;
  systemMetadata?: any;
};

type UpdateSubscriptionParams = {
  id: string;
  status?: string;
  till?: Date;
  freeTrial?: boolean;
  systemMetadata?: any;
  userId?: string;
};

type GetSubscriptionParams = {
  id: string;
};

type DeleteSubscriptionParams = {
  id: string;
};

type GetUserSubscriptionsParams = {
  userId: string;
};

type CancelSubscriptionParams = {
  id: string;
  reason?: string;
};

export class SubscriptionService {
  public static async createSubscription(
    params: CreateSubscriptionParams
  ): Promise<Subscription | SUBSCRIPTION_ERRORS> {
    try {
      const subscription = await prisma.subscriptions.create({
        data: {
          userId: params.userId,
          type: params.type,
          freeTrial: params.freeTrial,
          till: params.till,
          status: params.status,
          systemMetadata: params.systemMetadata,
        },
      });

      return subscription as Subscription;
    } catch (error) {
      return SUBSCRIPTION_ERRORS.INTERNAL_SERVER_ERROR;
    }
  }

  public static async updateSubscription(
    params: UpdateSubscriptionParams
  ): Promise<Subscription | SUBSCRIPTION_ERRORS> {
    try {
      const subscription = await prisma.subscriptions.update({
        where: { id: params.id },
        data: {
          status: params.status,
          till: params.till,
          freeTrial: params.freeTrial,
          systemMetadata: params.systemMetadata,
          userId: params.userId,
        },
      });

      if (!subscription) {
        return SUBSCRIPTION_ERRORS.NOT_FOUND;
      }

      return subscription as Subscription;
    } catch (error) {
      return SUBSCRIPTION_ERRORS.INTERNAL_SERVER_ERROR;
    }
  }

  public static async getSubscription(
    params: GetSubscriptionParams
  ): Promise<Subscription | SUBSCRIPTION_ERRORS> {
    try {
      const subscription = await prisma.subscriptions.findUnique({
        where: { id: params.id },
      });

      if (!subscription) {
        return SUBSCRIPTION_ERRORS.NOT_FOUND;
      }

      return subscription as Subscription;
    } catch (error) {
      return SUBSCRIPTION_ERRORS.INTERNAL_SERVER_ERROR;
    }
  }

  public static async deleteSubscription(
    params: DeleteSubscriptionParams
  ): Promise<Subscription | null> {
    try {
      const subscription = await prisma.subscriptions.delete({
        where: { id: params.id },
      });

      return subscription as Subscription;
    } catch (error) {
      return null;
    }
  }

  public static async getUserSubscriptions(
    params: GetUserSubscriptionsParams
  ): Promise<Subscription[]> {
    try {
      const subscriptions = await prisma.subscriptions.findMany({
        where: { userId: params.userId },
      });

      return subscriptions as Subscription[];
    } catch (error) {
      return [];
    }
  }

  public static async cancelSubscription(
    params: CancelSubscriptionParams
  ): Promise<Subscription | SUBSCRIPTION_ERRORS> {
    try {
      const subscription = await prisma.subscriptions.findUnique({
        where: { id: params.id },
      });

      if (!subscription) {
        return SUBSCRIPTION_ERRORS.NOT_FOUND;
      }

      const updatedSubscription = await prisma.subscriptions.update({
        where: { id: params.id },
        data: { status: "canceled", cancelReason: params.reason },
      });

      return updatedSubscription as Subscription;
    } catch (error) {
      return SUBSCRIPTION_ERRORS.INTERNAL_SERVER_ERROR;
    }
  }
}
