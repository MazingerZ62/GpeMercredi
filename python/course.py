classement = ["Nadia", "Franck", "Thomas", "Elizabeth", "Laure"]

def nombre_coureurs (classement) :
	assert type(classement) == list
	assert all([type(obj) == str for obj in classement])
	return len(classement)


####################################

def dernier(classement) :
	assert type(classement) == list
	assert all([type(obj) == str for obj in classement])
	return classement[len(classement) - 1]

assert dernier(classement) == "Laure"
print("bvo")


