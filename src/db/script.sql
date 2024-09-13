WITH "goals_created_up_to_week" AS (
    SELECT
        "id",
        "title",
        "desired_weekly_frequency",
        "created_at"
    FROM
        "goals"
    WHERE
        "goals"."created_at" <= '2024-09-15T02:59:59.999Z'
),
"goal_completion_counts" AS (
    SELECT
        "goals_id",
        COUNT("id") AS "completionCount"
    FROM
        "goals_completions"
    WHERE
        ("goals_completions"."created_at" >= '2024-09-08T03:00:00.000Z' 
        AND "goals_completions"."created_at" <= '2024-09-15T02:59:59.999Z')
    GROUP BY
        "goals_completions"."goals_id"
)
SELECT
    "goals_created_up_to_week"."id",
    "goals_created_up_to_week"."title",
    "goals_created_up_to_week"."desired_weekly_frequency",
    COALESCE("completionCount", 0) AS "completionCount"
FROM
    "goals_created_up_to_week"
LEFT JOIN
    "goal_completion_counts" ON "goal_completion_counts"."goals_id" = "goals_created_up_to_week"."id";
