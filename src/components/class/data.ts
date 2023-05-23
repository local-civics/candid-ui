import { TransferListData } from "@mantine/core";

/**
 * ClassData
 */
export type ClassData = {
  name: string
  status: "admin" | "member" | "archived"
  members: TransferListData[]
}