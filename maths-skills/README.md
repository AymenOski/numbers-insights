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
To run this project, you need:

Node.js (a recent version that supports ES Modules)

---

## 🚀 How to Compile & Run
Use the following command to compile the program using `GCC` and downloading assets:
```
git clone https://github.com/AymenOski/numbers-insights/tree/main/maths-skills

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