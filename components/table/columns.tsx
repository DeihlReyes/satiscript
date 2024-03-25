"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { Calls } from "@/components/table/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import Link from "next/link"
import { formatDate } from "@/lib/formatter"

export const columns: ColumnDef<Calls>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Call" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{formatDate(row.getValue("date"))}</div>,
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
    accessorKey: "script",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Script" />
    ),
    cell: ({ row }) => <div className="w-full pr-2 text-blue-600"><Link href={row.getValue("script")}>Download</Link></div>,
    enableSorting: false,
    enableHiding: false,
  },
]