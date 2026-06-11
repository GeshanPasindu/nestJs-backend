-- CreateTable
CREATE TABLE "platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Description" TEXT,
    "Link" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "platform" ADD CONSTRAINT "platform_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
