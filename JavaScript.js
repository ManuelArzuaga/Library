const mylibray = [];

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

function addBookToLibrary(){
  
  let nameInsert = document.getElementById("libro").value;
  let authorInsert = document.getElementById("autor").value;
  let numberPagesInsert = document.getElementById("paginas").value;
  let leidoInsert = document.getElementById("leido").value;
  book.createbook(nameInsert,authorInsert,numberPagesInsert,leidoInsert);
  mylibray.push(book);
  console.log(mylibray);
  
}

addBookToLibrary()



// function show(){ //muestra elemento ingresado por un input
//   let nameInsert = document.getElementById("libro").value;
//   console.log(nameInsert);
// }



