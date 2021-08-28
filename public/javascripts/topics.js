document.addEventListener("DOMContentLoaded", async (e) => {
    console.log('running from topics')

    const topicFollowButtons = document.querySelectorAll('.topic-follow')

    topicFollowButtons.forEach(topicFollowButton => {
        const classes = topicFollowButton.getAttribute('class')
        const topicId = topicFollowButton.getAttribute('id').split('-')[1]
        if(classes.endsWith('topic-follow')) {
            topicFollowButton.addEventListener('click', async (e) => {
                
                if (topicFollowButton.style.backgroundColor === 'rgb(225, 143, 107)' ||
                     topicFollowButton.style.color === 'rgb(225, 143, 107)') {
                    if (classes.includes('topic-button')) {
                        topicFollowButton.innerText = 'Add'
                        topicFollowButton.style.backgroundColor = 'rgb(251, 210, 102)'
                    } else {
                        topicFollowButton.style.color = 'rgb(251, 210, 102)'
                    }
    
                    const res = await fetch(`/topics/${topicId}/like`, {
                        method: 'DELETE'
                    })

                } else {
                    if (classes.includes('topic-button')) {
                        topicFollowButton.innerText = 'Remove'
                        topicFollowButton.style.backgroundColor = 'rgb(225, 143, 107)'
                    } else {
                        topicFollowButton.style.color = 'rgb(225, 143, 107)'
                    }
    
                    const res = await fetch(`/topics/${topicId}/like`, {
                        method: 'POST'
                    })
                }
            })
        }
    })
})