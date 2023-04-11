/*
  Warnings:

  - Added the required column `category` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL
);
INSERT INTO "new_Exercise" ("description", "difficulty", "id", "title") SELECT "description", "difficulty", "id", "title" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
CREATE UNIQUE INDEX "Exercise_title_description_key" ON "Exercise"("title", "description");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
