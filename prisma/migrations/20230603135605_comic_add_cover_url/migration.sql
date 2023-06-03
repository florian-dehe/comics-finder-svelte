-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comic" (
    "isbn" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "volume" INTEGER NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "pages" INTEGER NOT NULL,
    "coverUrl" TEXT NOT NULL DEFAULT '',
    "updatedAt" DATETIME NOT NULL,
    "seriesId" INTEGER NOT NULL,
    CONSTRAINT "Comic_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comic" ("description", "isbn", "pages", "releaseDate", "seriesId", "title", "updatedAt", "volume") SELECT "description", "isbn", "pages", "releaseDate", "seriesId", "title", "updatedAt", "volume" FROM "Comic";
DROP TABLE "Comic";
ALTER TABLE "new_Comic" RENAME TO "Comic";
CREATE UNIQUE INDEX "Comic_isbn_key" ON "Comic"("isbn");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
