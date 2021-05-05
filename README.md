# Task 1 - Caesar cipher CLI tool

##  **1. Get started.**

Firs of all clone this git repo to your machine. For it run in your terminal : 

`git clone https://github.com/okrypets/RSScholl_NodeJS.git `

Then install all dependencies: 

`npm install`


## **2. Commands.**

CLI tool can accept 4 options:

- -s, --shift: a shift (integer positive or negative)*.
- -i, --input: an input file
- -o, --output: an output file
- -a, --action: an action encode/decode.*

`*` Option is required!!

## **3. Usage example.**

### 1. action is encode without input and output files: 

`node caesar_cipher -a encode -s 2`

> stdin: Hello! This is my first CLI

> stdout: Jgnnq! Vjku ku oa hktuv ENK

### 2. action is decode without input and output files:

`node caesar_cipher -a decode -s 2`

> stdin: Jgnnq! Vjku ku oa hktuv ENK

> stdout: Hello! This is my first CLI

### 3. action is encode with input and output files:

`node caesar_cipher -a decode -s 2 -i "./input.txt" -o "./output.txt"`

NOTE: At the first please create in src/ directory input.txt and decode.txt files with text and empty output.txt file.

> decode.txt: Hello! This is my first CLI

> output.txt: Jgnnq! Vjku ku oa hktuv ENK

### 4. Negative shift handling

`node caesar_cipher --action encode --shift -1 -i "./input.txt" -o "./output.txt"`

> input.txt: Hello! This is my first CLI

> output.txt: Gdkkn! Sghr hr lx ehqrs BKH