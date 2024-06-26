"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import Link from "next/link"
import { formatDate } from "@/lib/formatter"
import { Calls } from "@/lib/validation"
import { capitalizeFirstLetter, formatTime } from "@/lib/utils"



export const columns: ColumnDef<Calls>[] = [
  {
    accessorKey: "callId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Call ID" />
    ),
    cell: ({ row }) => <div className="w-full pr-2">{row.getValue("callId")}</div>,
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
    cell: ({ row }) => <div className="w-full pr-2">{formatTime(row.getValue("time"))}</div>,
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
    cell: ({ row }) => <div className="w-full pr-2">{capitalizeFirstLetter(row.getValue("satisfaction"))}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]