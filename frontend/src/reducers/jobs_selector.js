
export const prioritizer = ( posts ) => {
    if (posts === undefined) return null
    if (Object.values(posts).length === 0 ) return null;
    let prioritizedJobs = []
    prioritizedJobs = posts.sort((a, b) => b.priority - a.priority)

    return prioritizedJobs
}

export const highPrioritizer = (posts) => {
    if (posts === undefined) return null
    let highPriority = []

    
    Object.values(posts).forEach(post => {
        if (post.priority === 3){
            highPriority.push(post)
        }
    })

    return highPriority
}

export const mediumPrioritizer = (posts) => {
    if (posts === undefined) return null
    let mediumPriority = []

    Object.values(posts).forEach(post => {
        if (post.priority === 2) {
            mediumPriority.push(post)
        }
    })

    return mediumPriority

}

export const lowPrioritizer = (posts) => {

    if (posts === undefined) return null
    let lowPriority = []

    Object.values(posts).forEach(post => {
        if (post.priority === 1) {
            lowPriority.push(post)
        }
    })


    return lowPriority
}