-- CreateTable
CREATE TABLE "Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Editor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "editorId" INTEGER NOT NULL,
    CONSTRAINT "Collection_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "Editor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Series" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,
    CONSTRAINT "Series_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comic" (
    "isbn" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "volume" INTEGER NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "pages" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "seriesId" INTEGER NOT NULL,
    CONSTRAINT "Comic_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AuthorToComic" (
    "A" INTEGER NOT NULL,
    "B" BIGINT NOT NULL,
    CONSTRAINT "_AuthorToComic_A_fkey" FOREIGN KEY ("A") REFERENCES "Author" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AuthorToComic_B_fkey" FOREIGN KEY ("B") REFERENCES "Comic" ("isbn") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Editor_name_key" ON "Editor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_key" ON "Collection"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Series_name_key" ON "Series"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Comic_isbn_key" ON "Comic"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToComic_AB_unique" ON "_AuthorToComic"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToComic_B_index" ON "_AuthorToComic"("B");
