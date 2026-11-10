1/ pwd

2/ ls

3/ ls -la

4/ cd /home
   cd /workspaces/GpeMercredi

5/ tree

6/ mkdir MiniTP_Linux

7/ cd ./MiniTP_Linux
   mkdir Documents
   mkdir Images
   mkdir Scripts

8/ cd ./Documents
   touch cours.txt
   touch notes.txt

9/ ls
   cd ..

10/ cp ./Documents/cours.txt ./Scripts/programme.py

11/ mv ./Documents/notes.txt ./Images/notes.txt

12/ echo "Linux est un système d'exploitation" > ./Documents/cours.txt
    echo "Le terminal permet de communiquer avec les système" >> ./Documents/cours.txt
Indic : > remplace le contenu d'un fichier par ce qu'on écrit alors que >> rajoute ce quèon écrit dans le fichier

13/ cat ./Documents/cours.txt

14/ less ./Documents/cours.txt
    La touche pour quitter est `q`.

15/ grep "terminal" ./Documents/cours.txt

16/ wc -l ./Documents/cours.txt
    wc -w ./Documents/cours.txt
    wc -m ./Documents/cours.txt

17/ whoami
    id
    which python

18/ history

#### -------------------------------------

1. chmod +x ./Scripts/programme.py
   La commande pour vérifier est : ls -l ./Scripts/programme.py

2. rm ./Documents/cours.txt ./Images/notes.txt ./Scripts/programme.py
   cd .. 
   rm -r ./MiniTP_Linux

3. rm supprime uniquement des fichiers, rmdir supprime uniquement des dossiers vides alors que 
   rm -r supprime les dossiers et tous ceux qu'ils contiennent.
