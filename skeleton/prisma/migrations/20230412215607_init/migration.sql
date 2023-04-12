-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "experience_points" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Bingo_Board" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "squares" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "difficultyLevel" INTEGER NOT NULL,
    CONSTRAINT "Bingo_Board_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bingo_Square" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bingoBoardId" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    CONSTRAINT "Bingo_Square_bingoBoardId_fkey" FOREIGN KEY ("bingoBoardId") REFERENCES "Bingo_Board" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bingo_Square_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
