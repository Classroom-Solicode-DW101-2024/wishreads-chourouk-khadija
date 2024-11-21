let informationBook;
fetch('./data.json').then(response=>{
    if(!response.ok)
        console.log('erreur de récupération de fichier');
    return response.json();
}
)
.then(data=>
{

const container = document.getElementById('books-container');
 let library= data.books;
  informationBook=library;
for(let i=0 ; i<library.length ; i++) {
    const bookElement = document.createElement('article'); 
    bookElement.classList.add('informationLivre','livres');
    bookElement.innerHTML = `
        
        <h2>${library[i].title}</h2> <br>
        <p>Auteur: ${library[i].author.fullname}</p>  
        <button id="buttondetail"  type="button" onclick="afficherdetail(${i})"> détail </button>
        <button type="button"  onclick="ajouterBook(${i})" >Libre ajout </button>
       
    `;
    const bookImg = document.createElement('img');  
    bookImg.src = library[i].cover;
    bookImg.classList.add('couverture','livres');
    container.appendChild(bookElement);
    container.appendChild(bookImg);
}
    

 
})
function afficherdetail(index){
    window.location.assign("detail.html");
    localStorage.setItem('selectedBook',JSON.stringify(informationBook[index]));
      }
  
      class Book{
          constructor(title,description,cover,author,releaseDate,details=[]){
             this.title=title;
             this.description=description;
             this.cover=cover;
             this.author=author;
             this.releaseDate=releaseDate;
             this.details=details;
          }  
       }
  
   function ajouterBook(index){
      const favoris =  JSON.parse(localStorage.getItem('favoris')) || [];
        const livre = informationBook[index] ;
        favoris.push(livre);
       
        localStorage.setItem('favoris',JSON.stringify(favoris));
      
      
   }
  function afficherLivreFavorise(){
      window.location.assign("favorie.html");
  }