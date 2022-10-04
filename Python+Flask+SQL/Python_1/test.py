x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#change 10 in x to 15 -> [10,8,9] first numb second array
x[1][0] = 15
print(x)

#change last name of first student from Bryant to Jordan. 1st student is Jordan
students[0]['last_name'] = "Bryant"
print(students)

#change Messi to Andres. soccer is array name first name, index 0
sports_directory['soccer'][0] = "Andres"
print(sports_directory)

#change the value 20 in z to 30, 1 array index 0 name is 'y'
z[0]['y']=30
print(z)

#create a function that given a list of dictionaies, loops through each dictionary in list and prints each key and assoc value
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'},
    ]

def iterateDictionary(students):
    for i in range(0, len(students)):
        temp = ""
        for key, val in students[i].items():
            temp += (f"{key} - {val}, ")
        print(temp)
iterateDictionary(students)

#create a function that given a list of dictionaries and a key name, function prints the value in that key for each dictionary.

def iterateDictionary2(key_name, students):
    for i in range(0, len(students)):
        for key, val in students[i].items():
            if key == key_name:
                print(val)

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

#create a function that given a dictionary, prints name of each key along with size of list

dojo = {
'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    for key, val in dojo.items():
        print(len(val), f"{key}")
        for i in range(0, len(val)):
            print(val[i])

printInfo(dojo)



# # output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
