
export const prioritizer = ( posts ) => {
    if (posts === undefined) return null
    if (Object.values(posts).length === 0 ) return null;
    let prioritizedJobs = []
    prioritizedJobs = posts.sort((a, b) => b.priority - a.priority)

    return prioritizedJobs
}