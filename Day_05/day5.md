# Node JS

> Why we use Node JS to write API’s when we can already use python or other languages?

```
We use NodeJS because NodeJS deals with JSON and uses REST to write all it’s APIs and it’s
easier to use NodeJS when we already have good knowledge of Javascript. Also NodeJS is primarily
used for non-blocking, event-driven I/O model which is due to it’s single-threaded nature.
```

### Node JS can compile any Javascript code on the CLI

> To start Node JS in CLI -

```
% node
```

This starts the node cli in the terminal

> To exit the node CLI -

```
> .exit
```

## CRUD operations in NodeJS

### Getting access to the file system using node is done by fs module of the NodeJS.

> Commands -

- (creates a variable with file system access, similar to import statement in JS)

```
> var fs = require(‘fs’);
```

Create a folder on your system using node -

```
> fs.mkdirFileSync(‘folder_name’);
```

Create a file and write in it (if the file is already present on the system/directory, then it will rewrite it with
the new content provided and if we wanna preserve the previous content then use Append command) -

```
> fs.writeFileSync("test_2/hello.txt", "Hello, this is Node JS", (err) => { 	//This call back function is used for error handling	if(err){ 	  console.log(err)	}});
```

> Read Operation i.e. reading the contents of the file -

```
> fs.readFileSync(“test_2/hello.txt"); (returns a buffer instead of the contents of the file)
```

> To read the contents of the file we need to give a second argument to the above command

```
> fs.readFileSync("test_2/hello.txt", ‘utf-8');
```

- (UTF-8 is a variable-width character encoding used for electronic communication defined by the unicode standard)

> Update Operation i.e. append to file without removing the previous contents of the file -

```
>  fs.appendFileSync("test_2/hello.txt", "\nThis line is appended through NodeJS fs (file system) module.\n”);

> Delete Operation i.e. delete the file or directory -

> fs.rmSync(‘test_2/testFile.txt'); (removes the file from the system/directory)

> fs.unlinkSync(‘test_2/testFile.txt'); (another command for removing the file from the system/directory)

> fs.rmdirSync(‘test_2'); (removes the directory/folder from the system)
```

> Rename file -

```
> fs.renameSync('test_2/hello.txt', ‘test_2/testFile.txt’);
```

> REPL -

```
REPL (READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell (Unix/Linux) and command prompt.
Node comes with the REPL environment when it is installed. System interacts with the user through outputs of
commands/expressions used. It is useful in writing and debugging the codes.
```

Another way of executing node commands is by writing all the code in a Javascript file and
then executing the file in common line using node.

```
% node index.js
```

- Index.js contains all the REPL code of node to run
