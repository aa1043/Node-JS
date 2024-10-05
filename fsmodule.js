
//      WRITE FILE CREATES A FILE AND WRITE TO IT

const fs=require('fs')
fs.writeFile('hey.txt',"Hi how are you",(err,data)=>
{
  if(err)
  {
    console.error(err);
  }
  else{
    console.log("DONE");
    
  }
})

//      APPEND FILE ADDS TO THE ALREADY WRITTEN FILE


fs.appendFile('hey.txt'," I am good Bro",(err,data)=>
  {
    if(err)
    {
      console.error(err);
    }
    else{
      console.log("DONE");
    }
  })

  //      CHANGES THE NAME OF THE ALREADY CREATED FILE

  fs.rename('hey.txt','hello.txt',(err)=>
  {
    if(err)
      {
        console.error(error);
      }
      else
      {
        console.log("Done");
      }
  }
)

//      COPIES THE CONTENT OF FIRST TO 2ND FILE


fs.copyFile('hello.txt', './COPY/copied.txt', (err) => {
  if (err) {
    console.error(err); 
  } else {
    console.log('Copying done');
  }
});

//      DELETES THE FILE MENTIONED

fs.unlink("hey.txt",(err)=>
{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log('DONE'); 
  }
})

//      DELETES THE FOLDER MENTIONED CAN ONLY DELETE EMPTY FOLDER BUT FOR NON EMPTY USE AN OBJECT TO MAKE RECURSIVE TRUE

fs.rm('./COPY',{recursive:true},(err)=>
{
  if(err)
  {
    console.error(err)
  }
  else{
    console.log("Folder removed succesfully");
    
  }
})

//      CREATES THE FOLDER MENTIONED 

fs.mkdir('./newfolder',(err)=>
{
  if(err)
  {
    console.error(err)
  }
  else{
    console.log('Folder created succefully');
    
  }
})

//      READS FROM THE MENTIONED FILE

fs.readFile('hello.txt','utf8',(err,data)=>
{
  if(err)
  {
    console.error(err)
  }
  else{
    console.log(data); 
  }
})


//       READS THE FILE NAMES FROM THE MENTIONED FOLDER

fs.readdir('./newfolder',(err,file)=>
{
  if(err)
  {
    console.error(err); 
  }
  else{
    console.log(file);
  }
})

//       Open a file and get its file descriptor returns an integer

fs.open('hello.txt',(err,data)=>
  {
    if(err)
    {
      console.error(err)
    }
    else{
      console.log(data); 
    }
  })

//       READS THE FILE NAMES FROM THE MENTIONED FOLDER AND UNIQUELY IDENTEFIES A FILE OR A FOLDER

fs.readdir("newfolder",{withFileTypes:true},(err,data)=>
{
  if(err)
  {
    console.error(err); 
  }
  else{
    console.log(data);
    
  }
})

//        OUTPUT IS LIKE THIS 1 MEANS FILE AND 2 MEANS FOLDER

/*[
  Dirent {
    name: 'BYE.TXT',
    parentPath: 'newfolder',
    path: 'newfolder',
    [Symbol(type)]: 1
  },
  Dirent {
    name: 'DFGH.HG',
    parentPath: 'newfolder',
    path: 'newfolder',
    [Symbol(type)]: 2
  },
  Dirent {
    name: 'HI.TXT',
    parentPath: 'newfolder',
    path: 'newfolder',
    [Symbol(type)]: 1
  }
]*/
