async function addBook() {
    try {
       const response = await fetch("http://localhost:5000/api/auth/fetchallBooks", {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json();
            var newData = ''
            console.log(data);
            
                // location.reload();
                for(let item in data){
                    console.log(data[item]);
                    newData += `<div class="card">
                    <img src="${data[item].bookImage}" alt="Image 3">
                    <p class="Book">${data[item].bookName}</p>
                    <p class="Book">${data[item].author}</p>
                    <p class="Book">${data[item].category}</p>
                    <div class="buttons">
                      <button class="view-button">View</button>
                      <a href="${data[item].bookFile}"><button class="download-button">Download</button></a>
                    </div>
                  </div>`
                }
                const bookContain = document.getElementById("bookContainer");
                bookContain.innerHTML = newData
            } 
         else {
            alert("Server error: " + response.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

addBook()
