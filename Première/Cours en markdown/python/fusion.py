def fusion(lstA,lstB) :
    i = 0
    j = 0
    lstF = []
    while i < len(lstA) and j < len(lstB) :
        if lstA[i] <= lstB[j] :
            lstF.append(lstA[i])
            i += 1
        if lstA[i] >= lstB[j] :
            lstF.append(lstB[j])
            j += 1
    if i == len(lstA) :
        while j < len(lstB) :
            lstF.append(lstB[j])
            j += 1
    if j == len(lstB) :
        while i < len(lstA) :
            lstF.append(lstA[i])
            i += 1
    return lstF