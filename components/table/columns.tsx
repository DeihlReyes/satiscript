"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import Link from "next/link"
import { formatDate } from "@/lib/formatter"
import { Calls } from "@/lib/validation"

export const columns: ColumnDef<Calls>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Call ID" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{formatDate(row.getValue("createdAt"))}</div>,
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{row.getValue("time")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{row.getValue("duration")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "satisfaction",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Satisfaction" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{row.getValue("satisfaction")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "scriptlink",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Script" />
    ),
    cell: ({ row }) => <div className="w-full pr-2 text-blue-600"><Link target="_blank" href={row.getValue("scriptlink")}>Download</Link></div>,
    enableSorting: false,
    enableHiding: false,
  },
]