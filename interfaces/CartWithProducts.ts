import { Prisma } from "@prisma/client";

export type CartWhitProducts = Prisma.CartGetPayload<{
    include:{items:{include:{product:true}}}
}>