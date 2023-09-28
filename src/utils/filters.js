export const filters = {
    all: "All",
    active: "Active",
    completed: "Completed",
}
export const filterHandlers = {
    [filters.all]: () => true,
    [filters.active]: ({completed}) => !completed,
    [filters.completed]: ({completed}) => completed,
}