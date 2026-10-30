// Frontmatter dates are calendar days stored as UTC midnight. Format them in
// UTC too, otherwise the build machine's (or workerd's) timezone shifts the day.
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
