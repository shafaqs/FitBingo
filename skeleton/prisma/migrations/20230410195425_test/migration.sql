-- CreateTable
CREATE TABLE "Bingo_Board" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
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
    "inProgress" BOOLEAN NOT NULL,
    CONSTRAINT "Bingo_Square_bingoBoardId_fkey" FOREIGN KEY ("bingoBoardId") REFERENCES "Bingo_Board" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bingo_Square_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "experience_points" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("email", "id", "name") SELECT "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_title_description_key" ON "Exercise"("title", "description");
