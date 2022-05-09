const newPostFormHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;
    
    // console.log(postTitle);
    // console.log(postContent);

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to post')
    };
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostFormHandler);