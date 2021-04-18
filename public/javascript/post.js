const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const needed_funding = document.querySelector('#post-funding').value.trim();
 
  const description = document.querySelector('#post-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

// adding update button on my own
const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-class')) {
    const id = event.target.getAttribute('data-class');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#update-button')
  .addEventListener('click', updateButtonHandler);