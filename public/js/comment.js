const post_id = document.querySelector('input[name="post-id"]').value;

// console.log(postId);

const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_body = document.querySelector('textarea[name="comment-body"]').value;
    // console.log(comment_body);
    if (commentBody) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
}

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);