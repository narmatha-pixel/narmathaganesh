document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("postButton");
    const postContent = document.getElementById("postContent");
    const postsContainer = document.getElementById("postsContainer");

    // Handle Post Button Click
    postButton.addEventListener("click", () => {
        const content = postContent.value.trim();
        if (content) {
            createPost(content);
            postContent.value = ''; // Clear the textarea
        }
    });

    // Function to create a post
    function createPost(content) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <p>${content}</p>
            <div class="post-actions">
                <span class="likes-count">0 likes</span>
                <button class="like-button">Like</button>
                <button class="comment-button">Comment</button>
            </div>
            <div class="comment-section"></div>
        `;
        postsContainer.prepend(postElement); // Add new post at the top

        const likeButton = postElement.querySelector(".like-button");
        const likesCount = postElement.querySelector(".likes-count");
        const commentButton = postElement.querySelector(".comment-button");
        const commentSection = postElement.querySelector(".comment-section");

        // Handle Like Button Click
        let likes = 0;
        likeButton.addEventListener("click", () => {
            likes++;
            likesCount.textContent = `${likes} likes`;
        });

        // Handle Comment Button Click
        commentButton.addEventListener("click", () => {
            createCommentBox(commentSection);
        });
    }

    // Function to create comment box
    function createCommentBox(commentSection) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
            <textarea placeholder="Add a comment"></textarea>
            <button>Submit</button>
        `;
        commentSection.appendChild(commentElement);

        const submitButton = commentElement.querySelector("button");
        const commentInput = commentElement.querySelector("textarea");

        // Handle Comment Submit
        submitButton.addEventListener("click", () => {
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentDisplay = document.createElement("p");
                commentDisplay.textContent = commentText;
                commentSection.appendChild(commentDisplay);
                commentElement.remove(); // Remove comment box after submitting
            }
        });
    }
});