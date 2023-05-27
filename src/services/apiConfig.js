import prisma from "@/lib/prisma";

export const getAllMakanan = async () => {
  try {
    const res = await prisma.makanan.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        desc: true,
        image: true,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllMinuman = async () => {
  try {
    const res = await prisma.minuman.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        desc: true,
        image: true,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllPaket = async () => {
  try {
    const res = await prisma.paket.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        desc: true,
        image: true,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
