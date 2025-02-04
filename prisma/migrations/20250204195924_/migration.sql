/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `password_resets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "password_resets_token_key" ON "password_resets"("token");

-- CreateIndex
CREATE INDEX "password_resets_token_email_idx" ON "password_resets"("token", "email");
