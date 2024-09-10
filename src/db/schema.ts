import { createId } from "@paralleldrive/cuid2";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const goals = pgTable('goals', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    title: text('title').notNull(),
    desiredWeeklyFrenquency: integer('desired_weekly_frenquency').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),

})

export const goalsCompletions = pgTable('goals_completions', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    goalsId: text('goals_id').references(() => goals.id).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),

})