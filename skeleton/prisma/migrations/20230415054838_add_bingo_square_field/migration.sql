/*
  Warnings:

  - Added the required column `createAt` to the `Bingo_Square` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAt` to the `Bingo_Square` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bingo_Square" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bingoBoardId" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "inProgress" BOOLEAN NOT NULL,
    "createAt" DATETIME NOT NULL,
    "endAt" DATETIME NOT NULL,
    CONSTRAINT "Bingo_Square_bingoBoardId_fkey" FOREIGN KEY ("bingoBoardId") REFERENCES "Bingo_Board" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bingo_Square_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bingo_Square" ("bingoBoardId", "exerciseId", "id", "inProgress", "isCompleted", "position") SELECT "bingoBoardId", "exerciseId", "id", "inProgress", "isCompleted", "position" FROM "Bingo_Square";
DROP TABLE "Bingo_Square";
ALTER TABLE "new_Bingo_Square" RENAME TO "Bingo_Square";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
