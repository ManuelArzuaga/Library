const mylibrary = [];

const book = {

  createbook : function(name,author,numberPages,read){ //constructor
    
    this.name = name;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;
  },

  showBook : function (){  //get
  
    
    console.log(book.name);
    console.log(book.author);
    console.log(book.numberPages);
    console.log(book.read);
  }
}

function addBookToLibrary(event){
  event.preventDefault();
  let nameInsert = document.getElementById("libro").value;
  let authorInsert = document.getElementById("autor").value;
  let numberPagesInsert = document.getElementById("paginas").value;
  let leidoInsert = document.getElementById("leido").value;
  book.createbook(nameInsert,authorInsert,numberPagesInsert,leidoInsert);;
  mylibrary.push(book);
}



function showLibrary(){
  for(let i=0;i<mylibrary.length;i++){
    console.log(mylibrary[i]);
  }
}

// function eliminarBook(e){
//   e.preventDefault();
//   let libroNombre = document.getElementById("eliminar");
//   for(let i=0; i<mylibrary.length;i++){
//     if(mylibrary[i].name === libroNombre){
//       mylibrary.splice(mylibrary[i],1);
//     }
//   }
// }


// function show(){ //muestra elemento ingresado por un input
//   let nameInsert = document.getElementById("libro").value;
//   console.log(nameInsert);
// }



