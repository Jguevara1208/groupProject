document.addEventListener('DOMContentLoaded', async (e) => {

    const followButton = document.querySelector('.follow-button-container')
    const classSplit = followButton.getAttribute('class').split('-')
    const userToFollowId = classSplit[classSplit.length - 1]

    followButton.addEventListener('click', async (e) => {

        if (followButton.style.backgroundColor === "rgb(225, 143, 107)") {
            followButton.innerText = 'Follow'
            followButton.style.backgroundColor = '#FBD266'
            const res = await fetch(`/users/${userToFollowId}/follow`, {
                method: "DELETE"
            })
            
        } else {
            followButton.innerText = 'Unfollow'
            followButton.style.backgroundColor = '#e18f6b'

            const res = await fetch(`/users/${userToFollowId}/follow`, {
                method: "POST"
            })
        }
    })
})