# 📊 Math Skills Project  

## 📖 Description  
This program reads a file containing numbers and calculates the following statistical values:

- **Average**
- **Median**
- **Variance**
- **Standard Deviation**

The results are rounded to the nearest integer and displayed in the terminal.

---
## 🔧 Installation (for C users)
To run this program, you need to have a C compiler installed on your system. You can download and install a C compiler from the official website of your operating system

---

## 🚀 How to Compile & Run
Use the following command to compile the program using `GCC` and downloading assets:
```
git clone https://learn.zone01oujda.ma/git/ayazizi/math-skills.git

gcc -g -o main main.c -lm

curl -O https://assets.01-edu.org/stats-projects/stat-bin-dockerized.zip

unzip stat-bin-dockerized.zip
```
---
Run this script (You can run this script multiple times, to generate different set of random numbers into data.txt file):

`./stat-bin/bin/math-skills`

then run the program with the created file (data.txt) by the previous command.

`node math-skills.mjs data.txt`


## Example Input (data.txt)
```
189
113
121
114
145
110
```
## Example Output 
```
Average: 132
Median: 121
Variance: 1005
Standard Deviation: 31
```