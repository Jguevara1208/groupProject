document.addEventListener("DOMContentLoaded", async (e) => {
    const likesCount = document.querySelector("#like-count")
    const likesIcon = document.querySelector('.fa-thumbs-up')
    const split = document.URL.split('/')
    const storyId = split[split.length - 1]

    const res = await fetch(`/stories/${storyId}/likes`, {
        method: "GET"
    })
    const likesNum = await res.json()
    likesCount.innerText = likesNum


    likesIcon.addEventListener('click', async (e) => {
        const liked = e.target.getAttribute('class') //far fa-thumbs-up

        if (liked.includes('far')) {

            const res = await fetch(`/stories/${storyId}/likes`, {
                method: "POST"
            })
    
            const likesNumAgain = await res.json()
            likesCount.innerText = likesNumAgain
            e.target.setAttribute('class','fas fa-thumbs-up')

        } else {
            const res = await fetch(`/stories/${storyId}/likes`, {
                method: "DELETE"
            })

            const likesNumAgain = await res.json()
            likesCount.innerText = likesNumAgain
            e.target.setAttribute('class', 'far fa-thumbs-up')
        }

    })
})