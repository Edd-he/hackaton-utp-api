-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "cod" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cod_key" ON "User"("cod");
