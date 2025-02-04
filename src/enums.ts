export enum AUTH_ERRORS {
  INVALID_CREDENTIALS = "auth/invalid-credentials",
  INTERNAL_SERVER_ERROR = "auth/internal-server-error",
  NOT_IMPLEMENTED = "auth/not-implemented",
  OK = "auth/ok",
}

export enum SUBSCRIPTION_ERRORS {
  OK = "subscription/ok",
  NOT_FOUND = "subscription/not-found",
  INTERNAL_SERVER_ERROR = "subscription/internal-server-error",
  NOT_IMPLEMENTED = "subscription/not-implemented",
  INVALID_PARAMS = "subscription/invalid-params",
  INVALID_STATUS = "subscription/invalid-status",
  INVALID_TYPE = "subscription/invalid-type",
  INVALID_FREE_TRIAL = "subscription/invalid-free-trial",
  INVALID_TILL = "subscription/invalid-till",
  INVALID_SYSTEM_METADATA = "subscription/invalid-system-metadata",
  INVALID_CANCEL_REASON = "subscription/invalid-cancel-reason",
  INVALID_USER_ID = "subscription/invalid-user-id",
  INVALID_PAYMENT_ID = "subscription/invalid-payment-id",
  INVALID_PAYMENT_STATUS = "subscription/invalid-payment-status",
  INVALID_PAYMENT_AMOUNT = "subscription/invalid-payment-amount",
  INVALID_PAYMENT_CURRENCY = "subscription/invalid-payment-currency",
  INVALID_PAYMENT_DATE = "subscription/invalid-payment-date",
}
