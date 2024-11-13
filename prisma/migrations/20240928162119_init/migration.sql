-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER,
    "style" TEXT,
    "imageUrl" TEXT,
    "description" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
