document.addEventListener("DOMContentLoaded", async (e) => {

    const bookmarkDelete = document.querySelectorAll('.fa-ban')
    bookmarkDelete.forEach(bookmark => {
        bookmark.addEventListener('click', async (e) => {
            const bookmarkId = bookmark.getAttribute('id').split('-')[1]
            const container = document.querySelector(`#bookmark-container-${bookmarkId}`)
            container.remove()

            const res = await fetch(`/bookmarks/${bookmarkId}`, {
                method: 'DELETE'
            })
        })
    })


    const bookmarks = document.querySelectorAll('.fa-bookmark')
    bookmarks.forEach(bookmark => {
        bookmark.addEventListener('click', async (e) => {
            const bookmarkClass = bookmark.getAttribute('class').split(' ')[0]
            const storyId = bookmark.getAttribute('id').split('-')[1]
            if(bookmarkClass === 'far') {
                bookmark.setAttribute('class', 'fas fa-bookmark')
                const res = await fetch(`/bookmarks/${storyId}`, {
                    method: 'POST'
                })
            } else {
                bookmark.setAttribute('class', 'far fa-bookmark')
                const res = await fetch(`/bookmarks/${storyId}`, {
                    method: 'DELETE'
                })
            }
        })
    })


    const deleteMyStories = document.querySelectorAll('.fa-trash-alt')

    deleteMyStories.forEach(deleteStory => {
        let modal = null
        deleteStory.addEventListener('click', (e) => {
            const storyId = deleteStory.getAttribute('id').split('-')[1]
            if(modal === null) {
                const body = document.getElementsByTagName('body')
                const modalBox = document.querySelector(`#box-${storyId}`)
                modalBox.style.display = 'flex'
                
                const cancelAnchor = document.querySelector(`#close-${storyId}`)
                const storyDeleteButton = document.querySelector(`#delete-${storyId}`)
                cancelAnchor.addEventListener('click', (e) => {
                    modalBox.style.display = 'none'
                })

                storyDeleteButton.addEventListener('click', async (e) => {
                    const container = document.querySelector(`#myStory-${storyId}`)
                    container.remove()

                    const res = await fetch(`/users/my-stories/${storyId}/delete`, {
                        method: 'DELETE'
                    })

                })

            }
        })
    })


    
})