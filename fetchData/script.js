



fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(post => {

        post.forEach((posts) => {
          displyPots(posts);
        });
      });
             
      function displyPots(post){
        let placeContainer = document.querySelector(".contianer");
      
          let postContainer = document.createElement('div');
          postContainer.classList.add('container');
          let title = document.createElement('div');
          title.classList.add("titil")
          title.textContent = post.title;
          let numberOfPost = document.createElement('span');
          numberOfPost.classList.add("numberOfPost")
          numberOfPost.textContent = post.id;
          let discription = document.createElement('div');
          discription.classList.add("discription")
          discription.textContent = post.body;

          postContainer.appendChild(title);
          postContainer.appendChild(numberOfPost);
          postContainer.appendChild(discription);

          placeContainer.appendChild(postContainer);
      
      }



