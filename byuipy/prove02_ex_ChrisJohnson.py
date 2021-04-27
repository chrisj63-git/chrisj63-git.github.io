"""
File: prep_02_ChrisJohnson.py
Author: Chris Johnson

"""
dash = "----------------------------------------"

print("Please enter the following information:\n")
fname = input('First Name: ')
lname = input('Last Name: ')
email = input('Email address: ')
phone = input('Phone number: ')
jtitle = input('Job title: ')
id = input('ID Number: ')
chair = input('Your hair color: ')
ceye = input('Your eye color: ')
smonth = input('Your start month: ')
atrain = input('Completed Advanced Training? yes/no: ')

print("The ID Card is:")
print(f"\n{dash}")
print(f"{lname.upper()}, {fname.capitalize()}")
print(f"{jtitle}")
print(f"ID: {id}\n")
print(f"{email.lower()}")
print(f"{phone}\n")
print(f"Hair: {chair.capitalize():15} Eyes: {ceye.capitalize()}")
print(f"Month: {smonth.capitalize():14} Training: {atrain.capitalize()}")
print(f"{dash}\n")

"""
Making it my own:



"""