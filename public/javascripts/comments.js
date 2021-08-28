document.addEventListener('DOMContentLoaded', async (e)=> {

    const deleteButtons = document.querySelectorAll('.fa-times-circle')
    const split = document.URL.split('/')
    const storyId = split[split.length - 1]

    const deleteEvent = async (e) => {
        const commentId = e.target.id.split('-')[1]

        const container = document.querySelector(`#comment-container-${commentId}`)
        container.remove()
        
        const res = await fetch(`/users/my-stories/${storyId}/delete`, {
            method: 'DELETE'
        })
        
    }

    for(let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i]
        button.addEventListener('click', deleteEvent)
    }
    
    
    const commentForm = document.querySelector('#comment-form')


    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(commentForm)
        const content = formData.get('content')
        const body = { content }

        const textArea = document.querySelector('.comment-text-area')
        textArea.value = ''

        const res = await fetch(`/stories/${storyId}/comments/new`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const {newComment, user} = await res.json()

        // date manipulation for comment box
        const date = newComment.createdAt
        const month = date.split('-')[1]
        const day = date.split('T')[0].split('-')[2]
        const newDate = `${month}-${day}`
        
        const parent = document.querySelector('.story-comments-div')
        
        const storyDiv = document.createElement('div')
        storyDiv.setAttribute('class', 'story-comment')
        storyDiv.setAttribute('id', `comment-container-${newComment.id}`)
        storyDiv.innerHTML = `<div class="story-comment-info-wrapper"><div class="story-comment-left-div"><div class="other-container"><div class="commenter-avatar" style="background-image: url('${user.avatarUrl}')"></div><div class="commenter-info"><p>${user.firstName}</p><p>${newDate}</p></div></div><div class="story-comment-right-div"><i class="far fa-times-circle" id="comment-${newComment.id}"></i></div></div></div><div class="story-comment-body-wrapper"><p>${newComment.content}</p></div>`
        
        parent.prepend(storyDiv)

        const newCommentToListen = document.querySelector(`#comment-${newComment.id}`)
        newCommentToListen.addEventListener('click', deleteEvent)
    })
})